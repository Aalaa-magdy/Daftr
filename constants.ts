export const COOKIE_MAX_AGE=30
export const JWT_EXPIRATION_TIME="30d"
export const REFRESH_TOKEN_EXPIRATION_TIME="60d"
export const REFRESH_TOKEN_MAX_AGE=60


export const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET
export const GOOGLE_REDIRECT_URI=`${process.env.GOOGLE_REDIRECT_URI}/auth/google/callback`