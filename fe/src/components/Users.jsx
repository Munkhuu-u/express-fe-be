import React, { useState, useEffect } from "react";
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
  console.log("changeAble: ", changeAble);
  return (
    <div className="flex flex-col gap-2 border-red-300 border-2 p-5">
      {usersState.users.map((e) => {
        // console.log("e in user component: ", e);
        return (
          <div className="flex flex-row w-80 justify-end gap-10" key={e.id}>
            <form className="flex flex-row gap-1 p-2" onSubmit={handleEdit}>
              <label htmlFor="editName" for="editName">
                <input
                  id="editName"
                  name="editName"
                  placeholder={e.userName}
                  className={`border-2 border-gray-700`}
                  disabled={changeAble ? "" : "disable"}
                />
              </label>
              <button
                className="border-2 p-2 border-red-600"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSubmit(!showSubmit);
                  setchangeAble(!changeAble);
                  console.log("edit button pushed", showSubmit);
                }}
              >
                Edit
              </button>
              <button
                className="border-2 p-2 border-red-600"
                id={e.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(e);
                  console.log("Delete button pushed");
                }}
              >
                Delete
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
