

/**
 * Common method for all api response
 * @method apiResponse
 */
exports.apiResponse = async (res, data, status, message) => {
    data = { data, message }
    res.status(status).json({ body: data, status });
};

exports.errorHandle = handler => {
    return (req, res, next) => {
        handler(req, res, next).catch(async err => {
            return apiResponse(res, "", 502, "API failed to respond due to internal error");
        });
    };
};