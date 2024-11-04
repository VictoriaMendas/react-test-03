import css from "./SearchBox.module.css";

export default function SearchBox({ filter, changeFilter }) {
  return (
    <div>
      <label className={css.label}>
        Find contact by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </div>
  );
}
