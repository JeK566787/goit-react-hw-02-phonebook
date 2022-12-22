export const Filter = ({ filterInputChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={e => filterInputChange(e.target.value)} />
    </>
  );
};
