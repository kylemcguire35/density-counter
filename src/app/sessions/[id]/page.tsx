"use client";
const sampleSession = { session: "Sample", rounds: 2, time: 15 };

export default function Session() {
  const handleStart = () => {
    console.log("Start");
  };

  return (
    <>
      <div>Session Page</div>
      <div>{sampleSession.session}</div>
      <div>Rounds: {sampleSession.rounds}</div>
      <div>Minutes: {sampleSession.time}</div>
      <button
        className="bg-blue-300 hover:bg-blue-700 text-white py-1 px-4 rounded"
        onClick={handleStart}
      >
        Start
      </button>
    </>
  );
}
