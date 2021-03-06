/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Header = (props) => (
  <nav className="flex items-center justify-between flex-wrap bg-yellow-500 p-4 relative">
    <div className="flex items-center flex-shrink-0 text-gray-800 w-full">
      <a href="/" className="mr-2">
        <img src="/service/images/logo_small.png" className="w-6" />
      </a>
      <div className="flex justify-start">
        <div className="hover:bg-yellow-400 px-2 py-1 rounded">
          <a
            href="/search"
            className="block inline-block lg:mt-0 text-gray-800 text-sm"
          >
            경로 조회
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
