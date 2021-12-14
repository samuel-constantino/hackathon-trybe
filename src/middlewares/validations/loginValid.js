const { ALL_ENTRIES_FILLED, INCORRECT_USERNAME_OR_PASSWORD } = require('../../erros');

const checkFields = (fields) => (
    fields.reduce((ok, field) => ok && typeof field === 'string' && field.length, true)
);

const checkUserEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

const userValid = (req, _res, next) => {
    const { email, password } = req.body;
    
    if (!checkUserEmail(email) || !checkFields([password])) {
        next(ALL_ENTRIES_FILLED);
    }

    if (!checkFields([email])) next(INCORRECT_USERNAME_OR_PASSWORD);

    next();
};

module.exports = userValid;
