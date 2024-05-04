/** @format */

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Input from './Input';
import Edit from './Edit';
import { useTaskContext } from '../../context/TaskContext';
import { useUIContext } from '../../context/UIContext';

const Task2 = (props) => {
  const { editingTask2, setEditingTask2, task2, setTask2, copyOfTask2, setCopyOfTask2 } = useTaskContext();

  //const [task, setTask] = useState(false);

  const { expandedTask, handleExpandCollapse, setSubmitMessage } = useUIContext();
  const taskId = "task2";
  const moduleId = "module1";

  const { scrollPositionTask2, setScrollPositionTask2 } = useTaskContext();
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef.current) {
        setScrollPositionTask2(scrollableDivRef.current.scrollTop);
      }
    };

    const div = scrollableDivRef.current;
    div.addEventListener('scroll', handleScroll);

    return () => div.removeEventListener('scroll', handleScroll);
  }, [setScrollPositionTask2]);

  // Scroll to the saved position on component mount
  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop = scrollPositionTask2;
    }
  }, []);



  const handleInputChange = (index, field) => (e) => {
    const newJobs = [...task2];
    newJobs[index][field] = e.target.value;
    setTask2(newJobs);
  };

  const handleAddJob = () => {
    const newJob = { role: '', timeline: '', org: '', location: '', description: '' };
    if (task2.length < 10) { // Assuming a maximum of 15 jobs for UI/UX purposes
      setTask2(task2.concat(newJob));
    }
  };

  const handleDeleteJob = (index) => {
    if (task2.length > 1) { // Assuming you want at least one job to remain
      const newJobs = [...task2];
      newJobs.splice(index, 1);
      setTask2(newJobs);
    }
  };

  const handleSubmit = async (content) => {
    // if (!content.every(value => value.trim() !== '')){
    //   alert('Please enter the fields appropirately');
    //   return;
    // }
    try {
      const response = await fetch('/api/authProxy?url=/api/act-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskName: 'Task 2',
          content: content,
        }),
      });
      if (response.ok) {
        setCopyOfTask2(task2.map(task => ({ ...task })));
        setEditingTask2(false);
        setSubmitMessage('Good job! Now let’s move on to the next task where you’ll list down all the projects you have done. I’ll see you there 🤟');
        props.updateProgress();
        handleExpandCollapse(moduleId, "task3");

        // Here, you can also handle the logic to give access to the next week.
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

  const msgg = `It’s awesome to see you finish acts. You have completed Act 2. Now go ahead to Act 3 and write down the value propositions for each role. Let’s go 💪 abs  ahd abdaa`

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
            Task 2
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
              <div className="text-[21px] font-semibold mb-5">
                Listing Work Experiences
              </div>

              <div className="text-[16px] mb-6 pb-4">
                <b>Task Overview:</b> No experience is off-track if it has contributed to your progress. So let’s note down all your previous full-time work or internship experiences. 
              </div>

              {expandedTask[moduleId][taskId] ? (
                <div>

                  <div className="flex bg-[#DDEDFE] items-center font-[600] rounded-lg mb-5 p-3">
                    <div className="flex-none py-1"><img src="/images/sign-out_purple.png" alt="Networking icon" width="40px" /></div>
                    <div className="flex-grow px-2 py-1">If you are an absolute fresher and do not have any work experience, you can type N/A and move on to the next task.</div>
                  </div>

                  <div className="mb-10 mt-8">
                    <div className="mb-2 font-semibold">
                      ✍️ Input your previous work experiences from your resume.
                    </div>
                    {editingTask2 ? (
                      <div className="w-[800px] mx-auto p-4 border border-[#8C8C8C] rounded-lg shadow">
                        <ul role="list" className="marker:text list-disc pl-5 space-y-3">
                          {task2.map((job, index) => (
                            <li>
                              <div key={index} className="mb-5 mt-2">
                                <div className="flex items-start space-x-4 py-2">
                                  <div className="flex-1 relative">
                                    <input
                                      type="text"
                                      id={`role-input-${index}`}
                                      name="role"
                                      value={job.role}
                                      onChange={handleInputChange(index, 'role')}
                                      placeholder="Role"
                                      className="peer w-full h-10 bg-transparent rounded-lg border px-4 ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none placeholder-transparent"
                                    />
                                    <label
                                      htmlFor={`role-input-${index}`}
                                      className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-[#F8F8F8] px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:bg-[#F8F8F8]"
                                    >
                                      Role
                                    </label>
                                  </div>
                                  <div className="flex-1 relative">
                                    <input
                                      type="text"
                                      id={`location-input-${index}`}
                                      name="location"
                                      value={job.location}
                                      onChange={handleInputChange(index, 'location')}
                                      placeholder="Location"
                                      className="peer w-full h-10 bg-transparent rounded-lg border px-4 ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none placeholder-transparent"
                                    />
                                    <label
                                      htmlFor={`location-input-${index}`}
                                      className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-[#F8F8F8] px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:bg-[#F8F8F8]"
                                    >
                                      Location
                                    </label>
                                  </div>
                                  <div className="pt-2">
                                    <button
                                      onClick={() => handleDeleteJob(index)}
                                      className="text-red-500 hover:text-red-600 focus:outline-none"
                                    >
                                      X
                                    </button>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-4 pr-5 py-3">
                                  <div className="flex-1 relative">
                                    <input
                                      type="text"
                                      id={`org-input-${index}`}
                                      name="Organisation"
                                      value={job.org}
                                      onChange={handleInputChange(index, 'org')}
                                      placeholder="Organisation"
                                      className="peer w-full h-10 bg-transparent rounded-lg border px-4 ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none placeholder-transparent"
                                    />
                                    <label
                                      htmlFor={`org-input-${index}`}
                                      className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-[#F8F8F8] px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:bg-[#F8F8F8]"
                                    >
                                      Organisation
                                    </label>
                                  </div>
                                  <div className="flex-1 relative">
                                    <input
                                      type="text"
                                      id={`timeline-input-${index}`}
                                      name="timeline"
                                      value={job.timeline}
                                      onChange={handleInputChange(index, 'timeline')}
                                      placeholder="Duration"
                                      className="peer w-full h-10 bg-transparent rounded-lg border px-4 ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none placeholder-transparent"
                                    />
                                    <label
                                      htmlFor={`timeline-input-${index}`}
                                      className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-[#F8F8F8] px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:bg-[#F8F8F8]"
                                    >
                                      Duration
                                    </label>
                                  </div>
                                </div>

                                <div className="relative mt-3">
                                  <textarea
                                    id={`description-textarea-${index}`}
                                    name="description"
                                    rows={3}
                                    className="peer customScroll w-[730px] h-[180px] resize-none bg-transparent rounded-lg border px-4 py-2 ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none placeholder-transparent"
                                    placeholder="Description"
                                    value={job.description}
                                    onChange={handleInputChange(index, 'description')}
                                  />
                                  <label
                                    htmlFor={`description-textarea-${index}`}
                                    className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-[#F8F8F8] px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:bg-[#F8F8F8]"
                                  >
                                    Description
                                  </label>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={handleAddJob}
                          disabled={

                            task2.some(task => !task.role.trim() || !task.timeline.trim() || !task.org.trim() || !task.location.trim() || !task.description.trim())
                          }
                          className="w-[700px] h-[30px] bg-transparent text-sm text-gray-400 rounded-t-lg border-t-2 border-x border-gray-300 border-b-0 px-4 py-2 hover:border-gray-400 focus:ring-gray-300 hover:text-gray-500 hover:ring-gray-300 hover:text-base hover:w-[730px] hover:h-[35px] hover:mx-5 my-3 px-5 py-2 mx-9 disabled:opacity-0 disabled:w-[700px] disabled:h-[30px]">
                          Add Experience
                        </button>
                        <div className="flex items-center mt-3 space-x-2">
                          <button
                            onClick={() => {
                              setTask2(copyOfTask2.map(task => ({ ...task })));
                              setEditingTask2(false);
                            }}
                            disabled={copyOfTask2.length < 1}
                            className="flex bg-main-dark text-white rounded-full hover:bg-red-600 px-5 py-2 mr-2 disabled:bg-gray-400 disabled:opacity-50">
                            Cancel
                          </button>
                          <button
                            onClick={() => { handleSubmit(task2); }}
                            disabled={
                              JSON.stringify(task2) === JSON.stringify(copyOfTask2) ||
                              task2.some(task => !task.role.trim() || !task.timeline.trim() || !task.org.trim() || !task.location.trim() || !task.description.trim())
                            }
                            className="flex bg-main-dark text-white font-[600] rounded-full hover:bg-main px-5 py-2 mr-2 disabled:bg-gray-400 disabled:opacity-50">
                            Submit
                          </button>

                        </div>
                      </div>
                    ) : (
                      <div className="w-[800px] mx-auto p-4 border -ml-2 border-[#000000] rounded shadow">
                        <div className="mb-4 ">
                          <ul className="divide-y divide-gray-200 dark:divide-gray-700 marker:text list-disc pl-4">
                            {task2.map((job, index) => (
                              <li key={index} className="py-3">
                                <div className="flex justify-between">
                                  <span className="bg px-3 py-1 font-[600] rounded-lg whitespace-pre-wrap">
                                    {job.role}
                                  </span>
                                  <div className="bg px-3 py-1 font-[600] rounded-lg whitespace-pre-wrap">
                                    {job.location}
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <div className="bg px-3 py-1 font-[600] rounded-lg whitespace-pre-wrap">
                                    {job.org}
                                  </div>
                                  <div className="bg px-3 py-1 font-[600] rounded-lg whitespace-pre-wrap">
                                    {job.timeline}
                                  </div>
                                </div>
                                <hr className="h-px ml-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                <div className="bg mt-2 p-3 rounded-lg whitespace-pre-wrap">
                                  {job.description}
                                </div>
                              </li>
                            ))}
                          </ul>

                        </div>
                        <button
                          onClick={() => {
                            setCopyOfTask2(task2.map(task => ({ ...task })));
                            setEditingTask2(true);
                          }}
                          className="flex bg-main-dark text-white font-[600] rounded-full hover:bg-main mt-3 px-5 py-2 mr-2">
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

export default Task2;
