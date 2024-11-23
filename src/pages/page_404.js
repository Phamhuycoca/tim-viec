import React from 'react';
import { Button, Result } from 'antd';
const Page404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Trang bạn truy cập không tồn tại."
    extra={<Button type="primary">Quay lại </Button>}
  />
);
export default Page404;