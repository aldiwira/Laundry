module.exports = {

    /**
     * Nilai yang digunakan untuk response success
     * Dimana menurut : https://developer.mozilla.org/id/docs/Web/HTTP/Status
     * 200 : Request yang diminta success.
     * 401 : Request harus melakukan authentikasi dengan benar.
     * 403 : Tidak dapat melakukan mengakses atau melakukan request karena request di tolak oleh server.
     * */
    CODE_SUCCESS: 200,
    CODE_FAILURE: 401,
    CODE_UNAUTHORIZED: 403,

    /**
     * Restful JSON Api format.
     * */
    set: (code, message, data) => {
        if (data == null) data = "";

        return {
            "status": code,
            "message": message,
            "data": data
        }
    }
};