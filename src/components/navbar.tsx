"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-100 border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-center gap-6">
        <Link
          href="/"
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            pathname === "/"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-200 hover:text-blue-600"
          }`}
        >
          Hjem
        </Link>
        <Link
          href="/dinner"
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            pathname === "/dinner"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-200 hover:text-blue-600"
          }`}
        >
          Min middagsplanlegger
        </Link>
      </div>
    </nav>
  );
}
