const response = require('./response');
const JogosDB = require('../repositories/jogos');
const helpers = require('./helpers');

const listarJogosPorRodada = async (ctx) => {
	const { rodada = null } = ctx.query;
	if (rodada) {
		const result = await JogosDB.obterJogosPorRodada(rodada);
		if (result) {
			response(ctx, 200, result);
		} else {
			response(ctx, 404, { message: 'Rodada não encontrada' });
		}
	}
};

const obterClassificacao = async (ctx) => {
	const jogos = await JogosDB.obterJogos();
	if (jogos) {
		const tabela = await helpers.criarTabela(jogos);
		response(ctx, 200, tabela);
	} else {
		response(ctx, 404, { message: 'Conteúdo não encontrado' });
	}
};

const editarJogo = async (ctx) => {
	const {
		id = null,
		gols_casa = null,
		gols_visitante = null,
	} = ctx.request.body;

	const jogo = await JogosDB.obterJogoPorId(id);
	if (jogo) {
		const jogoAtualizado = {
			...jogo,
			gols_casa,
			gols_visitante,
		};
		const result = await JogosDB.atualizarJogo(jogoAtualizado);
		const jogos = await JogosDB.obterJogos();
		if (jogos) {
			// eslint-disable-next-line no-unused-vars
			const tabela = await helpers.criarTabela(jogos);
		}
		response(ctx, 200, result);
	} else {
		response(ctx, 404, { message: 'Conteúdo não encontrado' });
	}
};

module.exports = { listarJogosPorRodada, obterClassificacao, editarJogo };
