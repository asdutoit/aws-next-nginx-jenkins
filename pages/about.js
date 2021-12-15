import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <div>
      <h1>This is the about page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
