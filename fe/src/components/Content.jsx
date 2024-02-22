export default function Content({ handleSubmit }) {
  console.log("Content.jsx working");
  return (
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
  );
}
