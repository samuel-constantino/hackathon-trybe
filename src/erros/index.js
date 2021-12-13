const { StatusCodes } = require('http-status-codes');

const ALL_ENTRIES_FILLED = {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Todos os campos devem ser preenchidos.',
};

const INCORRECT_USERNAME_OR_PASSWORD = {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Nome de usuário ou senha incorretos.',
};
module.exports = {
    ALL_ENTRIES_FILLED,
    INCORRECT_USERNAME_OR_PASSWORD,
};
