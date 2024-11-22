import React, { useEffect } from 'react';
import { Button } from 'antd';
import { getManyRequest } from './services/baseServices';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await getManyRequest('/items');
      console.log(result);
      
    };
    fetchData();
  }, []);
  return <Button type='primary' >XIn xin</Button>;
};

export default App;