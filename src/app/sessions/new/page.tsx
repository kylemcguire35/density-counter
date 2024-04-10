"use client";

import CreateSessionButton from "@/app/components/buttons/StartSessionBtn";
import FormComponent from "@/app/components/forms/FormComponent";
import { useState } from "react";

export default function NewSession() {
  const [session, setSession] = useState({
    session: "",
    rounds: 0,
    time: 0,
  });
  const handlerSessionName = (
    data: string,
    rounds: number,
    minutes: number
  ) => {
    setSession({ session: data, rounds: rounds, time: minutes });
  };

  const [climbs, setClimbs] = useState<{ climb: string; grade: number }[]>([]);

  const handleAddClimbs = (data: any) => {
    setClimbs((climbs: any) => [
      ...climbs,
      { climb: data.climb, grade: data.grade },
    ]);
  };

  const handleRemove = (event: any) => {
    const index = Number(event.target.name);
    const newArray = climbs.filter((climb, i) => i !== index);
    setClimbs(newArray);
  };

  const handleSubmit = () => {
    console.log("session is: ", session, climbs);
  };

  const climbNames = climbs.map(function (i, idx) {
    return (
      <div key={`${idx}-${i.climb}`}>
        {i.climb}, {i.grade}
        <button
          className="bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-2 px-4 rounded"
          onClick={(event) => handleRemove(event)}
          name={`${idx}`}
        >
          Remove
        </button>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h1 className="text-4xl font-bold">Create Session</h1>
      <FormComponent
        setSession={handlerSessionName}
        setClimbs={handleAddClimbs}
      />
      <h2>
        Session Name: <b>{session.session}</b> Rounds: <b>{session.rounds}</b>{" "}
        Minutes: <b>{session.time}</b>
      </h2>
      {climbNames}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <CreateSessionButton />
    </div>
  );
}
