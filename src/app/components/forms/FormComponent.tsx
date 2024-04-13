"use client";
import { getStaticProps } from "@/pages/api/get";
import { useEffect, useState } from "react";

interface Climb {
  climb: string;
  grade: number;
}
interface FormProps {
  setSession: (string: string, round: number, time: number) => void;
  setClimbs: (data: Climb) => void;
}

export default function FormComponent({ setSession, setClimbs }: FormProps) {
  const [layout, setLayout] = useState([]);

  async function runQuery() {
    // Set the loading true.
    // setLoading(true)

    // Manually query your queries.
    const data = await fetch(`/api/get`, {
      method: "GET",
    });

    console.log(data);
  }

  useEffect(() => {
    runQuery();
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();

    setSession(
      e.target.session.value,
      e.target.rounds.value,
      e.target.time.value
    );
    setClimbs({ climb: e.target.climb.value, grade: e.target.grade.value });
  }

  return (
    <form className="w-full lg:w-1/2" onSubmit={onSubmit}>
      <div className="my-4">
        <label>Session Name: </label>
        <input className="border w-full py-1 px-3" type="text" name="session" />
      </div>
      <div className="my-4">
        <label>Rounds: </label>
        <input
          className="border w-full py-1 px-3"
          type="number"
          name="rounds"
        />
        <label>Time (in minutes): </label>
        <input className="border w-full py-1 px-3" type="number" name="time" />
      </div>
      <div className="flex flex-col my-4">
        <div className="flex flex-row">
          <div className="w-5/6 pr-2">
            <label>Climb Name: </label>
            <input
              className="border w-full py-1 px-3"
              type="text"
              name="climb"
            />
          </div>
          <div className="w-1/6 pl-2">
            <label>Grade: </label>
            <input
              className="border w-full py-1 px-3"
              type="number"
              name="grade"
            />
          </div>
        </div>
        <div className="pt-2">
          <button
            className="bg-green-500 hover:bg-green-700 text-xs text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add Climb
          </button>
        </div>
      </div>
    </form>
  );
}
