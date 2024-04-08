"use client";
import { useState } from "react";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    session: "",
  });

  const [climbs, setClimbs] = useState<{ climb: string; grade: number }[]>([]);

  function onSubmit(e: any) {
    e.preventDefault();

    setFormData({ session: e.target.session.value });
    setClimbs((climbs) => [
      ...climbs,
      { climb: e.target.climb.value, grade: e.target.grade.value },
    ]);
  }

  console.log(formData);
  console.log("these climbs: ", climbs);
  return (
    <form className="w-full lg:w-1/2" onSubmit={onSubmit}>
      <div className="my-4">
        <label>Session Name: </label>
        <input className="border w-full py-1 px-3" type="text" name="session" />
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
          <div className="pl-2 flex items-end">
            <button className="bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-2 px-4 rounded">
              Remove
            </button>
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
