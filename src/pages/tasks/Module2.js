/** @format */

import React from 'react';

import { useUIContext } from '../../context/UIContext';

const Module2 = (props) => {

  const { expandedTask, handleExpandCollapse, setSubmitMessage } = useUIContext();
  const taskId = "object2";
  const moduleId = "module2";

 
  return (
    <>
      <div
        onClick={() => { if (!expandedTask[moduleId][taskId]) {handleExpandCollapse(moduleId, taskId); } }}
        className={`relative rounded-lg overflow-hidden transition-[height] p-3 pb-14 group hover:ring-[#8C8C8C] ${expandedTask[moduleId][taskId] ? 'h-[670px]' : 'h-[160px] hover:ring-2'
          }`}>
        <button
          
           onClick={() => {  if ( expandedTask[moduleId][taskId]) handleExpandCollapse(moduleId,taskId); }}
          className={`absolute rounded-t-lg inset-x-0 bottom-0 w-full h-[30px] flex justify-center items-center ${expandedTask[moduleId][taskId] ? 'group-hover:ring-2 group-hover:ring-[#8C8C8C] ' : ''}`}>
          <svg
            width="20"
            height="20"
            className={`transition align-center ${expandedTask[moduleId][taskId] ? ' -rotate-180' : 'animate-bounce rotate-0'
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
          Objective of Module 2
        </div>

        <div
          
           onClick={() => { if ( expandedTask[moduleId][taskId]  ) { handleExpandCollapse(moduleId,taskId); } }}
          className="text-[17px] my-2 pb-1">
          75% of the resumes don’t pass the ATS checks. The objective of this module is to make sure you belong to the other 25%.
        </div>
        <div
          className={`customScroll h-full max-h-[550px] -ml-2 px-2 pt-1 ${expandedTask[moduleId][taskId] ? 'overflow-y-auto' : 'overflow-hidden'
            }`}>
          <div
            className={`text-[#1B3252] text-[15px] max-w-[800px] `}>
            <>


              {expandedTask[moduleId][taskId] ?
                <div>
                  <div className="mt-3 text-[18px] font-semibold">
                    Resume Tips
                  </div>
                  <ul className="marker:text list-disc mt-2 pl-5 space-y-3 text-[16px]">
                    <li>Outcome-based sentences.</li>
                    <li>Strictly 1-paged resume.</li>
                    <li>No summary needed.</li>
                    <li>Use the PDF format.</li>
                    <li>Minimal and clean</li>
                    <li>No fancy design.</li>
                  </ul>

                  <div className="mt-7 text-[17px] font-semibold">
                    Here are a few sample resume templates 👇
                  </div>
                  <div className="mt-1 text-[17px]">
                    <ul className="marker:text list-disc pl-6 py-2 space-y-3 text-[17px]">
                      <li className='hover:underline'><a href='https://storage.googleapis.com/appuserfiles/unimadFiles/SharathLeelakrishnan_Resume.pdf' target="_blank">Resume Example 1</a></li>
                      <li className='hover:underline'><a href='https://storage.googleapis.com/appuserfiles/unimadFiles/MadhumithaDev_Resume.pdf' target="_blank">Resume Example 2</a></li>                      
                      <li className='hover:underline'><a href='https://storage.googleapis.com/appuserfiles/unimadFiles/Aarthi_Nageswaran_Resume.pdf' target="_blank">Resume Example 3</a></li>
                      <li className='hover:underline'><a href='https://storage.googleapis.com/appuserfiles/unimadFiles/Resume_Varun_Krishna_Bhaskaran.pdf' target="_blank">Resume Example 4</a></li>
                    </ul>                      
                  </div>
                  <div className="text-[16px] my-6 pb-2">
                    Complete all these tasks and you’ll have your resume built by the end of this module.
                  </div>

                </div> : null}
            </>

          </div>


        </div>

      </div>
    </>
  );
};

export default Module2;
