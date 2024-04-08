"use client";

import FormComponent from "@/app/components/forms/FormComponent";
import { useState } from "react";

export default function NewSession() {
  const [session, setSession] = useState({
    session: "",
  });
  const handlerSessionName = (data: string) => {
    console.log("ping");
    setSession({ session: data });
  };

  const [climbs, setClimbs] = useState<{ climb: string; grade: number }[]>([]);

  const handleAddClimbs = (data: any) => {
    setClimbs((climbs: any) => [
      ...climbs,
      { climb: data.climb, grade: data.grade },
    ]);
  };
  var climbNames = climbs.map(function (i, idx) {
    return (
      <div key={idx} className="climbName">
        {i.climb}, {i.grade}
      </div>
    );
  });

  console.log(climbNames);
  console.log("all climbs", climbs);
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h1 className="text-4xl font-bold">Create Session</h1>
      <FormComponent
        setSession={handlerSessionName}
        climbs={climbs}
        setClimbs={handleAddClimbs}
      />
      <div>{session.session}</div>
      {climbNames}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
}
