export default function logger() {
    return async (ctx, next) => {
        // const startTime = Date.now()
        try {
            await next()
        } catch (err) {
            console.error(err)
        }
        console.info('-> 123')
    }
}
