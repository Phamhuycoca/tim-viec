import axios from "axios";

// Log giá trị của biến môi trường (dùng trong quá trình phát triển)
console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL);

// Cấu hình axios với base URL từ biến môi trường
const base_URL = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false
});

// Thêm interceptors để xử lý lỗi toàn cục nếu cần
base_URL.interceptors.response.use(
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
    const response = await base_URL.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

// Phương thức lấy nhiều dữ liệu (GET)
const getManyRequest = async (endpoint) => {
  try {
    const response = await base_URL.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error reading data:', error);
    throw error;
  }
};

// Phương thức cập nhật (PUT)
const updateRequest = async (endpoint, data) => {
  try {
    const response = await base_URL.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// Phương thức xóa (DELETE)
const deleteRequest = async (endpoint) => {
  try {
    const response = await base_URL.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

// Phương thức lấy dữ liệu theo ID (GET)
const getByIdRequest = async (endpoint) => {
  try {
    const response = await base_URL.get(endpoint); // Sửa từ DELETE thành GET
    return response.data;
  } catch (error) {
    console.error('Error getting data by ID:', error);
    throw error;
  }
};

// Export các phương thức
export { createRequest, getManyRequest, updateRequest, deleteRequest, getByIdRequest };
