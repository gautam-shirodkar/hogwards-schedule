import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-hogwarts-bg bg-cover h-[calc(100vh-110px)] flex justify-center items-center">
      <div className="w-1/2 p-8 flex flex-col items-center">
        <div className="flex justify-center items-center mt-8 w-[50%] h-[350px] bg-black bg-opacity-10 rounded-lg">
          <img src="images/text.png" />
        </div>
      </div>
      <div className="w-1/2 p-8 flex flex-col items-center">
        <button
          className="border border-black rounded-lg p-5 bg-black bg-opacity-20"
          onClick={() => navigate("/schedule")}
        >
          <h4 className="text-2xl font-bold text-black">Enter Classroom</h4>
        </button>

        <p className="text-black mt-4">You can see the class schedule here.</p>
      </div>
    </div>
  );
}
