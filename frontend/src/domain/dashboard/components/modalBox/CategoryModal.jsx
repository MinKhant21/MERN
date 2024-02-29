import React, { useState } from "react";
import useCategory from "../../../../hooks/useCategory";
import { useNavigate } from "react-router-dom";

export default function CategoryModal() {
  const [name, setName] = useState("");
  let { message, Create } = useCategory();
  let navigate = useNavigate();

  const HandleSubmit = async () => {
    let data = await Create({ name });
    if(data.status = '200'){
      document.getElementById("my_modal_1").close()
    }else{
      
    }
  };
  return (
    <>
      <dialog id="my_modal_1" className=" modal">
        <div className="modal-box dark:bg-gray-800">
          <h3 className="font-bold  text-lg text-white">
            Category Create Form
          </h3>
          <input
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-lg mt-10 w-full "
            placeholder=" Enter Category Name"
          />
          <div className="modal-action">
            <button onClick={HandleSubmit} className="btn btn-warning">
              Create
            </button>

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
