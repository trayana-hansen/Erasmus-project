import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { cookieParser } from '../helpers/cookieParser.js'

dotenv.config()

export const createToken = (payload, refresh = false) => {
  const accessToken = jwt.sign(
    payload,
    process.env.SECRET,
    { expiresIn: 30 }
  )

  if (refresh) return {
    access_token: accessToken,
    refresh_token: refresh ? jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 30 })
      : null
  }
}

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    return decoded
  }
  catch (e) {
    return false
  }
}

export const verifyAccessToken = (req, res, next) => {
  const headers = req.headers
  if (!headers['authorization']) return res.status(405).json({ message: "Token not Provided" })
  const token = headers['authorization'].split(" ")[1]

  if (verifyToken(token)) return res.status(405).json({ message: "Invalid Token" })
  console.log("te")
  next();
}

export const grantNewAccessToken = (req, res) => {
  const token = cookieParser("refresh_token", req.headers.cookie)
  let decoded = this.verifyToken(token)
  if (!decoded)
    res.status(405).json({ message: "invalid token" })

  else {
    console.log(decoded)
    let newToken = this.createToken({ email: decoded.email }, false)
    res.send({ access_token: newToken.access_token })
  }
}