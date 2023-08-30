import { CustomAPIError } from '../errors/custom-error.js'
// const { CustomAPIError } = require('../errors/custom-error').default
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: err.message })
}

export default errorHandlerMiddleware
