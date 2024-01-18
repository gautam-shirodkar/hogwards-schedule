import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div
      className="h-auto min-h-screen bg-hogwarts-bg bg-cover relative before:content-[''] before:absolute
    before:top-0
    before:left-0
    before:w-full
    before:h-full
    before:bg-[rgba(15,19,33,0.5)]"
    >
      <Navbar />
      <div className=" min-w-full relative mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
