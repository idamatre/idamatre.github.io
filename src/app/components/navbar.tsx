"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../app/globals.css";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex flex-row items-center justify-center space-x-6 bg-red-500">
        <div className="flex flex-row items-center justify-center gap-6">
          hei
          <Link href="/">Hjem</Link>
        </div>
        <div>
          <Link href="/dinner">Min middagsplanlegger</Link>
        </div>
      </div>
    </nav>
  );
}
