import axios from "axios";
const base_URL = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000,  // Thời gian chờ
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const createRequest = async (endpoint, data) => {
    try {
      const response = await base_URL.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error creating data:', error);
      throw error;
    }
  };
  const getManyRequest = async (endpoint) => {
    try {
      const response = await base_URL.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error reading data:', error);
      throw error;
    }
  };
  const updateRequest = async (endpoint, data) => {
    try {
      const response = await base_URL.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  };
  const deleteRequest = async (endpoint) => {
    try {
      const response = await base_URL.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  };
  const getByIdRequest = async (endpoint) => {
    try {
      const response = await base_URL.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  };
  
  export { createRequest, getManyRequest, updateRequest, deleteRequest,getByIdRequest };