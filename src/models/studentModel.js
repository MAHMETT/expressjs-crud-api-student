const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        nis: {
            type: Number,
        },
        name: {
            type: String,
        },
        class: {
            type: Number,
        },
        major: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Students', studentSchema);
