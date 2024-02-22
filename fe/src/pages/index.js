import React, { useState, useEffect } from "react";
import Content from "../components/Content.jsx";
import Edit from "@/components/Edit.jsx";

export default function Home() {
  const BE_URL = "http://localhost:4001/add-user";
  const users_URL = "http://localhost:4001/users";
  const delete_URL = "http://localhost:4001/delete-user";
  const edit_URL = "http://localhost:4001/edit-user";
  const [stat, setStat] = useState("");
  const [usersState, setUsers] = useState("");
  const [showEdit, setShowEdit] = useState([false, ""]);

  //to see users
  async function handleUsers() {
    const FETCH_USER_DATA = await fetch(users_URL);
    const FETCH_USER_JSON = await FETCH_USER_DATA.json();
    setUsers(FETCH_USER_JSON);
  }
  //to add users
  async function handleSubmit(e) {
    handleUsers();
    const data = {
      id: usersState.users[usersState.users.length - 1].id + 1,
      userName: e.target.username.value,
      age: Number(e.target.age.value),
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCH_DATA = await fetch(BE_URL, options);
    const FETCH_JSON = await FETCH_DATA.text();
    setStat(FETCH_JSON);
    // window.location.reload();
  }
  //to delete user
  async function handleDelete(e) {
    const data = {
      id: e.target.id,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCH_DATA = await fetch(delete_URL, options);
    // const FETCH_JSON = await FETCH_DATA.text();
    // setStat(FETCH_JSON);
    // window.location.reload();
  }
  //to edit user
  async function handleEdit(e) {
    // e.preventDefault();
    console.log("Edit handler working");
    // console.log(e.target)

    // const data = {
    //   id: e.target.id,
    // };

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // };
    // const FETCH_DATA = await fetch(edit_URL, options);
    // const FETCH_JSON = await FETCH_DATA.text();
    // setStat(FETCH_JSON);
    // window.location.reload();
  }

  useEffect(() => {
    handleUsers();
  }, []);

  {
    if (usersState) {
      console.log("edit status: ", showEdit[0]);
      return (
        <div className="flex flex-col justify-center p-10 gap-10">
          <Content handleSubmit={handleSubmit} />
          <div className="flex flex-col gap-2">
            {usersState.users.map((e) => {
              return (
                <div className="flex flex-row w-80 justify-end gap-10">
                  <p>{e.userName}</p>
                  <button
                    className="border-2 p-2"
                    id={e.id}
                    onClick={(e) => {
                      console.log("e.target.id: ", e.target.id);
                      console.log("Delete button pushed");
                      handleDelete(e);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="border-2  p-2"
                    id={e.id}
                    onClick={(e) => {
                      console.log("e.target.id: ", e.target.id);
                      console.log("Edit button pushed");
                      // handleEdit(e);
                      // <Edit id={e.target.id} handleEdit={handleEdit}/>
                      setShowEdit([!showEdit[0], e.target.id]);
                      console.log(showEdit);
                    }}
                  >
                    Edit
                  </button>
                </div>
              );
            })}
            {/* <div className={`${showEdit[0] ? "block" : "hidden"}`}>
              <Edit id={showEdit[1]} handleEdit={handleEdit} />
              {console.log("showEdit: ", showEdit)} 
            </div> */}
            <div className="border-2 p-10">
              <p>Edit div</p>
              <form onSubmit={() => console.log("Edit onSubmit working")}>
                <label htmlFor="editName" for="editName">
                  <input
                    id="editName"
                    name="editName"
                    placeholder="Enter new name"
                    className="border-2 border-gray-700"
                  />
                </label>
                <label htmlFor="editId" for="editId">
                  <input
                    id="editId"
                    name="editId"
                    placeholder="Enter person's id"
                    className="border-2 border-gray-700"
                    value={showEdit[1]}
                  />
                </label>
                <input type="submit" value="Submit" />
                {/* <button onClick={() => console.log("hello")}>helloo</button> */}
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Content handleSubmit={handleSubmit} />
        </div>
      );
    }
  }
}
