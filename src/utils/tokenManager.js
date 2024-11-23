export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');
export const setAccessToken = (token) => localStorage.setItem('access_token', token);
export const setRefreshToken = (token) => localStorage.setItem('refresh_token', token);
export const removeTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('token_expiration');
};
//Kiểm tra Token
export const setTokenExpiration = (expiresIn) => {
  const expirationTime = Date.now() + expiresIn * 1000; // `expiresIn` là số giây
  localStorage.setItem('token_expiration', expirationTime);
};
export const isTokenExpired = () => {
  const expirationTime = localStorage.getItem('token_expiration');
  return !expirationTime || Date.now() >= parseInt(expirationTime, 10);
};
