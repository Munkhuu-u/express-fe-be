import React, { useState, useEffect } from "react";
import Content from "../components/Content.jsx";

export default function Home() {
  const BE_URL = "http://localhost:4001/add-user";
  const users_URL = "http://localhost:4001/users";
  const [stat, setStat] = useState("");
  const [users, setUsers] = useState();

  async function handleUsers() {
    // e.preventDefault();
    const FETCH_DATA = await fetch(users_URL);
    const FETCH_JSON = await FETCH_DATA.json();
    setUsers(FETCH_JSON);
  }

  useEffect(() => {
    handleUsers();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      userName: e.target.username.value,
      age: e.target.age.value,
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
    console.log(FETCH_JSON);
    // return { props: { FETCH_JSON } };
    // handleUsers();
    window.location.reload();
  }
  async function handlerDelete() {
    e.preventDefault();
    const data = {
      userName: e.target.username.value,
      age: e.target.age.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCH_DATA = await fetch("http://localhost:4001/udpate", options);
    const FETCH_JSON = await FETCH_DATA.text();
    setStat(FETCH_JSON);
    console.log(FETCH_JSON);
    // return { props: { FETCH_JSON } };
    // handleUsers();
    window.location.reload();
  }

  {
    console.log("users: ", users);
    if (users) {
      return (
        <div className="flex flex-col justify-center p-10 gap-10">
          {/* <form onSubmit={handleSubmit}>
            <label htmlFor="username" for="username">
              Username:
              <input
                id="username"
                name="username"
                placeholder="Username:"
                className="border-2 border-gray-700"
              />
            </label>
            <label htmlFor="age" for="age">
              Age:
              <input
                id="age"
                name="age"
                placeholder="Age:"
                className="border-2 border-gray-700"
                type="number"
              />
            </label>
            <input type="submit" value="Submit" />
          </form> */}
          <Content handleSubmit={handleSubmit} />
          <div>
            {users.users.map((e) => {
              console.log("e.userName: ", e.userName);
              return (
                <div className="flex flex-row">
                  <p>{e.userName}</p>
                  <button className="border-2" onClick={handlerDelete()}>
                    D
                  </button>
                  <button className="border-2">E</button>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" for="username">
              Username:
              <input
                id="username"
                name="username"
                placeholder="Username:"
                className="border-2 border-gray-700"
              />
            </label>
            <label htmlFor="age" for="age">
              Age:
              <input
                id="age"
                name="age"
                placeholder="Age:"
                className="border-2 border-gray-700"
                type="number"
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>{stat}</p>
        </div>
      );
    }
  }
}
