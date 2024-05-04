/** @format */

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useUIContext } from '../../context/UIContext';

const Module5 = (props) => {

  const { expandedTask, handleExpandCollapse, setSubmitMessage } = useUIContext();
  const taskId = "object5";
  const moduleId = "module5";


 

  return (
    <>
      <div
        onClick={() => { if (!expandedTask[moduleId][taskId]) { handleExpandCollapse(moduleId, taskId); } }}
        className={`relative rounded-lg overflow-hidden transition-[height] p-3 pb-14 group hover:ring-[#8C8C8C] ${expandedTask[moduleId][taskId] ? 'h-[540px]' : 'h-[160px] hover:ring-2'
          }`}>
        <button
          
          onClick={() => { if ( expandedTask[moduleId][taskId]) handleExpandCollapse(moduleId,taskId); }}
          className={`absolute rounded-t-lg inset-x-0 bottom-0 w-full h-[30px] flex justify-center items-center ${expandedTask[moduleId][taskId] ? 'group-hover:ring-2 group-hover:ring-[#8C8C8C] ' : ''}`}>
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
          // onClick={handleClick}
          onClick={() => { if ( expandedTask[moduleId][taskId]  ) { handleExpandCollapse(moduleId,taskId); } }}
          className="text-[#1B3252] text-[23px] font-semibold mt-2 mb-3">
          Objective of Module 5
        </div>

        <div
          // onClick={handleClick}
          onClick={() => { if ( expandedTask[moduleId][taskId]  ) { handleExpandCollapse(moduleId,taskId); } }}
          className="text-[17px] my-2 pb-1">
          The objective of this module is to make you a proactive candidate and showcase how you add value to the organisation.
        </div>
        <div
          className={`customScroll h-full max-h-[400px] -ml-2 px-2 pt-1 ${expandedTask[moduleId][taskId] ? 'overflow-y-auto' : 'overflow-hidden'
            }`}>
          <div
            className={`text-[#1B3252] text-[15px] max-w-[800px] `}>
            <>


              {expandedTask[moduleId][taskId] ?
                <div>
                  <div className="mt-3 text-[18px] font-semibold">
                    What is a VPD?
                  </div>
                  <div className="bg-[#DDEDFE] rounded-lg mb-5 p-3 flex items-start">
                    <img src="/images/value-icon.png" alt="Value icon" className="w-11 h-10 mb-2 my-1" />
                    <div className="py-1 ml-3">
                      <p className="text-[16px] font-semibold">A clear document explaining 3 questions 👇</p>
                      <ol className="list-decimal space-y-2 ml-3 mt-3">
                        <li>How do you add value to the company?</li>
                        <li>How does the company add value to you?</li>
                        <li>How do you fit in with the culture of the company?</li>
                      </ol>
                    </div>
                  </div>

                  <div className="text-[16px] mt-6 pb-2">Here are a few Value Proposition documents for reference. Feel free to duplicate it and add your own content. </div>
                  <div className="mt-1 text-[17px]">
                    <ul className="marker:text list-disc pl-6 py-2 space-y-3 text-[17px]">
                      <li className='hover:underline'><a href='https://unimad.notion.site/UMA-Value-Proposition-Document-cc7a98732afa4b7ca273894517e614a6' target="_blank">VPD Example 1</a></li>
                      <li className='hover:underline'><a href='https://unimad.notion.site/Radworks-Value-Proposition-Document-ec97f3d6482e436ca337693c29ba38b1' target="_blank">VPD Example 2</a></li>
                      <li className='hover:underline'><a href='https://data-driven.notion.site/Value-Proposition-for-the-Digital-Learning-Consultant-role-at-QA-77196e84ad3d43fa9721e3a939ea7164' target="_blank">VPD Example 3</a></li>

                    </ul>                      
                  </div>
                </div> : null}
            </>

          </div>


        </div>

      </div>
    </>
  );
};

export default Module5;
