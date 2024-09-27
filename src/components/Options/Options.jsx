import css from "./Options.module.css";

const array = ["good", "bad", "neutral"];
export default function Options({ updateFeedback, resetFeedback, total }) {
  return (
    <div className={css.options}>
      {array.map((elem) => {
        return (
          <button
            className={css.button}
            key={elem}
            onClick={() => updateFeedback(elem)}
          >
            {elem}
          </button>
        );
      })}
      {total > 0 && (
        <button className={css.resetBtn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
