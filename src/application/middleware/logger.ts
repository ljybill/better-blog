import logger from '../../util/logger'

export default function loggerMiddleware() {
    return async (ctx, next) => {
        const startTime = Date.now()
        try {
            await next()
        } catch (err) {
            console.error(err)
        }
        logger.info(`-> 123;duration: ${Date.now() - startTime}ms`)
    }
}
