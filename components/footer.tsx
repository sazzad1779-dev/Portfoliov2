import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full mt-1 px-4 py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center space-y-3">
        {/* Copyright */}
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">© {currentYear} Md Sazzad Hossain.</span>{" "}
          All rights reserved.
        </p>
        
        {/* Tech Stack */}
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Built with{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200">Next.js</span>,{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200">TypeScript</span>,{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200">Tailwind CSS</span>, and{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200">Framer Motion</span>
        </p>

        {/* Optional: Add a decorative element */}
        <div className="pt-4">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent mx-auto rounded-full" />
        </div>
      </div>
    </footer>
  );
}