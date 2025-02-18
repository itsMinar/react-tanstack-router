import { Link } from '@tanstack/react-router';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="relative px-4 text-center">
        <h1 className="relative z-10 mb-4 text-[150px] font-bold text-slate-700">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[150px] font-bold text-slate-800 opacity-10">
            404
          </h1>
        </div>
        <p className="relative z-10 mb-8 text-xl font-light tracking-wider text-slate-300">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          <span className="relative">Go Home</span>
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
