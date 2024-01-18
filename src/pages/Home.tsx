export default function Home() {
  return (
    <div className=" h-[calc(100vh-120px)] flex justify-center">
      <div className="p-8 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center my-auto h-[150px] text-center">
          <div className="w-[50%] animate-pulse">
            <img src="images/text.png" />
          </div>
          <h3 className="text-4xl font-bold font-serif text-white">
            School of Witchcraft and Wizardry
          </h3>
        </div>
      </div>
    </div>
  );
}
