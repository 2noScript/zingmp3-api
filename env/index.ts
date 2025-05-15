import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT ?? 5008

export const API_KEY = process.env.API_KEY ?? '88265e23d4284f25963e6eedac8fbfa3'

export const SECRET_KEY =
	process.env.SECRET_KEY ?? '2aa2d1c561e809b267f3638c4a307aab'

export const WEB_API = process.env.WEB_API || 'https://zingmp3.vn'

export const VERSION = process.env.VERSION || '1.8.38'
