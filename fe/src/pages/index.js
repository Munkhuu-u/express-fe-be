import React, { useState, useEffect } from "react";
import Content from "../components/Content.jsx";
import Edit from "@/components/Edit.jsx";
import Users from "@/components/Users.jsx";

export default function Home() {
  const BE_URL = "http://localhost:4001/add-user";
  const users_URL = "http://localhost:4001/users";
  const delete_URL = "http://localhost:4001/delete-user";
  const edit_URL = "http://localhost:4001/edit-user";

  const [stat, setStat] = useState("");
  const [usersState, setUsers] = useState("");
  const [showEdit, setShowEdit] = useState([false, ""]);
  const [showSubmit, setShowSubmit] = useState(false);
  const [changeAble, setChangeAble] = useState(false);

  //to see users
  async function handleUsers() {
    const FETCH_USER_DATA = await fetch(users_URL);
    const FETCH_USER_JSON = await FETCH_USER_DATA.json();
    setUsers(FETCH_USER_JSON);
  }
  //to add users
  async function handleSubmit(e) {
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
  }
  //to delete user
  async function handleDelete(e) {
    console.log("handleDelete working");
    const data = {
      id: e.target.id,
    };
    console.log("e in handleDelete: ", e.target);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCH_DATA = await fetch(delete_URL, options);
  }

  //to edit user
  async function handleEdit(e) {
    e.preventDefault();
    setShowSubmit(!showSubmit);

    const data = {
      id: e.target.editId.value,
      userName: e.target.editName.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCH_DATA = await fetch(edit_URL, options);
    const FETCH_JSON = await FETCH_DATA.text();
    setStat(FETCH_JSON);
  }

  useEffect(() => {
    handleUsers();
  }, []);

  {
    if (usersState) {
      return (
        <div className="flex flex-col justify-center p-10 gap-10">
          <Users
            usersState={usersState}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            changeAble={changeAble}
            setchangeAble={setChangeAble}
            showSubmit={showSubmit}
            setShowSubmit={setShowSubmit}
          />
          <Content handleSubmit={handleSubmit} />
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  }
}
