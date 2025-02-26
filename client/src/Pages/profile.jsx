import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/user";

const Profile = () => {
  const { setUser, user } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  // Redirect immediately if user is null
 

  let aquiz = user?.quiz?.[0] || 0;
  const tquiz = 200;
  let quizl = (300 / 200) * aquiz;
  let quizacc = aquiz === 0 ? 0 : Math.floor((user.quiz?.[1] / aquiz) * 100);

  const logout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/logout");
      setUser(null);
      setRedirect(true);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if(redirect){
    return <Navigate to='/login'></Navigate>
  }

  return (
    <div className="min-h-[88vh] w-screen flex flex-col gap-8 p-10 bg-gray-100">
      <div className="w-full h-[40vh] bg-white rounded-lg shadow-lg flex items-center px-10 gap-52">
        <div className="photo h-[70%] aspect-square rounded-full overflow-hidden border-4 border-gray-300">
          <img
            src="https://s.yimg.com/fz/api/res/1.2/XXKeauX0aPeO3eAunIuezA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTg2/https://s.yimg.com/zb/imgv1/448ece45-b5ed-36ed-be28-7af7af410480/t_500x300"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-[25vh] flex-col justify-between">
          <h2 className="text-2xl text-neutral-700">
            Hello{" "}
            <span className="text-6xl capitalize text-black">{user?.username}</span>,
            what a great day to learn sign language!
          </h2>
          <div className="btn flex gap-4">
            <button
              className="px-8 py-3 border-2 border-black duration-200 cursor-pointer  hover:bg-red-500 hover:text-white"
              onClick={logout}
            >
              Logout
            </button>
            <button className="px-8 py-3 bg-sec cursor-pointer border-2 border-black">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-6 overflow-x-hidden justify-center">
        {/* Quiz Section */}
        <div className="h-[40vh] shadow-lg rounded-md w-[30vw] p-5 bg-white flex flex-col gap-7">
          <h1 className="text-5xl">Quizzes</h1>
          <div className="flex-col items-center gap-5">
            <h2>Total Attempted</h2>
            <div className="flex gap-5 items-center">
              <div className="h-4 rounded-2xl w-[300px] bg-gray-300 overflow-hidden">
                <div className="h-4 bg-green-700 rounded-full" style={{ width: `${quizl}px` }}></div>
              </div>
              <h1>{aquiz}/{tquiz}</h1>
            </div>
          </div>
          <div className="flex-col items-center gap-5">
            <h2>Accuracy</h2>
            <div className="text-4xl font-semibold">{quizacc}%</div>
          </div>
        </div>

        {/* Videos Section */}
        <div className="h-[40vh] shadow-lg rounded-md w-[30vw] p-5 bg-white flex flex-col gap-7">
          <h1 className="text-5xl">Videos</h1>
          <p className="text-gray-600">Watch educational content and tutorials.</p>
        </div>

        {/* Donation Section */}
        <div className="h-[40vh] shadow-lg rounded-md w-[30vw] p-5 bg-white flex flex-col gap-7">
          <h1 className="text-5xl">Donations</h1>
          <p className="text-gray-600">Support our mission to make learning accessible.</p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
