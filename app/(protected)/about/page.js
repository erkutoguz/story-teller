import React from "react";

export default async function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto mt-6 rounded-xl flex flex-col items-center justify-center gap-4 lg:gap-6 px-8 py-8 lg:py-12 bg-slate-100">
      <div className="max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          About Me
        </h1>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFDDQnkm8Bpew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666078374736?e=1733961600&v=beta&t=Jt6bFZnuZXLQiSu_B5f0xKhN08tAScnXmVE_rDskW4c"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <p className="text-gray-700 text-center mb-4">
          Hello! I'm Erkut, a university student learning software development.
          I enjoy developing web applications and learning new technologies.
          Currently, I am working on projects with Next.js, React, Java, and
          Spring Boot.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/erkutoguz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 text-gray-700 hover:text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.287-.011-1.243-.017-2.25-3.338.724-4.042-1.607-4.042-1.607-.546-1.386-1.333-1.757-1.333-1.757-1.087-.743.083-.728.083-.728 1.204.085 1.837 1.237 1.837 1.237 1.067 1.829 2.803 1.297 3.487.99.108-.773.418-1.297.762-1.597-2.665-.303-5.467-1.333-5.467-5.93 0-1.314.47-2.396 1.236-3.24-.124-.303-.536-1.529.117-3.176 0 0 1.008-.323 3.303 1.229a11.514 11.514 0 0 1 3.005-.404c1.017 0 2.042.137 3.005.404 2.295-1.552 3.303-1.229 3.303-1.229.654 1.647.241 2.873.118 3.176.77.844 1.236 1.926 1.236 3.24 0 4.605-2.807 5.62-5.475 5.919.43.37.812 1.099.812 2.218 0 1.606-.014 2.904-.014 3.295 0 .317.218.692.825.576C20.565 22.095 24 17.596 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/erkut-oğuz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 text-blue-600 hover:text-blue-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.5 0h-15C2.015 0 0 2.015 0 4.5v15C0 21.985 2.015 24 4.5 24h15c2.485 0 4.5-2.015 4.5-4.5v-15C24 2.015 21.985 0 19.5 0zM8.438 20.062h-3.75v-10.5h3.75v10.5zm-1.875-11.957c-1.205 0-2.062-.866-2.062-1.956 0-1.086.844-1.958 2.062-1.958 1.208 0 2.062.872 2.062 1.958 0 1.09-.854 1.956-2.062 1.956zm13.687 11.957h-3.75v-5.563c0-1.329-.025-3.033-1.846-3.033-1.846 0-2.126 1.447-2.126 2.933v5.663h-3.75v-10.5h3.75v1.439h.051c.52-.983 1.793-2.016 3.684-2.016 3.932 0 4.646 2.594 4.646 5.955v5.123z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
