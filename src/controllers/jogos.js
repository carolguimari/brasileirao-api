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

const criarJogo = async (ctx) => {
	const {
		id = null,
		time_casa = null,
		time_visitante = null,
		gols_casa = null,
		gols_visitante = null,
		rodada = null,
	} = ctx.request.body;

	const novoJogo = {
		id,
		time_casa,
		time_visitante,
		gols_casa,
		gols_visitante,
		rodada,
	};

	const result = await JogosDB.inserirJogo(novoJogo);
	const jogos = await JogosDB.obterJogos();
	if (jogos) {
		// eslint-disable-next-line no-unused-vars
		const tabela = await helpers.criarTabela(jogos);
	}
	response(ctx, 200, result);
};

const excluirJogo = async (ctx) => {
	const { id = null } = ctx.request.body;
	if (id) {
		const jogo = await JogosDB.obterJogoPorId(id);
		if (jogo) {
			const result = await JogosDB.deletarJogo(jogo);
			response(ctx, 200, result);
		}
	}
};

module.exports = {
	listarJogosPorRodada,
	obterClassificacao,
	editarJogo,
	criarJogo,
	excluirJogo,
};
