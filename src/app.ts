import * as Koa from 'koa';

(async () => {
    const app = new Koa();

    app.listen(3000, () => {
        console.log('listen on 3000 port');
    });
})();
