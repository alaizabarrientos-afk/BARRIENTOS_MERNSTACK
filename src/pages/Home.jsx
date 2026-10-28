import { Link } from "react-router-dom";

const portalCards = [
  {
    number: "01",
    icon: "🎓",
    title: "Students",
    description: "View student profiles, academic information, and course details.",
    link: "/students",
    action: "Explore students",
  },
  {
    number: "02",
    icon: "👨‍🏫",
    title: "Faculty",
    description: "Discover faculty members, departments, and staff information.",
    link: "/faculties",
    action: "Explore faculty",
  },
  {
    number: "03",
    icon: "🏛️",
    title: "Campus Organizations",
    description: "Find out more about campus organizations and student activities.",
    link: "/",
    action: "Campus overview",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="border-b border-white/10 bg-slate-950">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-xl shadow-lg shadow-red-500/20">
              🎓
            </div>
            <div>
              <p className="text-lg font-extrabold tracking-tight">
                Student<span className="text-red-400">Portal</span>
              </p>
              <p className="text-xs text-slate-400">
                CAMPUS INFORMATION SYSTEM
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-300">
            <Link to="/" className="text-red-400">Home</Link>
            <Link to="/students" className="transition hover:text-red-400">
              Students
            </Link>
            <Link to="/faculties" className="transition hover:text-red-400">
              Faculty
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-10">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                Campus Information System
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Your campus.
                <br />
                Your future.
                <span className="mt-2 block text-red-400">
                  All in one place.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Welcome to the Student Portal. Access student records,
                faculty information, and campus resources through one
                simple and organized system.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/students"
                  className="rounded-xl bg-red-500 px-7 py-4 font-bold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-1 hover:bg-red-400"
                >
                  View Students <span className="ml-2">→</span>
                </Link>

                <Link
                  to="/faculties"
                  className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-red-400/60 hover:bg-white/10"
                >
                  Meet the Faculty
                </Link>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-500/20 to-blue-500/10 blur-2xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <p className="text-sm text-slate-400">YOUR CAMPUS</p>
                    <h2 className="mt-1 text-xl font-bold">Portal Overview</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-2xl">
                    🏫
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Link
                    to="/students"
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4 transition hover:border-red-400/30 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-xl">
                      👨‍🎓
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">Student Directory</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Profiles and courses
                      </p>
                    </div>
                    <span className="text-slate-500 transition group-hover:text-red-400">→</span>
                  </Link>

                  <Link
                    to="/faculties"
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4 transition hover:border-red-400/30 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/15 text-xl">
                      👩‍🏫
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">Faculty Directory</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Staff and departments
                      </p>
                    </div>
                    <span className="text-slate-500 transition group-hover:text-red-400">→</span>
                  </Link>
                </div>

                <div className="mt-6 rounded-2xl border border-red-400/15 bg-red-400/5 p-5">
                  <p className="text-sm font-semibold text-red-300">
                    A better campus experience
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Keep essential campus information organized and easy to access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal cards */}
        <section className="border-t border-white/10 bg-slate-900/40 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                  Explore the portal
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  Everything you need
                </h2>
                <p className="mt-3 max-w-xl leading-7 text-slate-400">
                  Navigate campus information using the sections below.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portalCards.map((item) => (
                <Link
                  key={item.number}
                  to={item.link}
                  className="group rounded-2xl border border-white/10 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-red-400/40 hover:shadow-xl hover:shadow-red-500/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl transition group-hover:bg-red-500/10">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-600">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-red-400">
                    {item.action}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Student Portal · Campus Information System
      </footer>
    </div>
  );
}