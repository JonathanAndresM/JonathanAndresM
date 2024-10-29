const error_400 = (error, req, res, next) => {
    console.log(error)
    if (error.value = "bad Request") {
        return res.status(400).json({
            success: false,
            response: error,
            messagge: "error"
        })
    }
    next(error)
}

export default error_400