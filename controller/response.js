module.exports = {
    CODE_SUCCESS: 200,
    CODE_FAILURE: 401,
    CODE_UNAUTHORIZED: 403,

    set: (code, message, data) => {
        return {
            "status": code,
            "message": message,
            "data": data
        }
    }
};