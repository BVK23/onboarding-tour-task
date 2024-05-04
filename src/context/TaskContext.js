import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  // Example task-specific state variables
  const [editingTask1, setEditingTask1] = useState(true);
  const [editingTask2, setEditingTask2] = useState(true);
  const [editingpb, setEditingpb] = useState({ editing1: true, editing2: true});
  const [editingTask3, setEditingTask3] = useState(true);
  const [editingTask4, setEditingTask4] = useState(true);
  const [editingTask5, setEditingTask5] = useState(true);
  const [editingTask6, setEditingTask6] = useState(true);
  const [editingTask7, setEditingTask7] = useState(true);
  const [editingTask8, setEditingTask8] = useState(true);
  const [editingTask9, setEditingTask9] = useState(true);
  const [editingTask10, setEditingTask10] = useState(true);
  const [editingTask11, setEditingTask11] = useState(true);
  const [editingTask12, setEditingTask12] = useState(true);
  const [editingTask13, setEditingTask13] = useState(true);
  const [editingTask14, setEditingTask14] = useState(true);
  const [editingTask15, setEditingTask15] = useState(true);
  const [editingTask16, setEditingTask16] = useState(true);
  const [editingTask17, setEditingTask17] = useState(true);
  const [editingTask18, setEditingTask18] = useState(true);
  const [editingTask19, setEditingTask19] = useState(true);
  const [editingTask20, setEditingTask20] = useState(true);
  const [editingTask21, setEditingTask21] = useState(true);
  const [editingTask22, setEditingTask22] = useState(true);
  const [editingTask23, setEditingTask23] = useState(true);
  const [editingRowIndexApp, setEditingRowIndexApp] = useState(0);
  const [editingRowIndexCheck, setEditingRowIndexCheck] = useState(0);
  const [editingColdemails, setEditingColdemails] = useState(true);
  const [editingCoverletter, setEditingCoverletter] = useState(true);
  
  

  // Repeat for other tasks as needed
  const [ scrollPositionTask1, setScrollPositionTask1 ] = useState(0);
  // const [ scrollPositionpb, setScrollPositionpb ] = useState(0);
  const [ scrollPositionTask2, setScrollPositionTask2 ] = useState(0);
  const [ scrollPositionTask3, setScrollPositionTask3 ] = useState(0); 
  const [ scrollPositionTask4, setScrollPositionTask4 ] = useState(0);
  const [ scrollPositionTask5, setScrollPositionTask5 ] = useState(0);
  const [ scrollPositionTask6, setScrollPositionTask6 ] = useState(0);
  const [ scrollPositionTask7, setScrollPositionTask7 ] = useState(0);
  const [ scrollPositionTask8, setScrollPositionTask8 ] = useState(0);
  const [ scrollPositionTask9, setScrollPositionTask9 ] = useState(0);
  const [ scrollPositionTask10, setScrollPositionTask10 ] = useState(0);
  const [ scrollPositionTask11, setScrollPositionTask11 ] = useState(0);
  const [ scrollPositionTask12, setScrollPositionTask12 ] = useState(0);
  const [ scrollPositionTask13, setScrollPositionTask13 ] = useState(0);
  const [ scrollPositionTask14, setScrollPositionTask14 ] = useState(0);
  const [ scrollPositionTask15, setScrollPositionTask15 ] = useState(0);
  const [ scrollPositionTask16, setScrollPositionTask16 ] = useState(0);
  const [ scrollPositionTask17, setScrollPositionTask17 ] = useState(0);
  const [ scrollPositionTask18, setScrollPositionTask18 ] = useState(0);
  const [ scrollPositionTask19, setScrollPositionTask19 ] = useState(0);
  const [ scrollPositionTask20, setScrollPositionTask20 ] = useState(0);
  const [ scrollPositionTask21, setScrollPositionTask21 ] = useState(0);
  const [ scrollPositionTask22, setScrollPositionTask22 ] = useState(0);
  const [ scrollPositionTask23, setScrollPositionTask23 ] = useState(0);
  const [ scrollPositionTask24, setScrollPositionTask24 ] = useState(0);
  const [ scrollPositionConnect, setScrollPositionConnect ] = useState(0);
  const [ scrollPositionContent, setScrollPositionContent ] = useState(0);
  const [ scrollPositionComment, setScrollPositionComment ] = useState(0);
  const [ scrollPositionReferral, setScrollPositionReferral ] = useState(0);
  const [ scrollPositionCoverletter, setScrollPositionCoverletter ] = useState(0);
  const [ scrollPositionColdemails, setScrollPositionColdemails ] = useState(0);
  
  // Add other state variables and logic for managing task inputs, etc.
  const [task1, setTask1] = useState(['', '', '']);
  const [copyOfTask1, setCopyOfTask1] = useState([]);  

  const [task2, setTask2] = useState([{ role: '', timeline: '', org: '', location: '', description: '' }]);
  const [copyOfTask2, setCopyOfTask2] = useState([]);

  const [task3, setTask3] = useState([{ title: '', description: '' }]);
  const [copyOfTask3, setCopyOfTask3] = useState([]);

  const [task4, setTask4] = useState(['']);
  const [copyOfTask4, setCopyOfTask4] = useState([]);

  const [task5, setTask5] = useState([{ uni: '', location: '', course: '', timeline: '', coursework: '' }]);
  const [copyOfTask5, setCopyOfTask5] = useState([]);

  const [task6, setTask6] = useState([{ role: '', timeline: '', org: '', location: '', description: '' }]);
  const [copyOfTask6, setCopyOfTask6] = useState([]);

  const [task7, setTask7] = useState(['']);
  const [copyOfTask7, setCopyOfTask7] = useState([]);

  const [task8, setTask8] = useState([{ title: '', description: '' }]);
  const [copyOfTask8, setCopyOfTask8] = useState([]);

  const [task9, setTask9] = useState('');
  const [copyOfTask9, setCopyOfTask9] = useState([]);

  const [task10, setTask10] = useState(['']);
  const [copyOfTask10, setCopyOfTask10] = useState([]);

  const [task11, setTask11] = useState(['']);
  const [copyOfTask11, setCopyOfTask11] = useState([]);

  const [task12, setTask12] = useState(['']);
  const [copyOfTask12, setCopyOfTask12] = useState([]);

  const [task13, setTask13] = useState(['']);
  const [copyOfTask13, setCopyOfTask13] = useState([]);

  const [task14, setTask14] = useState('');
  const [copyOfTask14, setCopyOfTask14] = useState([]);

  const [task15, setTask15] = useState('');

  const [task16, setTask16] = useState(['']);
  const [copyOfTask16, setCopyOfTask16] = useState([]);

  const [task17, setTask17] = useState(['']);
  const [copyOfTask17, setCopyOfTask17] = useState([]);

  const [task18, setTask18] = useState(['']);
  const [copyOfTask18, setCopyOfTask18] = useState([]);

  const [task19, setTask19] = useState(['']);
  const [copyOfTask19, setCopyOfTask19] = useState([]);

  const [task20, setTask20] = useState(['']);
  const [copyOfTask20, setCopyOfTask20] = useState([]);

  const [task21, setTask21] = useState(['']);
  const [copyOfTask21, setCopyOfTask21] = useState([]);

  const [task22, setTask22] = useState(['', '', '']);

  const [task23, setTask23] = useState(['', '', '', '', '']);
 
  const [table1, setTable1] = useState([{date:'', connection:'no', comment:'no'}]);
  const [copyOfTable1, setCopyOfTable1] = useState([]);
  const [table2, setTable2] = useState([{topic_name:'', status:'', content:'', date:''}]);
  const [copyOfTable2, setCopyOfTable2] = useState([]);
  const [application, setApplication] = useState([{ company_name: '', status: '', role: '', mof: '' }]);
  const [copyOfApplication, setCopyOfApplication] = useState([]);

  const [coldemails, setColdemails] = useState(['']);
  const [copyOfColdEmails, setCopyOfColdEmails] = useState([]);

  const [coverletter, setCoverletter] = useState(['']);
  const [copyOfCoverLetter, setCopyOfCoverLetter] = useState([]);

  const [unibotTask4, setUnibotTask4] = useState([]);
  const [unibotTask6, setUnibotTask6] = useState([]);
  const [unibotTask7, setUnibotTask7] = useState([]);
  const [unibotTask8, setUnibotTask8] = useState([]);
  const [unibotTask10, setUnibotTask10] = useState([]);
  const [unibotTask11, setUnibotTask11] = useState([]);


  const contextValues = {
    editingTask1, setEditingTask1, scrollPositionTask1, setScrollPositionTask1, task1, setTask1, copyOfTask1, setCopyOfTask1,
    editingTask2, setEditingTask2, scrollPositionTask2, setScrollPositionTask2, task2, setTask2, copyOfTask2, setCopyOfTask2,
    editingTask3, setEditingTask3, scrollPositionTask3, setScrollPositionTask3, task3, setTask3, copyOfTask3, setCopyOfTask3,
    editingTask4, setEditingTask4, scrollPositionTask4, setScrollPositionTask4, task4, setTask4, copyOfTask4, setCopyOfTask4,
    editingTask5, setEditingTask5, scrollPositionTask5, setScrollPositionTask5, task5, setTask5, copyOfTask5, setCopyOfTask5,
    editingTask6, setEditingTask6, scrollPositionTask6, setScrollPositionTask6, task6, setTask6, copyOfTask6, setCopyOfTask6,
    editingTask7, setEditingTask7, scrollPositionTask7, setScrollPositionTask7, task7, setTask7, copyOfTask7, setCopyOfTask7,
    editingTask8, setEditingTask8, scrollPositionTask8, setScrollPositionTask8, task8, setTask8, copyOfTask8, setCopyOfTask8,
    editingTask9, setEditingTask9, scrollPositionTask9, setScrollPositionTask9, task9, setTask9, copyOfTask9, setCopyOfTask9,
    editingTask10, setEditingTask10, scrollPositionTask10, setScrollPositionTask10, task10, setTask10, copyOfTask10, setCopyOfTask10,
    editingTask11, setEditingTask11, scrollPositionTask11, setScrollPositionTask11, task11, setTask11, copyOfTask11, setCopyOfTask11,
    editingTask12, setEditingTask12, scrollPositionTask12, setScrollPositionTask12, task12, setTask12, copyOfTask12, setCopyOfTask12,
    editingTask13, setEditingTask13, scrollPositionTask13, setScrollPositionTask13, task13, setTask13, copyOfTask13, setCopyOfTask13,
    editingTask14, setEditingTask14, scrollPositionTask14, setScrollPositionTask14, task14, setTask14, copyOfTask14, setCopyOfTask14,
    editingTask15, setEditingTask15, scrollPositionTask15, setScrollPositionTask15, task15, setTask15,
    editingTask16, setEditingTask16, scrollPositionTask16, setScrollPositionTask16, task16, setTask16, copyOfTask16, setCopyOfTask16,
    editingTask17, setEditingTask17, scrollPositionTask17, setScrollPositionTask17, task17, setTask17, copyOfTask17, setCopyOfTask17,
    editingTask18, setEditingTask18, scrollPositionTask18, setScrollPositionTask18, task18, setTask18, copyOfTask18, setCopyOfTask18,
    editingTask19, setEditingTask19, scrollPositionTask19, setScrollPositionTask19, task19, setTask19, copyOfTask19, setCopyOfTask19,
    editingTask20, setEditingTask20, scrollPositionTask20, setScrollPositionTask20, task20, setTask20, copyOfTask20, setCopyOfTask20,
    editingTask21, setEditingTask21, scrollPositionTask21, setScrollPositionTask21, task21, setTask21, copyOfTask21, setCopyOfTask21,
    editingTask22, setEditingTask22, scrollPositionTask22, setScrollPositionTask22, task22, setTask22,
    editingTask23, setEditingTask23, scrollPositionTask23, setScrollPositionTask23, task23, setTask23,
    scrollPositionTask24, setScrollPositionTask24,
    scrollPositionConnect, setScrollPositionConnect,
    scrollPositionContent, setScrollPositionContent,
    scrollPositionComment, setScrollPositionComment,
    scrollPositionReferral, setScrollPositionReferral,
    editingCoverletter, setEditingCoverletter, coverletter, setCoverletter, copyOfCoverLetter, setCopyOfCoverLetter, scrollPositionCoverletter, setScrollPositionCoverletter,    
    editingColdemails, setEditingColdemails, coldemails, setColdemails, copyOfColdEmails, setCopyOfColdEmails, scrollPositionColdemails, setScrollPositionColdemails,
    editingRowIndexCheck, setEditingRowIndexCheck, table1, table2, setTable1,setTable2, copyOfTable1, setCopyOfTable1, copyOfTable2, setCopyOfTable2,
    editingRowIndexApp, setEditingRowIndexApp, application, setApplication, copyOfApplication, setCopyOfApplication,
    unibotTask4, setUnibotTask4, unibotTask6, setUnibotTask6, unibotTask7, setUnibotTask7, unibotTask8, setUnibotTask8, unibotTask10, setUnibotTask10, unibotTask11, setUnibotTask11,


  };

  return (
    <TaskContext.Provider value={contextValues}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
