const studentModel = require('models/studentModel');
const { responseDefault } = require('utils/response');
const { HTTP_RESPONSE } = require('utils/status');
const { createStudentValidation } = require('validation/studentValidation');

// get data
const getData = async (req, res) => {
    try {
        const response = await studentModel.find();
        res.status(HTTP_RESPONSE.R200.OK).json({
            status: HTTP_RESPONSE.R200.OK,
            data: await response,
        });
    } catch (error) {
        console.log(error);
    }
};

// get data by id
const getDataById = async (req, res) => {
    const id = await req.params.id;
    const response = await studentModel.findById(id);
    if (response) {
        return res.status(HTTP_RESPONSE.R200.OK).json({
            data: await response,
        });
    } else {
        return res.status(HTTP_RESPONSE.R400.BAD_REQUEST).json({
            message: responseDefault.failed.ID_NOT_FOUND,
        });
    }
};

// get data by nis
const getDataByNis = async (req, res) => {
    const nis = await req.params.nis;
    const response = await studentModel.findOne({
        nis: nis,
    });
    if (response) {
        return res.status(HTTP_RESPONSE.R200.OK).json({
            data: await response,
        });
    } else {
        return res.status(HTTP_RESPONSE.R400.BAD_REQUEST).json({
            message: responseDefault.failed.NIS_NOT_FOUND,
        });
    }
};

// add data
const addData = async (req, res) => {
    try {
        const { error } = await createStudentValidation(req.body);
        const dataExist = await studentModel.findOne({
            nis: req.body.nis,
        });
        if (error) {
            return res.status(HTTP_RESPONSE.R400.BAD_REQUEST).json({
                status: HTTP_RESPONSE.R400.BAD_REQUEST,
                message: error.details[0].message,
            });
        }
        if (dataExist) {
            return res.status(HTTP_RESPONSE.R400.BAD_REQUEST).json({
                status: HTTP_RESPONSE.R400.BAD_REQUEST,
                message: responseDefault.failed.DATA_EXIST,
            });
        }
        if (!error && !dataExist) {
            const response = await studentModel.create(req.body);
            return res.status(HTTP_RESPONSE.R200.CREATED).json({
                status: HTTP_RESPONSE.R200.CREATED,
                message: responseDefault.success.CREATED_DATA,
                data: await response,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

// get data by id and update data
const updateData = async (req, res) => {
    const id = await req.params.id;
    const idExist = await studentModel.findById(id);

    if (!idExist) {
        return res.status(HTTP_RESPONSE.R400.BAD_REQUEST).json({
            message: responseDefault.failed.ID_NOT_FOUND,
        });
    }
    if (idExist) {
        try {
            const nis = req.body.nis;
            const body = req.body;
            const nisExist = await studentModel.findOne({
                nis: nis,
            });
            if (!nisExist) {
                return res.status(HTTP_RESPONSE.R400.BAD_REQUEST).json({
                    status: HTTP_RESPONSE.R400.BAD_REQUEST,
                    message: responseDefault.failed.NIS_EXIST,
                });
            }
            if (nisExist) {
                const response = await studentModel.findByIdAndUpdate(
                    { _id: id },
                    { $set: body },
                );

                if (response) {
                    return res.status(HTTP_RESPONSE.R200.OK).json({
                        message: responseDefault.success.DATA_UPDATED,
                    });
                } else {
                    return res.status(HTTP_RESPONSE.R400.BAD_REQUEST).json({
                        message: responseDefault.failed.DATA_CANT_UPDATED,
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
};

// det data by id and delete data
const deleteData = async (req, res) => {
    const id = await req.params.id;
    const idExist = await studentModel.findById(id);

    if (idExist) {
        try {
            await studentModel.findByIdAndDelete(id);
            res.status(HTTP_RESPONSE.R200.OK).json({
                message: responseDefault.success.DATA_DELETED,
            });
        } catch (error) {
            console.log(error);
        }
    }
    if (!idExist) {
        return res.status(HTTP_RESPONSE.R400.BAD_REQUEST).json({
            message: responseDefault.failed.ID_NOT_FOUND,
        });
    }
};

module.exports = {
    addData,
    getData,
    getDataByNis,
    getDataById,
    updateData,
    deleteData,
};
