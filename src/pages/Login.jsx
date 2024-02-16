import React from "react";
import { Input } from "antd";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-lg p-2 flex gap-3 w-[700px]">
        <div className="flex border rounded-lg w-[200px] h-[200px]"></div>
        <div className="border rounded-lg p-5 w-full">
          <p className="font-bold">LOGIN</p>
          <Input placeholder="email@gmail.com" />
        </div>
      </div>
    </div>
  );
};
export default Login;
