"use client";
import { useEffect, useState } from "react";
import LayoutDropdown from "../dropdown/Layouts";
import { Climb, Names } from "@/app/_models/interface";
import AutoComplete from "../input/AutoComplete";

interface FormProps {
  setSession: (string: string, round: number, time: number) => void;
  setClimbs: (data: Climb) => void;
}

export default function FormComponent({ setSession, setClimbs }: FormProps) {
  const [layouts, setLayout] = useState([] as {}[]);
  const [chosenLayout, setChosen] = useState(0);
  const [climbNames, setClimbNames] = useState([] as Names[]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([] as Names[]);
  const [show, setShow] = useState(false);
  const [grade_dict, setDict] = useState({} as any);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/get")
        .then((res) => res.json())
        .then(({ data }) => setLayout(data));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchGrades = async () => {
      await fetch("/api/get/grades")
        .then((res) => res.json())
        .then(({ data }) => {
          const graded = {} as any;

          for (let i = 0; i < data.length; i++) {
            graded[data[i].difficulty] = data[i].boulder_name;
          }
          setDict(graded);
        });
    };

    fetchGrades();
  }, []);

  useEffect(() => {
    if (chosenLayout > 0) {
      fetch(`/api/get/${chosenLayout}`)
        .then((res) => res.json())
        .then(({ climbs }) => {
          console.log("GRAB: ", climbs);
          setClimbNames(climbs);
          setFiltered(climbs.slice(0, 10));
        });
    }
  }, [chosenLayout]);

  const handleChooseLayout = (e: any) => {
    // console.log("layout number:", e);
    setChosen(e);
  };

  function onSubmit(e: any) {
    e.preventDefault();

    setSession(
      e.target.session.value,
      e.target.rounds.value,
      e.target.time.value
    );
    setClimbs({ climb: e.target.climb.value, grade: e.target.grade.value });
  }

  const handleSearch = (e: string) => {
    const filter = climbNames.filter((x) => x.name.includes(e));
    setSearch(e);
    setShow(true);
    setFiltered(filter.slice(0, 10));
  };

  const handleAddClimb = (name: string, difficulty: string) => {
    setClimbs({
      climb: name,
      grade: grade_dict[`${Math.round(Number(difficulty))}`],
    });
  };

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
        <LayoutDropdown layouts={layouts} handleChange={handleChooseLayout} />
        {chosenLayout !== 0 && (
          <>
            <div className="flex flex-row">
              <div className="w-5/6 pr-2">
                <AutoComplete
                  label="Climb Name: "
                  name="climb"
                  options={filtered}
                  handleSearch={handleSearch}
                  value={search}
                  placeholder={"Climb"}
                  showOptions={show}
                  setShowOptions={setShow}
                  addClimb={handleAddClimb}
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
          </>
        )}
      </div>
    </form>
  );
}
