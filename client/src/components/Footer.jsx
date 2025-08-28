import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
}
