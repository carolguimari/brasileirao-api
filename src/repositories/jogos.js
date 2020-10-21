/* eslint-disable camelcase */
const database = require('../utils/database');

const obterJogos = async () => {
	const query = `SELECT * FROM jogos`;
	const result = await database.query(query);
	return result.rows;
};

const obterJogosPorRodada = async (rodada = null) => {
	if (!rodada) {
		return null;
	}

	const query = `SELECT * FROM jogos WHERE rodada = $1`;
	const result = await database.query({
		text: query,
		values: [rodada],
	});

	return result.rows;
};

const obterJogoPorId = async (id = null) => {
	if (!id) {
		return null;
	}
	const query = `SELECT * FROM jogos WHERE id = $1`;
	const result = await database.query({
		text: query,
		values: [id],
	});

	return result.rows.shift();
};

const atualizarJogo = async (jogo) => {
	const { id, gols_casa, gols_visitante } = jogo;
	const query = {
		text: `UPDATE jogos SET gols_casa = $1,
		gols_visitante = $2 WHERE id = $3
		RETURNING *`,
		values: [gols_casa, gols_visitante, id],
	};
	const result = await database.query(query);

	return result.rows.shift();
};
module.exports = {
	obterJogos,
	obterJogosPorRodada,
	obterJogoPorId,
	atualizarJogo,
};
