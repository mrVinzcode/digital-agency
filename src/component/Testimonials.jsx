import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials">
      {/* <!-- container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* <!-- heading --> */}
        <h2 class="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        {/* <!-- testimonials container --> */}
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* <!-- testimonial 1 --> */}
          <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-14 md:w-1/3">
            <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated"
            </p>
          </div>
          <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-14 md:w-1/3">
            <img src="img/avatar-ali.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Margaret</h5>
            <p class="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated"
            </p>
          </div>
          <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-14 md:w-1/3">
            <img src="img/avatar-richard.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Ho</h5>
            <p class="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated"
            </p>
          </div>
        </div>
        {/* <!-- Button --> */}
        <div class="my-16">
          <a
            href="/"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
