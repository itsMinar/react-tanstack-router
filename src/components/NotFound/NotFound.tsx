import { Link } from '@tanstack/react-router';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="px-4 text-center text-white">
        <h1 className="mb-4 animate-pulse text-6xl font-bold">404</h1>
        <p className="mb-8 text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="hover:bg-opacity-90 transform rounded-full bg-white px-6 py-3 font-semibold text-purple-600 transition duration-300 ease-in-out hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
