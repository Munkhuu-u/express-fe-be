import React, { useState, useEffect } from "react";
import IconEdit from "../icons/IconEdit";
import IconDelete from "../icons/IconDelete";
// import styles from "../styles/user.module.css";
// import styles from "../pages/styles/user.module.css";

export const Users = ({
  usersState,
  showSubmit,
  setShowSubmit,
  setShowEdit,
  handleEdit,
  handleDelete,
  changeAble,
  setchangeAble,
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState("block");
  return (
    <div className="flex flex-col gap-2 border-gray-300 border-2 rounded-2xl p-5">
      {usersState.users.map((e) => {
        return (
          <div>
            <form
              className="flex flex-row gap-3 p-2 items-center"
              onSubmit={handleEdit}
            >
              <label htmlFor="editName" for="editName" className="relative">
                <input
                  id="editName"
                  name="editName"
                  // placeholder={e.userName}
                  // value={e.userName}
                  className={`border-2 border-gray-200 rounded-xl px-3 py-1`}
                  disabled={changeAble ? "" : "disable"}
                  onFocus={() => {
                    setShowPlaceholder("hidden");
                  }}
                  onBlur={() => {
                    setShowPlaceholder("block");
                  }}
                />
                <p className={`absolute top-[5px] left-3 ${showPlaceholder}`}>
                  {e.userName}
                </p>
              </label>
              <button
                // className="border-2 p-2 border-gray-600"
                className="text-white bg-blue-700 py-1 px-1 rounded-lg hover:bg-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSubmit(!showSubmit);
                  setchangeAble(!changeAble);
                  console.log("edit button pushed", showSubmit);
                }}
              >
                <IconEdit />
              </button>
              <button
                // className="border-2 p-2 border-gray-600 bg-blue-300"
                className="text-white bg-blue-700 py-1 px-1 rounded-lg hover:bg-gray-700"
                id={e.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(e);
                  console.log("Delete button pushed");
                }}
              >
                <IconDelete />
              </button>
              <label htmlFor="editId" for="editId" className="hidden">
                <input
                  id="editId"
                  name="editId"
                  value={e.id}
                  placeholder="Enter person's id"
                  className="border-2 border-gray-700"
                />
              </label>
              <input
                className={showSubmit ? "block" : "hidden"}
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
