import axios from "axios";

// Log giá trị của biến môi trường (dùng trong quá trình phát triển)
console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL);

// Cấu hình axios với base URL từ biến môi trường
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptors để xử lý lỗi toàn cục nếu cần
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.log(error.status)
    console.error('Axios Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

// Phương thức tạo (POST)
const createRequest = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

// Phương thức lấy nhiều dữ liệu (GET)
const getManyRequest = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error reading data:', error);
    throw error;
  }
};

// Phương thức cập nhật (PUT)
const updateRequest = async (endpoint, data) => {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// Phương thức xóa (DELETE)
const deleteRequest = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

// Phương thức lấy dữ liệu theo ID (GET)
const getByIdRequest = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint); // Sửa từ DELETE thành GET
    return response.data;
  } catch (error) {
    console.error('Error getting data by ID:', error);
    throw error;
  }
};

// Export các phương thức
export { createRequest, getManyRequest, updateRequest, deleteRequest, getByIdRequest };
