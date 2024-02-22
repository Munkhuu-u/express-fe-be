export default function Edit({ handleEdit, id }) {
  return (
    <div className="border-2 p-10">
      <p>Edit div</p>
      <form onSubmit={() => console.log("heloo")}>
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
            value={id}
          />
        </label>
        <input type="submit" value="Edit" />
        <button onClick={() => console.log("hello")}>helloo</button>
      </form>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="username" for="username">
    //     Username:
    //     <input
    //       id="username"
    //       name="username"
    //       placeholder="Username:"
    //       className="border-2 border-gray-700"
    //     />
    //   </label>
    //   <label htmlFor="age" for="age">
    //     Age:
    //     <input
    //       id="age"
    //       name="age"
    //       placeholder="Age:"
    //       className="border-2 border-gray-700"
    //       type="number"
    //     />
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
  );
}
