/* eslint-disable no-restricted-syntax */

let tabela = [];

const calcularTabela = (nome, pontos, golsFeitos, golsSofridos) => {
	const timeExiste = tabela.find((time) => time.nome === nome);
	if (timeExiste) {
		// atualiza time
		timeExiste.jogos += 1;
		timeExiste.pontos += pontos;
		timeExiste.vitorias += pontos === 3 ? 1 : 0;
		timeExiste.derrotas += pontos === 0 ? 1 : 0;
		timeExiste.empates += pontos === 1 ? 1 : 0;
		timeExiste.golsFeitos += golsFeitos;
		timeExiste.golsSofridos += golsSofridos;
		timeExiste.saldoGols += golsFeitos - golsSofridos;
	} else {
		// insere time
		tabela.push({
			nome,
			jogos: 1,
			pontos,
			vitorias: pontos === 3 ? 1 : 0,
			derrotas: pontos === 0 ? 1 : 0,
			empates: pontos === 1 ? 1 : 0,
			golsFeitos,
			golsSofridos,
			saldoGols: golsFeitos - golsSofridos,
		});
	}

	return tabela;
};

const criarTabela = (jogos) => {
	tabela = [];
	for (const jogo of jogos) {
		if (jogo.gols_casa === jogo.gols_visitante) {
			// empate
			calcularTabela(
				jogo.time_casa,
				1,
				jogo.gols_casa,
				jogo.gols_visitante
			);
			calcularTabela(
				jogo.time_visitante,
				1,
				jogo.gols_visitante,
				jogo.gols_casa
			);
		} else if (jogo.gols_casa > jogo.gols_visitante) {
			// time da casa venceu
			calcularTabela(
				jogo.time_casa,
				3,
				jogo.gols_casa,
				jogo.gols_visitante
			);
			calcularTabela(
				jogo.time_visitante,
				0,
				jogo.gols_visitante,
				jogo.gols_casa
			);
		} else {
			// time visitante venceu
			calcularTabela(
				jogo.time_casa,
				0,
				jogo.gols_casa,
				jogo.gols_visitante
			);
			calcularTabela(
				jogo.time_visitante,
				3,
				jogo.gols_visitante,
				jogo.gols_casa
			);
		}
	}
	// eslint-disable-next-line no-use-before-define
	ordenarTabela(tabela);
	return tabela;
};

const ordemAlfabetica = () => {
	tabela.sort((a, b) => a.nome.localeCompare(b.nome));
};

const ordenarTabela = () => {
	tabela.sort((a, b) => {
		if (
			a.pontos > b.pontos ||
			a.vitorias > b.vitorias ||
			a.saldoGols > b.saldoGols
		) {
			return -1;
		}
		if (
			b.pontos > a.pontos ||
			b.vitorias > a.vitorias ||
			b.saldoGols > a.saldoGols
		) {
			return 1;
		}
		return ordemAlfabetica();
	});
};

module.exports = {
	criarTabela,
	calcularTabela,
	ordenarTabela,
	ordemAlfabetica,
};
