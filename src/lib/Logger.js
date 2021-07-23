'use strict'

import log4js from 'log4js'
import path from 'path'
const logPath = path.resolve(__dirname, `../../logs/${browserName}`)

log4js.configure({
  appenders: {
    out: { type: 'stdout', layout: { type: 'colored' } },
    file: { type: 'file', filename: logPath }
  },
  categories: {
    default: { appenders: ['out', 'file'], level: 'debug' },
    FILE: { appenders: ['file'], level: 'trace' }
  }
})

const logger = log4js.getLogger('E2E')
const loggerFile = log4js.getLogger('FILE')

export default class LoggerHelper {
  static Trace (message) {
    loggerFile.trace(this.GetString(message))
  }

  static Info (message) {
    logger.info(this.GetString(message))
  }

  static Debug (message) {
    logger.debug(this.GetString(message))
  }

  static Error (message) {
    logger.error(this.GetString(message))
  }

  static GetString (message) {
    if (message !== undefined) {
      if (message.constructor === {}.constructor) {
        message = JSON.stringify(message, null, '    ')
      }
    }
    return message
  }
}

