import { HiOutlineSelector } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import DropAsset from './DropAsset'
import { createContext, useContext, useState } from 'react'
import { useAppContext } from '../../../context/state'

//TODO: Set Modal View (no Header) with X in top right to close view. 


const UpdateJob = (option) => {

  const sessionState = useAppContext();

  let user_name = sessionState.user_name;
  let job_title = sessionState.job_title;

  console.log('UserState.user_name:'+user_name);
  console.log('UserState.job_title:'+job_title);
  console.log('Option: '+option.option);

  const {
    register,
    trigger,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      updateType: option.option,
      updateMessage: '',
      updateAssetUrl: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    sessionState.job_title = data.updateMessage;
//TODO:DB:POST to JOB_CHECKIN table
  }

  console.log(watch("updateMessage"));
        

  return (
    <section className="px-3 mt-3 text-darky">
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-xl font-medium mb-5">[ProjectName: {sessionState.job_title}]</h3>

      <label className="flex flex-col mb-5">
        <span className="font-medium mb-2">Project Requirements</span>
        <p>Needed?</p>
      </label>

      <label className="flex flex-col mb-5">
        <span className="font-medium mb-2">Update Type</span>
        <div className="relative w-full">
          <select
            {...register('updateType', { required: true })}
            className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm bg-white w-full"
          >
            <option value="draft">Draft</option>
            <option value="final">Final Candidate</option>
            <option value="general">General Update</option>
          </select>
          <HiOutlineSelector className="absolute right-2 bottom-2 text-2xl" />
        </div>
      </label>

      <label className="flex flex-col mb-5">
        <span className="font-medium mb-2">Message</span>
        <textarea
          {...register('updateMessage', { required: true })}
          rows={3}
          className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm"
        ></textarea>
      </label>


      <label className="flex flex-col mb-5">
      <div className="flex justify-between px-5 py-2 deliveryBox" >
        <DropAsset />
        {/* <img 
                src='/images/logo.png'
                alt="Artwork update"
                className="imgFill"
              /> */}

      </div>
      </label>

      <div className="mt-3 flex justify-end">
          <button type="submit" className="px-3 rounded-sm py-1 bg-primary text-white font-medium">
            Submit update
          </button>
      </div>
    </form>
    </div>
    </section>
  )
}

export default UpdateJob
