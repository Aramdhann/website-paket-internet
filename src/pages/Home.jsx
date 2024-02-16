import React from "react";
import TablePacket from "../components/TablePacket";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="container p-5">
        <div className="border rounded-lg shadow-md px-5 py-8 flex flex-col justify-between gap-5 bg-white">
          <div className="bg-blue-600 rounded-lg p-5 text-white flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold mb-1">Choose your packet 🚀</p>
              <p>Stay Connected Your Way: Customize Your Plan Today!</p>
            </div>
            <div className="flex flex-col justify-end items-center gap-2">
              <button className="bg-white text-blue-600 border rounded-lg w-full text-center py-2 transition ease-in-out hover:bg-gray-200 duration-300">
                Add
              </button>
              <button className="bg-blue-700 border-white border-1 rounded-lg px-4 py-2 text-white transition ease-in-out hover:bg-blue-800 duration-300">
                Logout
              </button>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <TablePacket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
