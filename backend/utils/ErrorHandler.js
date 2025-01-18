class ErrorHandler extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode = statuscode || 500;

        Error.captureStackTrace(this,this.constructor);


    }
}
module.exports = ErrorHandler