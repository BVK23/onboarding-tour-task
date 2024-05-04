/** @format */

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { useUIContext } from '../../context/UIContext';

const Task1 = (props) => {

  const { editingTask1, setEditingTask1, task1, setTask1, copyOfTask1, setCopyOfTask1 } = useTaskContext();

  const { expandedTask, handleExpandCollapse, setSubmitMessage } = useUIContext();
  const taskId = "task1";
  const moduleId = "module1"

  const { scrollPositionTask1, setScrollPositionTask1 } = useTaskContext();
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef.current) {
        setScrollPositionTask1(scrollableDivRef.current.scrollTop);
      }
    };

    const div = scrollableDivRef.current;
    div.addEventListener('scroll', handleScroll);

    return () => div.removeEventListener('scroll', handleScroll);
  }, [setScrollPositionTask1]);

  // Scroll to the saved position on component mount
  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop = scrollPositionTask1;
    }
  }, []);



  const handleInputChange = (index) => (e) => {
    const newroles = [...task1];
    newroles[index] = e.target.value;
    setTask1(newroles);
  };

  const handleAddField = () => {
    if (task1.length < 15) {
      setTask1([...task1, '']);
    }
  };

  const handleDeleteField = (index) => {
    if (task1.length === 3) {
      return;
    }
    const newroles = [...task1];
    newroles.splice(index, 1);
    setTask1(newroles);
  };

  const handleSubmit = async (content) => {
    try {
      const response = await fetch('/api/authProxy?url=/api/act-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskName: 'Task 1',
          content: content,
        }),
      });
      if (response.ok) {
        setCopyOfTask1([...task1]);
        setEditingTask1(false);
        setSubmitMessage('Your skills look solid. Next let’s outline your previous experiences that highlights your journey so far. I’ll see you there 🤟');
        props.updateProgress();
        handleExpandCollapse(moduleId, "task2");
      } else {
        const errorData = await response.json();
        if (response.status == 401) {
          window.location.href = '/login?message=session-expired';
        } else {
          alert('Submission failed. Please try again.');
        }
      }
    } catch (error) {
      alert('Error reaching server. Please try again.');
      console.error('Error submitting data:', error);
    }
  };


  return (
    <>
      <div
        onClick={() => { if (!expandedTask[moduleId][taskId] && props.locked === false) { handleExpandCollapse(moduleId, taskId); } }}
        className={`relative bg-[#F8F8F8] border-[0.25px] border-[#8C8C8C] rounded-xl overflow-hidden transition-[height] p-5 pb-14 ${expandedTask[moduleId][taskId] ? 'h-[650px]' : 'h-[210px]'
          }`}>
        {props.locked === false ? (
          <button
            onClick={() => { handleExpandCollapse(moduleId, taskId); if (!expandedTask[moduleId][taskId]) handleExpandCollapse(moduleId, taskId); }}
            className="absolute top-0 right-0 p-5 pb-2">
            <svg
              width="20"
              height="20"
              className={`transition ${expandedTask[moduleId][taskId] ? '-rotate-180' : 'rotate-0'
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
        ) : (
          <div className="absolute top-3 right-5">
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.5 21C1.0875 21 0.734375 20.8531 0.440625 20.5594C0.146875 20.2656 0 19.9125 0 19.5V8.65C0 8.2375 0.146875 7.88438 0.440625 7.59063C0.734375 7.29688 1.0875 7.15 1.5 7.15H3.25V4.75C3.25 3.43583 3.71338 2.31563 4.64015 1.38938C5.56692 0.463125 6.68775 0 8.00265 0C9.31755 0 10.4375 0.463125 11.3625 1.38938C12.2875 2.31563 12.75 3.43583 12.75 4.75V7.15H14.5C14.9125 7.15 15.2656 7.29688 15.5594 7.59063C15.8531 7.88438 16 8.2375 16 8.65V19.5C16 19.9125 15.8531 20.2656 15.5594 20.5594C15.2656 20.8531 14.9125 21 14.5 21H1.5ZM8.0042 16C8.53473 16 8.9875 15.8164 9.3625 15.4492C9.7375 15.082 9.925 14.6406 9.925 14.125C9.925 13.625 9.7361 13.1708 9.3583 12.7625C8.9805 12.3542 8.52633 12.15 7.9958 12.15C7.46527 12.15 7.0125 12.3542 6.6375 12.7625C6.2625 13.1708 6.075 13.6292 6.075 14.1375C6.075 14.6458 6.2639 15.0833 6.6417 15.45C7.0195 15.8167 7.47367 16 8.0042 16ZM4.75 7.15H11.25V4.75C11.25 3.84722 10.9343 3.07986 10.3029 2.44792C9.67157 1.81597 8.9049 1.5 8.00295 1.5C7.10098 1.5 6.33333 1.81597 5.7 2.44792C5.06667 3.07986 4.75 3.84722 4.75 4.75V7.15Z"
                fill="#696969"
              />
            </svg>
          </div>
        )}
        <div className="flex items-center gap-2 mb-5">
          <div
            className={`text-[17px] text-black font-semibold `}>
            {' '}
            Task 1
          </div>
          <div
            className={`bg-opacity-20 text-[14px] font-semibold leading-none rounded-full px-2.5 py-1.5 ${props.state === 'Completed'
                ? 'bg-[#299935] text-[#299935]'
                : props.locked === true ? 'bg-[#A1A1A1] text-[#A1A1A1]' : 'bg-[#FFAC33] text-[#FFAC33]'
              } `}>
            {props.state === 'Completed' ? 'Completed' : props.locked === true ? 'Not Started' : 'In Progress'}
          </div>
        </div>
        <div
          ref={scrollableDivRef}
          className={`customScroll h-full max-h-[550px] -ml-2 pl-2 pr-2 ${expandedTask[moduleId][taskId] ? 'overflow-y-auto' : 'overflow-hidden'
            }`}>
          <div
            className={`text-[#1B3252] text-[15px] max-w-[800px] `}>
            <>
              <div className="text-[21px] font-semibold mb-6">
                Listing Your Skills
              </div>

              <div className="text-[16px] mb-6 pb-4">
                <b>Task Overview:</b> Every mad story begins with a clear understanding of what you bring to the table. Let’s note down all your key skills and competencies.
              </div>

              {expandedTask[moduleId][taskId] ? (
                <div>

                  <div className="flex bg-[#DDEDFE] items-center font-[600] rounded-lg mb-5 p-3">
                    <div className="flex-none py-1"><img src="/images/sign-out_purple.png" alt="Networking icon" width="40px" /></div>
                    <div className="flex-grow px-2 py-1">For instance, if you are a Computer Science student, your skills can be Python, SQL, Data Structures, etc.</div>
                  </div>


                  <div className="mb-10 mt-8">
                    <div className="mb-2 font-semibold">
                      Fill in your core skills & competencies 👇
                    </div>
                    {editingTask1 ? (
                      <div className="w-[380px] p-4 border border-[#8C8C8C] rounded-lg shadow">
                        {task1.map((word, index) => (
                          <div className="flex items-center mb-2 p-1">
                            <li
                              key={index}
                              className="inline-flex items-center gap-x-2 pr-2 py-3 text-sm font-medium">
                              {`${index + 1}) `}
                            </li>
                            <input
                              type="text"
                              key={index}
                              value={word}
                              placeholder=""
                              onChange={handleInputChange(index)}
                              className="border rounded-lg h-10 w-[300px] bg-transparent pl-2 py-1.5 ring-1 ring-gray-500 focus:ring-blue-500 focus:outline-none"
                            />
                            <button
                              onClick={() => { handleDeleteField(index); }}
                              disabled={task1.length < 4}
                              className="bg-transparent text-gray-500 text rounded-r-lg h-10 w-[30px] hover:ring-1 hover:ring-gray-500 hover:text-white hover:bg-main-dark  py-1.5 ml-[-25px] disabled:bg-transparent disabled:ring-0 disabled:text-gray-200">
                              x
                            </button>
                          </div>
                        ))}
                        <div className="flex items-center my-2 p-1 group" onClick={handleAddField}>
                          <div className="inline-flex items-center text-gray-400 gap-x-2 pr-2 py-3 text-[14px] font-medium group-hover:text-gray-700 group-hover:text-[15px]">
                            {`${task1.length + 1}) `}
                          </div>
                          <div className="border text-center rounded-lg h-9 w-[290px] bg-transparent px-2 py-1.5 ring-1 ring-gray-100 text-transparent group-hover:ring-gray-500 group-hover:text-gray-700 group-hover:w-[300px] transition-all">
                            Add +
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                          <button
                            onClick={() => {
                              setTask1(copyOfTask1);
                              setEditingTask1(false);
                            }}
                            disabled={copyOfTask1.length < 3}
                            className="bg-main-dark text-white rounded-full hover:bg-red-600 px-5 py-2 mr-2 disabled:bg-gray-400 disabled:opacity-50">
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              handleSubmit(task1);
                            }}
                            disabled={!task1.every(value => value.trim().length >= 1) || JSON.stringify(task1) === JSON.stringify(copyOfTask1)}
                            className=" bg-main-dark text-white px-5 py-2 mr-2 disabled:bg-gray-400 disabled:opacity-50 rounded-full hover:bg-main">
                            Submit
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-[400px] mx-auto p-4 border -ml-2 border-[#000000] rounded shadow">
                        <div className="mb-4 ">
                          <strong>Your Skills</strong>
                          <ul className=" flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                            {task1.map((job, index) => (
                              <li
                                key={index}
                                className="inline-flex items-center gap-x-2 py-3 text-sm font-medium">
                                {`${index + 1}) ${job}`}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => {
                            setCopyOfTask1([...task1]);
                            setEditingTask1(true);
                          }}
                          className="bg-main-dark text-white px-4 py-2 rounded-full hover:bg-main">
                          Edit
                        </button>
                      </div>
                    )}
                  </div>



                  <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

                </div>
              ) : null}
            </>
          </div>
        </div>

      </div>
    </>
  );
};

export default Task1;
