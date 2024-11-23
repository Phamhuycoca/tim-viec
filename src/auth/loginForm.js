import { Button, Form, Image, Input, Row, Spin } from "antd";
import React, { useState } from "react";
import "./style.css";
import { toast, ToastContainer } from "react-toastify";
import Link from "antd/es/typography/Link";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (values) => {
    setLoading(true);
    console.log("Form values:", values);
    toast.success("Wow so easy!");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="form-login">
      <Spin spinning={loading}>
        <Row justify="center" className="mb-4">
          <Image
            className="rounded"
            preview={false}
            width={200}
            src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1710837723/logo_wmdeol.png"
          />
        </Row>
        <Form
          onFinish={onSubmit}
          style={{ width: 400 }}
          layout="vertical"
          requiredMark={(label, { required }) => (
            <>
              {label}
              {required ? <span className="ms-1 text-danger">*</span> : null}
            </>
          )}
          labelWrap
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Row justify="center">
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Row>
          </Form.Item>
          <Row>
            <span className="mb-2">
              Chưa có tài khoản vui lòng ? <Link href="/login"> Đăng ký</Link>
            </span>
          </Row>
        </Form>
      </Spin>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
