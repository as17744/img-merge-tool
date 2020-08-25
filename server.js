const Koa = require('koa2');
const fs = require('fs');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser')
const router = require('./server/router');

const app = new Koa();

const port = 80;

app.use(bodyParser());

app.use(router.routes());

app.use(static('.'));

app.use(async(ctx, next) => {
    const {
        request: {
            url,
        },
    } = ctx;
    if (url.indexOf('static') === -1 && url.indexOf('api') === -1 && url.indexOf('build') === -1) {
        const data = fs.readFileSync('./index.html');
        ctx.body = data.toString();
    }
    next();
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});