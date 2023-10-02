// eslint-disable-next-line no-unused-vars
function globalErrorHandler(err, req, res, _next) {
    const message = err.message || "Internal server error"
    const status = err.status || 500
    const code = err.code || "INTERNAL_SERVER_ERROR"
    res.status(status).json({
        error: { status, message, code }
    })
}

module.exports = globalErrorHandler