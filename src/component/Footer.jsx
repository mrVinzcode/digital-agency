import React from "react";

export default function Footer() {
  return (
    <footer class="bg-veryDarkBlue">
      {/* <!-- flex container --> */}
      <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- Logo & social links--> */}
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Right Reserved
          </div>
          {/* <!-- Logo --> */}
          <div class="">
            <img src="img/logo-white.svg" class="h-8" alt="" />
          </div>
          <div class="flex justify-center space-x-4">
            <a href="/">
              <img src="img/icon-facebook.svg" class="h-8 w-full" alt="" />
            </a>
            <a href="/">
              <img src="img/icon-instagram.svg" class="h-8" alt="" />
            </a>
            <a href="/">
              <img src="img/icon-pinterest.svg" class="h-8" alt="" />
            </a>
            <a href="/">
              <img src="img/icon-youtube.svg" class="h-8" alt="" />
            </a>
            <a href="/">
              <img src="img/icon-twitter.svg" class="h-8" alt="" />
            </a>
          </div>
        </div>
        {/* <!-- list container --> */}
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="/" class="hover:text-brightRed">
              Home
            </a>
            <a href="/" class="hover:text-brightRed">
              Pricing
            </a>
            <a href="/" class="hover:text-brightRed">
              Products
            </a>
            <a href="/" class="hover:text-brightRed">
              About
            </a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="/" class="hover:text-brightRed">
              Careers
            </a>
            <a href="/" class="hover:text-brightRed">
              Community
            </a>
            <a href="/" class="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* <!-- input container --> */}
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                placeholder="Updated in your inbox"
                class="flex-1 px-4 rounded-full focus:outline-none"
              />
              <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2023, All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
