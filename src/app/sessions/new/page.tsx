import FormComponent from "@/app/components/forms/FormComponent";

export default function NewSession() {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h1 className="text-4xl font-bold">Create Session</h1>
      <FormComponent />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
}
