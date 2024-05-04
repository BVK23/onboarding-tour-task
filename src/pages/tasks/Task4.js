/** @format */

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Input from './Input';
import Edit from './Edit';
import { useTaskContext } from '../../context/TaskContext';
import { useUIContext } from '../../context/UIContext';


const Task4 = (props) => {
  const { editingTask4, setEditingTask4, task4, setTask4, task3, task1, task2, copyOfTask4, setCopyOfTask4, unibotTask4, setUnibotTask4 } = useTaskContext();  

  const { expandedTask, handleExpandCollapse, setSubmitMessage } = useUIContext();
  const moduleId = "module1"
  const taskId = "task4";

  const { scrollPositionTask4, setScrollPositionTask4 } = useTaskContext();
  const scrollableDivRef = useRef(null);

  // console.log("Rendering Task4");

  

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef.current) {
        setScrollPositionTask4(scrollableDivRef.current.scrollTop);
      }
    };

    const div = scrollableDivRef.current;
    div.addEventListener('scroll', handleScroll);

    return () => div.removeEventListener('scroll', handleScroll);
  }, [setScrollPositionTask4]);

  // Scroll to the saved position on component mount
  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop = scrollPositionTask4;
    }
  }, []);

//   const [promptText, setPromptText] = useState([`Hey Unibot! 

// Here are my skills: 
// {{insert_skills}}

// Here are previous work experiences:
// {{insert_experiences}}

// Here are my previous projects:
// {{insert_tabular_projects}}

// Help me choose roles that I can target. `]);

const formattedSkills = task1.join(', ');

const formattedExperiences = task2.map(job => 
  `${job.role} for ${job.timeline}: \n${job.description}`
).join('\n\n');

const formattedProjects = task3.map(project => 
  `${project.title}: \n${project.description}`
).join('\n\n');

const promptText = `Hey Unibot!

Here are all my skills:
${formattedSkills}

Here are previous work experiences:
${formattedExperiences}

Here are my previous projects:
${formattedProjects}

Suggest potential job roles that align with my skills, experiences, and areas of interest.`;

// Now you can use finalMessage wherever needed





  //act 1
  const handleInputChange = (index) => (e) => {
    const newroles = [...task4];
    newroles[index] = e.target.value;
    setTask4(newroles);
  };

  const handleAddField = () => {
    if (task4.length < 3) {
      setTask4([...task4, '']);
    }
  };

  const handleDeleteField = (index) => {
    if (task4.length === 1) {
      return;
    }
    const newroles = [...task4];
    newroles.splice(index, 1);
    setTask4(newroles);
  };

  

  

  const handleSubmit = async (content) => {
    if (!content.every(value => value.trim().length >= 2)){
      alert('Please ensure all fields are filled appropriately');
      return;
    }
    try {
      const response = await fetch('/api/authProxy?url=/api/act-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskName: 'Task 4',
          content: content,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.response);
        setCopyOfTask4([...task4]);
        setEditingTask4(false);
        if (content.length == 1){
          setSubmitMessage('Congrats! You have successfully zeroed-in on 1 role! Let’s start building your profile. We’ll kick off by rewriting your resume. See you in the next module! 🤟');
        }else{
          setSubmitMessage('Hope you have selected closely related roles. Let’s start building your profile. We’ll kick off by rewriting your resume. See you in the next module! 🤟');
        }
        props.updateProgress();
        handleExpandCollapse("module2", "object2");
        // Here, you can also handle the logic to give access to the next week.
      } else {
        const errorData = await response.json();
        if (response.status == 401) {
          // Redirect to login

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
        onClick={() => { if ( !expandedTask[moduleId][taskId] && props.locked === false ) { handleExpandCollapse(moduleId,taskId); } }}
        className={`relative bg-[#F8F8F8] border-[0.25px] border-[#8C8C8C] rounded-xl overflow-hidden transition-[height] p-5 pb-14 ${
          expandedTask[moduleId][taskId] ? 'h-[650px]' : 'h-[210px]'
        }`}>
        {props.locked === false ? (
          <button
            onClick={() => { handleExpandCollapse(moduleId,taskId); if ( !expandedTask[moduleId][taskId]) handleExpandCollapse(moduleId,taskId); }}
            className="absolute top-0 right-0 p-5 pb-2">
            <svg
              width="20"
              height="20"
              className={`transition ${
                expandedTask[moduleId][taskId] ? '-rotate-180' : 'rotate-0'
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
            Task 4
          </div>
          <div
            className={`bg-opacity-20 text-[14px] font-semibold leading-none rounded-full px-2.5 py-1.5 ${
              props.state === 'Completed'
                ? 'bg-[#299935] text-[#299935]'
                : props.locked === true ? 'bg-[#A1A1A1] text-[#A1A1A1]' : 'bg-[#FFAC33] text-[#FFAC33]'
            } `}>
            {props.state === 'Completed' ? 'Completed' : props.locked === true ? 'Not Started' : 'In Progress' }
          </div>
        </div>
        <div
          ref={scrollableDivRef}
          className={`customScroll h-full max-h-[550px] -ml-2 pl-2 pr-2 ${
            expandedTask[moduleId][taskId] ? 'overflow-y-auto' : 'overflow-hidden'
          }`}>
          <div
            className={`text-[#1B3252] text-[15px] max-w-[800px] `}>
            <>
              <div className="text-[21px] font-semibold mb-5">
              Finalising Your Role
              </div>

              <div className="text-[16px] mb-6 pb-4">
                <b>Task Overview:</b> Now is the time to note down the role/roles that resonate with your skills and aspirations. Once done, you’ll start building your profile based on these roles. 
              </div>

              {expandedTask[moduleId][taskId] ? (
                <div>
                  

                  <div className="flex bg-[#DDEDFE] items-center font-[600] rounded-lg mb-5 p-3">
                    <div className="flex-none py-1"><img src="/images/sign-out_purple.png" alt="Networking icon" width="40px"/></div>
                    <div className="flex-grow px-2 py-1">Make sure the roles are close enough so that you don’t have to drastically change your profile for each application.</div>
                  </div>

                  <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-white-50 dark:border-gray-500 dark:bg-white-800">
                  <p className="text-[17px] font-[400] leading-relaxed font-semibold"> Paste this prompt into My Unibot tab to discover roles that align with your skills, experiences, projects. 
                  </p>
                  </blockquote> 

                  
                  <div className="mb-10 mt-8">
                    <div className="mb-2 font-semibold">
                      ✍️ Now list down the role/roles that you want to pursue:  
                    </div>
                    {editingTask4 ? (
                      <div className="w-[530px] p-4 border border-[#8C8C8C] rounded-lg shadow">
                        {task4.map((word, index) => (
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
                                onClick={() => {handleDeleteField(index);}}
                                disabled={task4.length <2}
                                className="bg-transparent text-gray-400 text rounded-r-lg h-10 w-[30px] hover:ring-1 hover:ring-gray-500 hover:text-white hover:bg-main-dark  py-1.5 ml-[-25px] disabled:bg-transparent disabled:ring-0 disabled:text-gray-400">
                                x
                            </button>
                          </div>
                        ))}
                        {task4.length!==3 && 
                        <div className="flex items-center my-2 p-1 group" onClick={handleAddField}>
                          <div className="inline-flex items-center text-gray-400 gap-x-2 pr-2 py-3 text-[14px] font-medium group-hover:text-gray-700 group-hover:text-[15px]">
                            {`${task4.length + 1}) `}
                          </div>
                          <div className="border text-center rounded-lg h-9 w-[290px] bg-transparent px-2 py-1.5 ring-1 ring-gray-100 text-transparent group-hover:ring-gray-500 group-hover:text-gray-700 group-hover:w-[300px] transition-all">
                            Add +
                          </div>
                        </div>}

                        <div className="flex items-center space-x-2 pt-2">
                          <button                              
                            onClick={() => {
                              setTask4(copyOfTask4);
                              setEditingTask4(false);
                            }}
                            disabled={copyOfTask4.length <1}
                            className="bg-main-dark text-white rounded-full hover:bg-red-600 px-5 py-2 mr-2 disabled:bg-gray-400 disabled:opacity-50">
                            Cancel
                          </button>
                          <button
                            onClick={() => {                                                       
                              handleSubmit(task4);
                            }}
                            disabled={!task4.every(value => value.trim().length >= 1) || JSON.stringify(task4) === JSON.stringify(copyOfTask4) }
                            className=" bg-main-dark text-white px-5 py-2 mr-2 disabled:bg-gray-400 disabled:opacity-50 rounded-full hover:bg-main">
                            Submit
                          </button>
                        </div>
                      </div>
                     ) : (
                    <div className="w-[550px] mx-auto p-4 border -ml-2 border-[#000000] rounded shadow">
                      <div className="mb-4 ">
                        <strong>Roles to Target🎯</strong>
                        <ul className=" flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                          {task4.map((job, index) => (
                            <li
                              key={index}
                              className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-gray-800">
                              {`${index + 1}) ${job}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => {
                          setCopyOfTask4([...task4]);
                          setEditingTask4(true);
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
            {/* <div className="mb-5">You have completed Act 3 — Proceed to the next act.</div> */}
            {/* <div> */}
          </div>
          {/* {expandedTask[taskId] && 
          <Prompt           
            locked={props.locked}
            text={promptText}
          /> } */}
          
        </div>
      
      </div>

     
    </>
  );
};

export default Task4;
