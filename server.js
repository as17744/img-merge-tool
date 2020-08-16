const Koa = require('koa2');
const fs = require('fs');
const static = require('koa-static');
const app = new Koa();

app.use(static('.'));

app.use(async(ctx, next) => {
    const {
        request: {
            url,
        },
    } = ctx;
    if (url.indexOf('static') === -1 && url.indexOf('api' === -1) && url.indexOf('build' === -1)) {
        const data = fs.readFileSync('./index.html');
        ctx.body = data.toString();
    }
    next();
});

app.listen(8080, () => {
    console.log('Server is running at 8080');
});