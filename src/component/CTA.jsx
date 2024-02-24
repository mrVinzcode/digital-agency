import React from "react";

export default function CTA() {
  return (
    <section id="CTA" class="bg-brightRed">
      {/* <!-- flex container --> */}
      <div class="container flex flex-col items-center justify-between px-6 py-24 space-y-12 md:py-12 md:flex-row md:space-y-0 mx-auto">
        <h2 class="text-5xl font-bold text-white leading-tight text-center md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today.
        </h2>
        <div>
          <a
            href="/"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
