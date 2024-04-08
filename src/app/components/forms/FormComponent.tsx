export default function FormComponent() {
  return (
    <form className="w-full lg:w-1/2">
      <div className="my-4">
        <label>Session Name: </label>
        <input className="border w-full py-1 px-3" type="text" />
      </div>
      <div className="flex flex-col my-4">
        <div className="flex flex-row">
          <div className="w-5/6 pr-2">
            <label>Climb Name: </label>
            <input className="border w-full py-1 px-3" type="text" />
          </div>
          <div className="w-1/6 pl-2">
            <label>Grade: </label>
            <input className="border w-full py-1 px-3" type="number" />
          </div>
          <div className="pl-2 flex items-end">
            <button className="bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-2 px-4 rounded">
              Remove
            </button>
          </div>
        </div>
        <div className="pt-2">
          <button className="bg-green-500 hover:bg-green-700 text-xs text-white font-bold py-2 px-4 rounded">
            Add Climb
          </button>
        </div>
      </div>
    </form>
  );
}
