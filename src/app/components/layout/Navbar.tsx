import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4 border-b">
      <p className="text-lg font-bold">Density Trainer</p>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/sessions" className="hover:text-gray-400">
            Sessions
          </Link>
        </li>
      </ul>
    </nav>
  );
}
