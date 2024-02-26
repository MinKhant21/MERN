import React, { useState } from "react";
import useCategory from "../../hooks/useCategory";

export default function CategoryModal() {
     const [name,setName] = useState('');
     let {message , Create} = useCategory();
const HandleSubmit = async () => {
    let res =  await Create({name})

}
  return (
    <>
      <dialog id="my_modal_1"  className=" modal">
        <div className="modal-box dark:bg-gray-800">
          <h3 className="font-bold  text-lg text-white">
            Category Create Form
          </h3>
          <input
          onChange={(e)=>setName(e.target.value)}
            className="p-2 rounded-lg mt-10 w-full "
            placeholder=" Enter Category Name"
          />
          <div className="modal-action">
              <button onClick={HandleSubmit} className="btn btn-warning">Create</button>

            <form method="dialog" className=" space-x-5">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
