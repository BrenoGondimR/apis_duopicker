const validateBody = (request, response, next) => {
    const {body} = request;

    if (body.title == undefined || body.title == '' ) {
        response.status(400).json({message: "O campo 'title' é obrigatorio!"})
    }

    next();

};

module.exports = {
    validateBody,
};