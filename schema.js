const Joi = require('joi');
module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        price :Joi.number().required().min(0),
        author : Joi.string().required(),
        genre : Joi.string().required(),
        language : Joi.string().required(),
        publicationDate :Joi.date().required().min(0),
        pages :Joi.number().required().min(0),
        image : Joi.string().allow(" ",null)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
});
