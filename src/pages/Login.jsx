import React from "react";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="flex justify-center items-center h-screen p-4 bg-gray-50">
      <div className="border shadow-xl rounded-xl p-2 flex flex-wrap lg:flex-nowrap gap-2 w-[700px] bg-white">
        <div className="flex flex-col justify-evenly gap-5 lg:gap-10 rounded-xl py-8 px-6 lg:py-10 lg:px-8 bg-blue-600 w-full lg:w-fit">
          <p className="font-bold text-xs text-white uppercase tracking-widest">
            Paket Radit
          </p>
          <div className="flex flex-col gap-1 md:gap-2 ">
            <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
              Connect with other!
            </p>
            <p className="text-white font-thin lg:font-light">
              Find Your Internet Package Here!
            </p>
          </div>
          <div className="hidden lg:flex lg:flex-col gap-4 p-5 rounded-xl bg-blue-700 text-white text-xs font-thin">
            <p>
              Smooth experience from start to finish! The website's simplicity
              made finding and purchasing my internet package a breeze. Highly
              recommended!
            </p>
            <div className="flex gap-3 items-center">
              <div className="rounded-lg px-[11px] py-2 bg-blue-900">
                <UserOutlined />
              </div>
              <div>
                <p className="font-medium">Moch. Raditya Aulya Aramdhan</p>
                <p className="font-thin text-xs">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 rounded-xl p-5 w-full">
          <p className="font-bold text-xl text-center">Login Account</p>
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-sm">Email</p>
              <Input placeholder="email@gmail.com" size="large" />
            </div>
            <div>
              <p className="mb-2 text-sm">Password</p>
              <Input.Password
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                size="large"
              />
            </div>
          </div>
          <Button type="primary" size="large" className="bg-blue-600">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
