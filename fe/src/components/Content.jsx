export default function Content({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
