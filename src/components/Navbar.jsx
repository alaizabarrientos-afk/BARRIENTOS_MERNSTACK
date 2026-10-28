import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 transition ${
      isActive
        ? "bg-pink-500 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-xl font-bold">
          <span className="text-red-400">Student</span> Portal
        </Link>

        <div className="flex flex-wrap gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/students" className={linkClass}>
            Students
          </NavLink>

          <NavLink to="/faculties" className={linkClass}>
            Faculty
          </NavLink>
        </div>
      </div>
    </nav>
  );
}