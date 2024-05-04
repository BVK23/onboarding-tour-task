import React from 'react'

const Edit = (props) => {
  return (
    <div className={`${props.w} mx-auto p-4 border -ml-2 border-[#000000] rounded shadow`}>
      <div className="mb-4">
        <strong className="text-[16px]">{props.title}</strong>
        <ul class={`${props.w} flex flex-col divide-y divide-gray-200 dark:divide-gray-700`}>
          <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium whitespace-pre-wrap">
            {props.skills}
          </li>
        </ul>
      </div>
      <button
        onClick={()=> 
         { props.setEditing();
           props.setCopy();
        }}
        className="flex bg-main-dark text-white font-[600] rounded-full hover:bg-main mt-3 px-5 py-2 mr-2">
        Edit
      </button>
    </div>
  );
}

export default Edit