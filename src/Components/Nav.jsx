import React, { useState } from 'react';
import Noti from "../assets/noti.svg";
import Prof from "../assets/prof.svg";
import Woman from "../assets/face.svg";

const Nav = () => {
  
  return (
    <div className='w-full mt-3 flex items-center justify-between px-2 py-2 md:px-10 md:py-1 bg-white mx-auto'>
      <div className='w-96'>
       
          <form class='flex items-center'>
            <label for='simple-search' class='sr-only'>
              Search
            </label>
            <div class='relative w-full'>
              <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  class='w-5 h-5 text-[#475367]'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                class='bg-[#F9FAFB] border-2 border-[#F9FAFB] text-dark-100 text-sm rounded-md block w-[629px] pl-10 p-2.5 outline-none'
                placeholder='Search reference'
                required
              />
            </div>
          </form>
    
      </div>
      <div className='flex flex-row items-center justify-center'>
        <span className='mr-5 cursor-pointer' >
          <img src={Noti} alt="Notification" />
        </span>
        <span className='mr-5 cursor-pointer'>
          <img src={Prof} alt="profile" />
        </span>
        <span className=' cursor-pointer flex items-center gap-2 text-dark text-sm'>
          <img src={Woman} alt="Woman-face" />
          Anita Monalisa
        </span>
      </div>
    </div>
  );
};

export default Nav;
