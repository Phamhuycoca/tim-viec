import axios from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setTokenExpiration,
  removeTokens,
  isTokenExpired,
} from '../utils/tokenManager';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Refresh Token
const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error('No refresh token available');

  const { data } = await axios.post('/auth/refresh', { refresh_token: refreshToken });

  // Lưu token mới và thời gian hết hạn
  setAccessToken(data.access_token);
  setTokenExpiration(data.expires_in);
  return data.access_token;
};

// Request Interceptor
apiClient.interceptors.request.use(
  async (config) => {
    if (isTokenExpired()) {
      console.log('Token hết hạn, đang refresh...');
      try {
        const newToken = await refreshAccessToken();
        config.headers.Authorization = `Bearer ${newToken}`;
      } catch (error) {
        console.log('Không thể refresh token, buộc đăng xuất');
        removeTokens();
        window.location.href = '/login';
        throw error;
      }
    } else {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized - Buộc đăng xuất');
      removeTokens();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
