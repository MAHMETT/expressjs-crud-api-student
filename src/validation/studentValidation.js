const Joi = require('joi');

// createValidation
const createStudentValidation = (data) => {
    const studentSchema = Joi.object({
        nis: Joi.number().required(),
        name: Joi.string().required(),
        class: Joi.number().required(),
        major: Joi.string().required(),
    });

    return studentSchema.validate(data);
};

module.exports = { createStudentValidation };
