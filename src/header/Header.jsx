import React from "react";

export default function Header() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav class="relative container mx-auto p-6">
        {/* <!--flex container  --> */}
        <div class="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div class="pt-2">
            <img src="img/logo.svg" alt="logo" />
          </div>
          {/* <!-- menu items --> */}
          <div class="hidden space-x-6 md:flex">
            <a href="/" class="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="/" class="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="/" class="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="/" class="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="/" class="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          {/* <!-- Button --> */}
          <a
            href="/"
            class="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Get Started
          </a>

          {/* <!-- hamburger Icon --> */}
          <button
            id="menu-btn"
            class="block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
        {/* <!-- mobile menu --> */}
        <div class="md:hidden">
          <div
            id="menu"
            class=" absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="/">Pricing</a>
            <a href="/">Products</a>
            <a href="/">About Us</a>
            <a href="/">Community</a>
            <a href="/">Careers</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
