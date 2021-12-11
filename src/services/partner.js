const partnerModel = require('../models/partner');

const create = async (partner) => {
    const result = await partnerModel.create(partner);

    return result;
};

module.exports = {
    create,
};
