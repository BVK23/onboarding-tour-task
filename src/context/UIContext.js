import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIContextProvider = ({ children }) => {

    // const initialExpandedState = Object.fromEntries(
    //     new Array(24).fill(null).map((_, index) => [`task${index + 1}`, false])
    // );
    const initialExpandedState = {
        module1: { task1: false, task2: false, task3: false, task4: false },
        module2: { task5: false, task6: false, task7: false, task8: false, object2: false },
        module3: { task9: false, task10: false, task11: false, task12: false },
        module4: { task13: false, task14: false, task15: false, task16: false, task17: false, task18: false, object4: false },
        module5: { task19: false, task20: false, task21: false, object5: false },
        module6: { task22: false, task23: false, task24: false },
        application: {referral:false, coldEmails:false, coverLetter:false},
        personalBrand: {connect:false, comment:false, content:false}
        // Continue for other modules
    };


    const [expandedTask, setExpandedTask] = useState(initialExpandedState);

    // const handleExpandCollapse = (taskId) => {
    //     setExpandedTask(prevState => {
    //       // Check if the current task is already expanded.
    //       const isCurrentlyExpanded = prevState[taskId];

    //       // If currently expanded, collapse it.
    //       if (isCurrentlyExpanded) {
    //         return { ...initialExpandedState }; // Reset to initial state where all tasks are collapsed.
    //       }

    //       // Otherwise, collapse all tasks and expand the clicked one.
    //       const newState = { ...initialExpandedState, [taskId]: true };
    //       return newState;
    //     });
    // };

    const handleExpandCollapse = (moduleId, taskId) => {
        setExpandedTask(prevState => {
            const moduleTasks = prevState[moduleId];
            //   if (!moduleTasks) {
            //     console.error('Module not found:', moduleId);
            //     return prevState; // Return previous state unchanged if module not found
            // }

            const isCurrentlyExpanded = moduleTasks[taskId];

            // If currently expanded, collapse it
            if (isCurrentlyExpanded) {
                return {
                    ...prevState,
                    [moduleId]: { ...moduleTasks, [taskId]: false }
                };
            }

            // Collapse all in this module and expand the clicked one
            const newModuleState = Object.keys(moduleTasks).reduce((acc, key) => {
                acc[key] = key === taskId;
                return acc;
            }, {});

            return {
                ...prevState,
                [moduleId]: newModuleState
            };
        });
    };


    const [submitMessage, setSubmitMessage] = useState('');

    // const showSubmitMessage = (msg) => {
    //   setSubmitMessage(msg);
    //   // Automatically clear the message after a delay
    //   //setTimeout(() => setSubmitMessage(''), 5000);
    // };

    return (
        <UIContext.Provider value={{ expandedTask, handleExpandCollapse, submitMessage, setSubmitMessage /* , otherUIState, setOtherUIState */ }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUIContext = () => useContext(UIContext);
