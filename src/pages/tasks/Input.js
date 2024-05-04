import React from 'react'

const Input = (props) => {
  return (
    <>
      <textarea
        onChange={props.handleInputChangeSkills}
        defaultValue={props.skills}
        className={`customScroll flex ${props.w} border border-[#0000004D] rounded-md outline-main resize-none ${props.h} p-3`}></textarea>
      <div className="flex">
      <button
          type="button"
          disabled={props.disable_cancel}
          onClick={() => {
            props.setEditing();
            props.setCopy();
          }}
          class="focus:outline-none mr-2 text-white bg-main-dark hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm mt-3 px-5 py-2  disabled:bg-gray-400 disabled:opacity-50   dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Cancel
        </button>
        <button
          onClick={() => {
            props.handleSubmit();

          }}
          disabled={props.disable_submit}
          className="flex bg-main-dark text-white font-[600] rounded-full hover:bg-main mt-3 px-5 py-2  disabled:bg-gray-400 disabled:opacity-50">
          Submit
        </button>

      </div>
    </>
  );
}

export default Input