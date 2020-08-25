const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

module.exports = async (ctx, next) => {
    let form = new formidable.IncomingForm();
    form.multiples = false;
    const formImage = () => {
        return new Promise((resolve, reject) => {
            form.parse(ctx.req, function(err, fields, files) {
                if (err) {
                    reject()
                } else {
                    resolve(files);
                }
            });
        });
    };
    const files = await formImage();
    const file = files.filedata;
    const type = file.type;
    const name = `${new Date().getTime()}_${Math.floor(Math.random() * 100000)}.${type.split('/')[1]}`;
    const dir = path.join(__dirname, `../../static/temp`);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const readStream = fs.createReadStream(file.path);
    const writeStream = fs.createWriteStream(`${dir}/${name}`);
    readStream.pipe(writeStream);
    ctx.body = {
        success: true,
        url: `/static/temp/${name}`,
        name,
        message: '上传成功'
    };
};
