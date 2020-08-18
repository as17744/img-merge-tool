module.exports = async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.response.body = {
        success: true,
        text: 'test'
    };
    next();
};
