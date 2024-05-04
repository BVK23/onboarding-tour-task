/** @format */

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useUIContext } from '../../context/UIContext';

const Module4 = (props) => {

  const { expandedTask, handleExpandCollapse, setSubmitMessage } = useUIContext();
  const taskId = "object4";
  const moduleId = "module4"

 
  return (
    <>
      <div
        onClick={() => { if (!expandedTask[moduleId][taskId] ) { handleExpandCollapse(moduleId,taskId); } }}
        className={`relative rounded-lg overflow-hidden transition-[height] p-3 pb-14 group hover:ring-[#8C8C8C] ${expandedTask[moduleId][taskId] ? 'h-[490px]' : 'h-[160px] hover:ring-2'
          }`}>
        <button
          
           onClick={() => { if ( expandedTask[moduleId][taskId]) handleExpandCollapse(moduleId,taskId); }}
          className={`absolute rounded-t-lg inset-x-0 bottom-0 w-full h-[30px] flex justify-center items-center ${expandedTask[moduleId][taskId] ? 'group-hover:ring-2 group-hover:ring-[#8C8C8C]' : ''}`}>
          <svg
            width="20"
            height="20"
            className={`transition align-center ${expandedTask[moduleId][taskId] ? '-rotate-180' : 'animate-bounce rotate-0'
              }`}
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 8.37498L0 2.37498L1.4 0.974976L6 5.57498L10.6 0.974976L12 2.37498L6 8.37498Z"
              fill="#696969"
            />
          </svg>
        </button>

        <div
          
          onClick={() => { if ( expandedTask[moduleId][taskId]  ) { handleExpandCollapse(moduleId,taskId); } }}
          className="text-[#1B3252] text-[23px] font-semibold mt-2 mb-3">
          Objective of Module 4
        </div>

        <div
          // onClick={handleClick}
          onClick={() => { if ( expandedTask[moduleId][taskId]  ) { handleExpandCollapse(moduleId,taskId); } }}
          className="text-[17px] my-2 pb-1">
          You’ve done a lot of work so far. Now we’ll use it all to build your portfolio. Use Unibot every step of the way as prompted to finish building your portfolio in a day or two.
        </div>
        <div
          className={`customScroll h-full max-h-[440px] -ml-2 px-2 pt-1 ${expandedTask[moduleId][taskId] ? 'overflow-y-auto' : 'overflow-hidden'
            }`}>
          <div
            className={`text-[#1B3252] text-[15px] `}>
            <>


              {expandedTask[moduleId][taskId] ?
                <div>
                  <div className="mt-3 text-[17px] font-semibold">
                  Take inspirations from these 2 portfolios
                  </div>
                  <div className="mt-1 text-[17px]">
                    <ul className="marker:text list-disc pl-6 py-2 space-y-3 text-[17px]">
                      <li className='hover:underline'><a href='https://bit.ly/shaki-portfolio' target="_blank">Portfolio Example 1</a></li>
                      <li className='hover:underline'><a href='https://data-driven.notion.site/Varun-Krishna-Bhaskaran-1835adb7c0614cbe9d88ed45a3f7631e?pvs=74' target="_blank">Portfolio Example 2</a></li>
                    </ul>                      
                  </div>

                  <div className="mt-6 text-[17px] font-semibold">
                  Here’s the sample template
                  </div>
                  <div className="mt-1 ">
                    <ul className="marker:text list-disc pl-6 py-2 space-y-3 text-[17px]">
                      <li className='hover:underline'><a href='https://unimad.notion.site/Your-Name-c736ee9d0b6d46a798071b1be5e2d2c4?pvs=4' target="_blank">Portfolio Template</a></li>
                    </ul>                     
                  </div>

                  <div className="text-[16px] mt-6 pb-2">All you do is － </div>
                  <div className="text-[16px] pb-2">Duplicate the sample template given above. </div>
                  <div className="text-[16px] mb-6 pb-2">Complete the tasks given below and fill in the values you generate into this template. </div>
                </div> : null}
            </>

          </div>


        </div>

      </div>
    </>
  );
};

export default Module4;
