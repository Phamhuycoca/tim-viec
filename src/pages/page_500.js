import React from 'react';
import { Button, Result } from 'antd';
const Page500 = () => (
  <Result
    status="500"
    title="500"
    subTitle="Hệ thống hiện đang lỗi"
    extra={<Button type="primary">Quay lại</Button>}
  />
);
export default Page500;