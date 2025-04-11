import React, { useState, useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/user";
import { FaChalkboardTeacher, FaHandsHelping, FaQuestionCircle } from "react-icons/fa";

const Profile = () => {
  const { setUser, user } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

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

  if (redirect) return <Navigate to="/login" />;

  return (
    <div className="w-full flex flex-col gap-10 p-8 bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Profile Header */}
      <div className="w-full bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between px-10 py-8 gap-6">
        <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-gray-300">
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-xl text-gray-600">Welcome back,</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 capitalize">{user?.username}</h1>
          <p className="text-md text-gray-500">What a great day to learn sign language!</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
            <button
              onClick={logout}
              className="px-6 py-2 border-2 border-black hover:bg-red-500 hover:text-white transition-all duration-200"
            >
              Logout
            </button>
            <button className="px-6 py-2 bg-sec border-2 border-black transition-all duration-200">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Sections */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Quiz Card */}
        <div className="bg-white rounded-2xl shadow-lg w-[300px] p-6 flex flex-col gap-5 hover:shadow-2xl transition-all">
          <div className="flex items-center gap-3 text-green-700">
            <FaQuestionCircle className="text-3xl" />
            <h1 className="text-3xl ">Quizzes</h1>
          </div>
          <div>
            <p className="text-gray-600">Total Attempted</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-full h-4 rounded-full bg-gray-300 overflow-hidden">
                <div className="h-4 bg-green-600 rounded-full" style={{ width: `${quizl}px` }}></div>
              </div>
              <span className="text-sm font-semibold">{aquiz}/{tquiz}</span>
            </div>
          </div>
          <div>
            <p className="text-gray-600">Accuracy</p>
            <h2 className="text-2xl font-bold text-green-700">{quizacc}%</h2>
          </div>
        </div>

        {/* Videos Card */}
        <div className="bg-white rounded-2xl shadow-lg w-[300px] p-6 flex flex-col gap-5 hover:shadow-2xl transition-all">
          <div className="flex items-center gap-3 text-blue-700">
            <FaChalkboardTeacher className="text-3xl" />
            <h1 className="text-3xl">Videos</h1>
          </div>
          <p className="text-gray-600">Explore educational content and tutorials to learn sign language effectively.</p>
        </div>

        {/* Donation Card */}
        <div className="bg-white rounded-2xl shadow-lg w-[300px] p-6 flex flex-col gap-5 hover:shadow-2xl transition-all">
          <div className="flex items-center gap-3 text-purple-700">
            <FaHandsHelping className="text-3xl" />
            <h1 className="text-3xl ">Donations</h1>
          </div>
          <p className="text-gray-600">Support our mission to make learning accessible for everyone.</p>
          <button className="mt-auto px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all">
            Donate Now
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg w-[300px] p-6 flex flex-col items-start gap-5 hover:shadow-2xl transition-all">
          <div className="flex items-center gap-3 text-purple-700">
            <FaHandsHelping className="text-3xl" />
            <h1 className="text-3xl ">Feedback</h1>
          </div>
          <p className="text-gray-600">enter your feedback here , any queries </p>
          <input type="textarea" className="border-2 border-neutral-500 rounded-md"/>
          <div className="submit px-3 py-1 bg-purple-700 text-white rounded-lg cursor-pointer">send</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
