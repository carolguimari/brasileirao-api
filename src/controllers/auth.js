const jwt = require('jsonwebtoken');
const comparison = require('../utils/password');
const response = require('./response');
const User = require('../repositories/users');

require('dotenv').config();

const autenticarUser = async (ctx) => {
	const { email, password } = ctx.request.body;
	if (email && password) {
		const user = await User.obterUser(email);
		const check = await comparison.comparePassword(password, user.senha);
		if (check) {
			const token = await jwt.sign(
				{ id: user.id, email: user.email },
				process.env.JWT_SECRET,
				{
					expiresIn: '1d',
				}
			);

			response(ctx, 200, token);
		}
	} else {
		response(ctx, 400, { mensagem: 'Requisição mal formatada' });
	}
};

module.exports = { autenticarUser };
