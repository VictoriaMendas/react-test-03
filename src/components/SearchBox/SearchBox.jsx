export default function SearchBox({ filter, onChangeFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" onChange={onChangeFilter} value={filter} />
      </label>
    </div>
  );
}
