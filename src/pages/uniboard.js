/** @format */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ChatBotUniprep from '../components/ChatBotUniprep';
import nookies from 'nookies';

import Task1 from './tasks/Task1';
import Task2 from './tasks/Task2';
import Task3 from './tasks/Task3';
import Task4 from './tasks/Task4';
import Module2 from './tasks/Module2';
import Module4 from './tasks/Module4';
import Module5 from './tasks/Module5';



const Uniboard = () => {
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState('My Plan Progress');
  const [module, setModule] = useState('Module 1'); 

  // task tracking logic
  const [completedTasks, setCompletedTasks] = useState(0);
  const [completedModule, setCompletedModule] = useState(0);
  const totalTasks = 22;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  const [showAlert, setShowAlert] = useState(false);

  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };
  
  
  

  return (
    <>
    
      <div className="bg-[#F5F5F5] text-main-dark overflow-hidden">
        <div className="w-full p-5">
          <div className="relative flex items-center justify-between z-40">
            <Link
              href="/"
              className="flex items-center gap-2">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.66667 13.3333L0 6.66667L6.66667 0L7.6 0.95L1.88333 6.66667L7.6 12.3833L6.66667 13.3333Z"
                  fill="#1B3252"
                />
              </svg>{' '}
              Back
            </Link>
            <Link
              href="/"
              className="flex">
              <img
                src="/images/logo-beta.svg"
                alt="logo"
                className="w-[130px]"
              />
            </Link>
            <div className="relative">
              <button
                onClick={() => {
                  setMenu(!menu);
                }}
                className={`${
                  menu === false ? 'visible opacity-100' : 'invisible opacity-0'
                }`}>
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 16V14H24V16H0ZM0 9V7H24V9H0ZM0 2V0H24V2H0Z"
                    fill="#1B3252"
                  />
                </svg>
              </button>
              <div
                className={`customShadow3 bg-white rounded-lg absolute top-0 right-0 w-[170px] overflow-hidden z-30 ${
                  menu === true ? 'block' : 'hidden'
                }`}>
                <div className="flex items-center justify-end p-3">
                  <button
                    onClick={() => {
                      setMenu(false);
                    }}
                    className="rounded-full transition hover:bg-[#1B3252] hover:bg-opacity-10">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="8.22266"
                        y="5.99999"
                        width="24"
                        height="2"
                        transform="rotate(45 8.22266 5.99999)"
                        fill="#1B3252"
                      />
                      <rect
                        x="25.1953"
                        y="7.41421"
                        width="24"
                        height="2"
                        transform="rotate(135 25.1953 7.41421)"
                        fill="#1B3252"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-1 flex-col mb-2 px-2">
                  <Link
                    href="/about"
                    className="bg-white transition hover:bg-main hover:bg-opacity-10 text-[15px] flex w-full font-semibold rounded-full px-2.5 py-2">
                    About
                  </Link>
                  <Link
                    href="/mad-stories"
                    className="bg-white transition hover:bg-main hover:bg-opacity-10 text-[15px] flex w-full font-semibold rounded-full px-2.5 py-2">
                    MAD Stories
                  </Link>
                  <button
                    className="bg-white transition hover:bg-main hover:bg-opacity-10 text-[15px] flex w-full font-semibold rounded-full px-2.5 py-2">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md2:grid-cols-[300px,1fr] gap-5 min-h-[calc(100vh-142px)] mt-20 md2:mt-16">
            <div className="flex gap-5 flex-col">
            {/* <div className="sticky top-20 space-y-5"> */}
              <div className="leftSideBar customShadow2 bg-white text-center rounded-2xl px-3 py-5">
                <img
                src="/images/person.png"
                alt="default"
                className="border-[5px] border-main-dark w-[100px] h-[100px] object-cover object-center rounded-full overflow-hidden mx-auto -mt-[65px]"
                />

                <div className="text-[20px] font-semibold mt-5">
                  Name
                </div>
                <div className="text-[#8C8C8C] text-[15px] mt-1">
                  Course
                </div>
                <div className="text-[#8C8C8C] text-[15px] mt-1">
                  Uni
                </div>
                <div className="bg-[#F4F4F4] text-[14px] text-white font-semibold leading-none rounded-full mt-4 px-1.5 py-1">
                  <div
                    style={{ width: `${percentage}%` }}
                    className=" customBG rounded-full p-1">
                    {percentage}%
                  </div>
                </div>
                <div className="goalSection flex items-center justify-center gap-y-0.5 flex-col mb-3 mt-7">
                <div className="bg-[#F8F8F8] text-[#8C8C8C] border border-[#8C8C8C] text-[14px] rounded-full px-3 py-1">
                    Goal {'=>'} Dream_Role
                  </div>
                  </div>
              </div>

              <div className="leftSideTab customShadow2 bg-white rounded-2xl px-4 py-5 flex flex-col flex-1">
                <div className="flex gap-3 flex-col w-full">
                  <button
                    onClick={() => {
                      setTab('My Plan Progress');
                    }}
                    className={`transition hover:bg-main hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${
                      tab === 'My Plan Progress'
                        ? 'bg-main bg-opacity-20'
                        : 'bg-white'
                    }`}>
                    My Framework
                  </button>
                  <button
                    onClick={() => {
                      setTab('Unibot');
                    }}
                    className={`transition hover:bg-main hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${
                      tab === 'Unibot' ? 'bg-main bg-opacity-20' : 'bg-white'
                    }`}>
                    My Unibot
                  </button>
                  <button
                    onClick={() => { if(completedModule > 2 )
                      setTab('Personal Brand');
                    }}
                    className={`personalBrandBttn transition flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${
                      tab === 'Personal Brand' ? 'bg-main bg-opacity-20' : completedModule > 2 ? 'bg-white hover:bg-main hover:bg-opacity-20' : 'text-[#8C8C8C] '
                    }`}>
                    My Brand
                    { completedModule < 3 ?
                    (<svg
                      width="16"
                      height="20"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.125 15.75C0.815625 15.75 0.550781 15.6398 0.330469 15.4195C0.110156 15.1992 0 14.9344 0 14.625V6.4875C0 6.17813 0.110156 5.91328 0.330469 5.69297C0.550781 5.47266 0.815625 5.3625 1.125 5.3625H2.4375V3.5625C2.4375 2.57688 2.78504 1.73672 3.48011 1.04203C4.17519 0.347344 5.01581 0 6.00199 0C6.98816 0 7.82813 0.347344 8.52188 1.04203C9.21563 1.73672 9.5625 2.57688 9.5625 3.5625V5.3625H10.875C11.1844 5.3625 11.4492 5.47266 11.6695 5.69297C11.8898 5.91328 12 6.17813 12 6.4875V14.625C12 14.9344 11.8898 15.1992 11.6695 15.4195C11.4492 15.6398 11.1844 15.75 10.875 15.75H1.125ZM6.00315 12C6.40105 12 6.74063 11.8623 7.02188 11.5869C7.30313 11.3115 7.44375 10.9805 7.44375 10.5938C7.44375 10.2188 7.30207 9.87813 7.01872 9.57188C6.73537 9.26562 6.39475 9.1125 5.99685 9.1125C5.59895 9.1125 5.25938 9.26562 4.97813 9.57188C4.69688 9.87813 4.55625 10.2219 4.55625 10.6031C4.55625 10.9844 4.69793 11.3125 4.98128 11.5875C5.26463 11.8625 5.60525 12 6.00315 12ZM3.5625 5.3625H8.4375V3.5625C8.4375 2.88541 8.20074 2.30989 7.72721 1.83594C7.25367 1.36198 6.67868 1.125 6.00221 1.125C5.32574 1.125 4.75 1.36198 4.275 1.83594C3.8 2.30989 3.5625 2.88541 3.5625 3.5625V5.3625Z"
                        fill="#808080"
                      />
                    </svg> ): '' }
                  </button>
                  <button
                    onClick={() => { if(completedModule > 3 )
                      setTab('Applications');
                    }}
                    className={`applBttn transition  flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${
                      tab === 'Applications' ? 'bg-main bg-opacity-20' : completedModule > 3 ? 'bg-white hover:bg-main hover:bg-opacity-20' : 'text-[#8C8C8C] '
                    }`}>
                    My Applications
                    { completedModule < 4 ?
                    (<svg
                      width="16"
                      height="20"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.125 15.75C0.815625 15.75 0.550781 15.6398 0.330469 15.4195C0.110156 15.1992 0 14.9344 0 14.625V6.4875C0 6.17813 0.110156 5.91328 0.330469 5.69297C0.550781 5.47266 0.815625 5.3625 1.125 5.3625H2.4375V3.5625C2.4375 2.57688 2.78504 1.73672 3.48011 1.04203C4.17519 0.347344 5.01581 0 6.00199 0C6.98816 0 7.82813 0.347344 8.52188 1.04203C9.21563 1.73672 9.5625 2.57688 9.5625 3.5625V5.3625H10.875C11.1844 5.3625 11.4492 5.47266 11.6695 5.69297C11.8898 5.91328 12 6.17813 12 6.4875V14.625C12 14.9344 11.8898 15.1992 11.6695 15.4195C11.4492 15.6398 11.1844 15.75 10.875 15.75H1.125ZM6.00315 12C6.40105 12 6.74063 11.8623 7.02188 11.5869C7.30313 11.3115 7.44375 10.9805 7.44375 10.5938C7.44375 10.2188 7.30207 9.87813 7.01872 9.57188C6.73537 9.26562 6.39475 9.1125 5.99685 9.1125C5.59895 9.1125 5.25938 9.26562 4.97813 9.57188C4.69688 9.87813 4.55625 10.2219 4.55625 10.6031C4.55625 10.9844 4.69793 11.3125 4.98128 11.5875C5.26463 11.8625 5.60525 12 6.00315 12ZM3.5625 5.3625H8.4375V3.5625C8.4375 2.88541 8.20074 2.30989 7.72721 1.83594C7.25367 1.36198 6.67868 1.125 6.00221 1.125C5.32574 1.125 4.75 1.36198 4.275 1.83594C3.8 2.30989 3.5625 2.88541 3.5625 3.5625V5.3625Z"
                        fill="#808080"
                      />
                    </svg> ): '' }
                  </button>

                  <button
                    onClick={() => {
                      setTab('Talk to us');
                    }}
                    className={`transition hover:bg-main hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${
                      tab === 'Talk to us'
                        ? 'bg-main bg-opacity-20'
                        : 'bg-white'
                    }`}>
                    My Feedback
                  </button>
                 
                </div>
              </div>
            {/* </div> */}
            </div>

            <div className="rightMainSection customShadow2 bg-white rounded-2xl px-5 py-3">
              {tab === 'My Plan Progress' ? (
                <>
                  <div className="topRightBar customScroll overflow-x-auto py-2">
                    <div className="flex flex-nowrap items-center gap-5 whitespace-nowrap min-w-full max-w-[1px]">
                      <button
                        onClick={() => {
                          setModule('Module 1');
                        }}
                        className={`relative text-[15px] font-semibold rounded-full px-5 py-1.5 transition hover:bg-main-dark hover:text-white border border-main-dark ${
                          module === 'Module 1'
                            ? 'bg-main-dark text-white'
                            : 'bg-white text-main-dark'
                        }`}>
                        Module 1{' '}
                        { completedModule >= 1 ?
                        <svg
                          width="18"
                          height="18"
                          className="absolute -top-1 -right-1"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle
                            cx="8.5"
                            cy="8.5"
                            r="8.5"
                            fill="#299935"
                          />
                          <rect
                            x="3"
                            y="9.36914"
                            width="2.02865"
                            height="5.07164"
                            transform="rotate(-46.6027 3 9.36914)"
                            fill="white"
                          />
                          <rect
                            x="12.1797"
                            y="4.0896"
                            width="2.02865"
                            height="10.1433"
                            transform="rotate(43.3973 12.1797 4.0896)"
                            fill="white"
                          />
                        </svg> : null }
                      </button>
                      <button
                        onClick={() => { if (completedModule >= 1) setModule('Module 2'); }}
                        className={`relative text-[15px] font-semibold rounded-full px-5 py-1.5 ${ completedModule >= 1 ? 
                          'transition hover:bg-main-dark hover:text-white border border-main-dark' : 'bg-[#E6E6E6] text-[#B0B0B0] border border-[#E6E6E6]'} ${
                          module === 'Module 2'
                            ? 'bg-main-dark text-white'
                            : completedModule >= 1 ?  'bg-white text-main-dark' : null
                        }`}>
                        Module 2{' '}
                        { completedModule >= 2 ?
                        <svg
                          width="18"
                          height="18"
                          className="absolute -top-1 -right-1"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle
                            cx="8.5"
                            cy="8.5"
                            r="8.5"
                            fill="#299935"
                          />
                          <rect
                            x="3"
                            y="9.36914"
                            width="2.02865"
                            height="5.07164"
                            transform="rotate(-46.6027 3 9.36914)"
                            fill="white"
                          />
                          <rect
                            x="12.1797"
                            y="4.0896"
                            width="2.02865"
                            height="10.1433"
                            transform="rotate(43.3973 12.1797 4.0896)"
                            fill="white"
                          />
                        </svg> : 
                        // <svg
                        //   width="16"
                        //   height="21"
                        //   className="absolute -top-0 -right-1"
                        //   viewBox="0 0 16 21"
                        //   fill="none"
                        //   xmlns="http://www.w3.org/2000/svg">
                        //   <path
                        //     d="M1.5 21C1.0875 21 0.734375 20.8531 0.440625 20.5594C0.146875 20.2656 0 19.9125 0 19.5V8.65C0 8.2375 0.146875 7.88438 0.440625 7.59063C0.734375 7.29688 1.0875 7.15 1.5 7.15H3.25V4.75C3.25 3.43583 3.71338 2.31563 4.64015 1.38938C5.56692 0.463125 6.68775 0 8.00265 0C9.31755 0 10.4375 0.463125 11.3625 1.38938C12.2875 2.31563 12.75 3.43583 12.75 4.75V7.15H14.5C14.9125 7.15 15.2656 7.29688 15.5594 7.59063C15.8531 7.88438 16 8.2375 16 8.65V19.5C16 19.9125 15.8531 20.2656 15.5594 20.5594C15.2656 20.8531 14.9125 21 14.5 21H1.5ZM8.0042 16C8.53473 16 8.9875 15.8164 9.3625 15.4492C9.7375 15.082 9.925 14.6406 9.925 14.125C9.925 13.625 9.7361 13.1708 9.3583 12.7625C8.9805 12.3542 8.52633 12.15 7.9958 12.15C7.46527 12.15 7.0125 12.3542 6.6375 12.7625C6.2625 13.1708 6.075 13.6292 6.075 14.1375C6.075 14.6458 6.2639 15.0833 6.6417 15.45C7.0195 15.8167 7.47367 16 8.0042 16ZM4.75 7.15H11.25V4.75C11.25 3.84722 10.9343 3.07986 10.3029 2.44792C9.67157 1.81597 8.9049 1.5 8.00295 1.5C7.10098 1.5 6.33333 1.81597 5.7 2.44792C5.06667 3.07986 4.75 3.84722 4.75 4.75V7.15Z"
                        //     fill="#696969"
                        //   />
                        //   </svg> 
                          null}
                      </button>
                      <button
                        onClick={() => { if (completedModule >= 2) setModule('Module 3'); }}
                        className={`relative text-[15px] font-semibold rounded-full px-5 py-1.5 ${ completedModule >= 2 ? 
                          'transition hover:bg-main-dark hover:text-white border border-main-dark' : 'bg-[#E6E6E6] text-[#B0B0B0] border border-[#E6E6E6]'} ${
                          module === 'Module 3'
                            ? 'bg-main-dark text-white'
                            : completedModule >= 2 ?  'bg-white text-main-dark' : null
                        }`}>
                        Module 3{' '}
                        { completedModule >= 3 ?
                        <svg
                          width="18"
                          height="18"
                          className="absolute -top-1 -right-1"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle
                            cx="8.5"
                            cy="8.5"
                            r="8.5"
                            fill="#299935"
                          />
                          <rect
                            x="3"
                            y="9.36914"
                            width="2.02865"
                            height="5.07164"
                            transform="rotate(-46.6027 3 9.36914)"
                            fill="white"
                          />
                          <rect
                            x="12.1797"
                            y="4.0896"
                            width="2.02865"
                            height="10.1433"
                            transform="rotate(43.3973 12.1797 4.0896)"
                            fill="white"
                          />
                        </svg> : null }
                      </button>
                      <button
                        onClick={() => { if (completedModule >= 3) setModule('Module 4'); }}
                        className={`relative text-[15px] font-semibold rounded-full px-5 py-1.5 ${ completedModule >= 3 ? 
                          'transition hover:bg-main-dark hover:text-white border border-main-dark' : 'bg-[#E6E6E6] text-[#B0B0B0] border border-[#E6E6E6]'} ${
                          module === 'Module 4'
                            ? 'bg-main-dark text-white'
                            : completedModule > 3 ?  'bg-white text-main-dark' : null
                        }`}>
                        Module 4{' '}
                        { completedModule >= 4 ?
                        <svg
                          width="18"
                          height="18"
                          className="absolute -top-1 -right-1"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle
                            cx="8.5"
                            cy="8.5"
                            r="8.5"
                            fill="#299935"
                          />
                          <rect
                            x="3"
                            y="9.36914"
                            width="2.02865"
                            height="5.07164"
                            transform="rotate(-46.6027 3 9.36914)"
                            fill="white"
                          />
                          <rect
                            x="12.1797"
                            y="4.0896"
                            width="2.02865"
                            height="10.1433"
                            transform="rotate(43.3973 12.1797 4.0896)"
                            fill="white"
                          />
                        </svg> : null }
                      </button>
                      <button
                        onClick={() => { if (completedModule >= 4) setModule('Module 5'); }}
                        className={`relative text-[15px] font-semibold rounded-full px-5 py-1.5 ${ completedModule >= 4 ? 
                          'transition hover:bg-main-dark hover:text-white border border-main-dark' : 'bg-[#E6E6E6] text-[#B0B0B0] border border-[#E6E6E6]'} ${
                          module === 'Module 5'
                            ? 'bg-main-dark text-white'
                            : completedModule >= 4 ?  'bg-white text-main-dark' : null
                        }`}>
                        Module 5{' '}
                        { completedModule >= 5 ?
                        <svg
                          width="18"
                          height="18"
                          className="absolute -top-1 -right-1"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle
                            cx="8.5"
                            cy="8.5"
                            r="8.5"
                            fill="#299935"
                          />
                          <rect
                            x="3"
                            y="9.36914"
                            width="2.02865"
                            height="5.07164"
                            transform="rotate(-46.6027 3 9.36914)"
                            fill="white"
                          />
                          <rect
                            x="12.1797"
                            y="4.0896"
                            width="2.02865"
                            height="10.1433"
                            transform="rotate(43.3973 12.1797 4.0896)"
                            fill="white"
                          />
                        </svg> : null }
                      </button>
                      <button
                        onClick={() => { if (completedModule >= 4) setModule('Module 6'); }}
                        className={`relative text-[15px] font-semibold rounded-full px-5 py-1.5 ${ completedModule >= 4 ? 
                          'transition hover:bg-main-dark hover:text-white border border-main-dark' : 'bg-[#E6E6E6] text-[#B0B0B0] border border-[#E6E6E6]'} ${
                          module === 'Module 6'
                            ? 'bg-main-dark text-white'
                            : completedModule >= 4 ?  'bg-white text-main-dark' : null
                        }`}>
                        Module 6{' '}
                        { completedModule >= 6 ?
                        <svg
                          width="18"
                          height="18"
                          className="absolute -top-1 -right-1"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle
                            cx="8.5"
                            cy="8.5"
                            r="8.5"
                            fill="#299935"
                          />
                          <rect
                            x="3"
                            y="9.36914"
                            width="2.02865"
                            height="5.07164"
                            transform="rotate(-46.6027 3 9.36914)"
                            fill="white"
                          />
                          <rect
                            x="12.1797"
                            y="4.0896"
                            width="2.02865"
                            height="10.1433"
                            transform="rotate(43.3973 12.1797 4.0896)"
                            fill="white"
                          />
                        </svg> : null }
                      </button>
                      
                    </div>
                  </div>

                  <div className="flex gap-5 flex-col mt-2">
                    {module === 'Module 1' ? (
                      <>
                        <div className="p-3 mt-2 space-y-3 mb-5">
                          <div className="text-[23px] font-semibold ">
                          Objective of Module 1
                          </div>
                          <div className="text-[17px] my-2">
                          This module is to help you decide on the role/roles and channel all your energy on up-skilling based on those roles. 
                          </div>
                        </div>
                        <div className='taskSection'>
                        <Task1
                          state={completedTasks < 1 ? "In Progress" : "Completed"}
                          locked={false}
                        />
                        </div>
                        <Task2
                          state={completedTasks < 2 ? "In Progress" : "Completed"}
                          locked={completedTasks < 1 }
                        />
                        <Task3
                          state={completedTasks < 3 ? "In Progress" : "Completed"}
                          locked={completedTasks < 2 }
                          // locked={false}
                        />

                        <Task4
                          state={completedTasks < 4 ? "In Progress" : "Completed"}
                          locked={false}
                        />
                      </>
                    ) : module === 'Module 2' ? (
                      <>
                        <Module2
                          // state={completedTasks < 17 ? "In Progress" : "Completed"}
                          locked={false}
                        />
                       
                      </>
                    ) : module === 'Module 3' ? (
                      <>
                        <div className="p-3 mt-2 space-y-3 mb-4">
                          <div className="text-[23px] font-semibold ">
                          Objective of Module 3
                          </div>
                          <div className="text-[17px] my-2">
                          A solid LinkedIn profile is not an option but a necessity to get hired. Let’s optimise yours for maximum conversions! 
                          </div>
                        </div>
                         
                       
                      </>
                    ) : module === 'Module 4' ? (
                      <>
                        <Module4/>
                        
                      </>
                    ) : module === 'Module 5' ? (
                      <>

                        <Module5/>
                        
                       
                       </>
                    ) : module === 'Module 6' ? (
                      <>
                        <div className="p-3 mt-2 space-y-3 mb-5">
                          <div className="text-[23px] font-semibold ">
                          Objective of Module 6
                          </div>
                          <div className="text-[17px] my-2">
                          The objective of this module is to get you prepped up so that you go in and ace your next interview. 
                          </div>
                        </div>
                        
                        
                        
                      </>
                    )  : null}
                  </div>
                </>
              ) : tab === 'Unibot' ? (
                <>
                  <ChatBotUniprep />
                </>
              ) : tab === 'Personal Brand' ? (
                <div className="flex flex-col h-full py-2">
                  <div className="text-[30px] text-center font-[600]">Build Your Personal Brand</div>
                  <div className="flex gap-5 flex-col mt-6">
                   
                  </div>
                  <div className="text-[24px] font-[600] mt-10 ">Overall Summary</div>
                  <div className="my-2">Here are the required metrics for a solid personal brand. </div>
                  <table className="w-1/2 text-left text-[#1B3252] border-2 table-fixed rounded-lg ">                  
                    <tbody>
                      <tr className="border-b ">
                        <td className="px-6 py-4 bg-[#EFF7FF] w-3/4">No of connections / week</td>
                        <td className="px-6 py-4 w-1/4">80-100</td>
                      </tr>
                      <tr className="border-b ">
                        <td className="px-6 py-4 bg-[#EFF7FF] w-3/4">No of posts / week</td>
                        <td className="px-6 py-4 w-1/4">3-5</td>
                      </tr>
                      <tr className="border-b  ">
                        <td className="px-6 py-4 bg-[#EFF7FF] w-3/4">No of comments / week</td>
                        <td className="px-6 py-4 w-1/4">50-75</td>
                      </tr>                   
                    </tbody>
                  </table>
                  <div className='personalBrandTables'>
                    <div className="text-[26px] text-center font-[600] mt-14 ">Connections & Comments Checklist</div>
                    <div className="flex gap-5 flex-col mt-6">
                      
                    </div>
                    <div className="text-[26px] text-center font-[600] mt-10 ">Content Planner</div>
                    <div className="flex gap-5 flex-col mt-6">
                   
                    </div>
                  </div>
                </div>
              ) : tab === 'Applications' ? (
                <div className="flex flex-col h-full py-2">
                  <div className="text-[30px] text-center font-[600]">Applications</div>
                  <div className="flex gap-5 flex-col my-6 ">
                
                  </div>
                  <blockquote className="my-2 border-s-4 border-gray-300 bg-white-50 dark:border-gray-500">
                    <p className="text-[17px] font-[400] leading-relaxed px-4 py-1">You can use the Application Tracker below in order to manage all your applications from a single place. </p>
                  </blockquote>
                  <div className='applTracker'>
                  <div className="text-[26px] text-center font-[600] mt-10 ">Application Tracker</div>
                  <div className="flex gap-5 flex-col mt-6">
                
                  </div>
                </div>
                </div>

              
              ) 
             
              : tab === 'Talk to us' ? (
                <>
                  <div className="text-[25px] font-[600] mb-2 mt-1">
                  Your feedback counts!
                  </div>
                  <div className="text-[15px] max-w-[600px]">
                  Unimad is built by the students for the students. Your experience means everything to us. So if there’s anywhere you think we can improve, don’t hesitate to let us know.
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uniboard;