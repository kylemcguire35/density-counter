interface ButtonProps {
  id: string;
}

export default function CreateSessionButton({ id }: ButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
      <a href={`/sessions/${id}`}>Start Session</a>
    </button>
  );
}
