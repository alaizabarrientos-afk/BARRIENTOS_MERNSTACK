import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

export default function FacultyList() {
  const [faculties, setFaculties] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/faculty")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch faculty.");
        }

        return response.json();
      })
      .then((data) => setFaculties(data))
      .catch((err) => setError(err.message));
  }, []);

  const columns = [
    { key: "name", label: "Name" },
    { key: "empNumber", label: "Employee Number" },
    { key: "department", label: "Department" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto mb-8 max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-400">
          Faculty Information
        </p>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-bold">Faculty List</h1>
            <p className="mt-2 text-slate-400">
              View faculty members and their departments.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3">
            <p className="text-xs uppercase text-slate-500">
              Total Faculty
            </p>
            <p className="mt-1 text-2xl font-bold text-red-400">
              {faculties.length}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="border-b border-slate-800 px-6 py-4">
          <h2 className="font-semibold">Registered Faculty</h2>
        </div>

        {error ? (
          <p className="p-6 text-red-400">{error}</p>
        ) : (
          <div className="overflow-x-auto p-4">
            <DataTable data={faculties} columns={columns} />
          </div>
        )}
      </div>
    </div>
  );
}