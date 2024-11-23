import React from 'react';
import { Button, Result } from 'antd';
const Page403 = () => (
  <Result
    status="403"
    title="403"
    subTitle="Không có quyền thực hiện trang này"
    extra={<Button type="primary">Quay lại</Button>}
  />
);
export default Page403;