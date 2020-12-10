import { Exception } from '@/core'
import { logMiddleware, LogOptions } from '@/middlewares/log.middleware'
import { errorLogConfig } from '@/config/logs'

export const LogException = (options: LogOptions = errorLogConfig) =>
  Exception((err, req, res) => {
    logMiddleware(options)(req, res, () => {})
  })
