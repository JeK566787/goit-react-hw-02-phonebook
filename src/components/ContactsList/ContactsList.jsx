export const ContactsList = ({ list, deleteToDo }) => {
  return (
    <ul>
      {list.map(({ number, text, id }) => (
        <li key={id}>
          {text}
          {number}
          <button type="button" onClick={() => deleteToDo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
