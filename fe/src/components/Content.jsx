export default function Content({ handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row gap-2 justify-center border-2 rounded-3xl border-gray-200 p-10 w-fit"
    >
      <label htmlFor="username" for="username">
        <input
          id="username"
          name="username"
          placeholder="Username:"
          className="border-2 border-blue-700 rounded-md p-1"
        />
      </label>
      <label htmlFor="age" for="age">
        <input
          id="age"
          name="age"
          placeholder="Age:"
          className="border-2 border-blue-700 rounded-md p-1"
          type="number"
        />
      </label>
      <input
        type="submit"
        value="ADD"
        className="text-white bg-blue-700 py-1 px-2 rounded-md"
      />
    </form>
  );
}
