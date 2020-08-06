import * as winston from 'winston'
import * as config from 'config'
import * as path from 'path'

const format = winston.format

const logConfig: any = config.get('log')
const logger: winston.Logger = winston.createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), format.json()),
    defaultMeta: { service: 'better-blog' },
})

if (process.env.NODE_ENV === 'dev') {
    logger.add(new winston.transports.Console({
        format: format.combine(format.timestamp(), format.json()),
    }))
} else {
    logger.add(new winston.transports.File({
        filename: path.resolve(logConfig.path, `${process.pid}-error.log`),
        level: 'error',
    }))
    logger.add(new winston.transports.File({
        filename: path.resolve(logConfig.path, `${process.pid}-better-blog.log`),
    }))
}

export default logger
