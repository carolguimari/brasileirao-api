const bcrypt = require('bcryptjs');

const comparePassword = async (password, hash) => {
	const result = await bcrypt.compare(password, hash);
	return result;
};

module.exports = { comparePassword };
