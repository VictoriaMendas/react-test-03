import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const dataLs = localStorage.getItem("feedBack");

    if (!dataLs) {
      return JSON.parse(dataLs);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    localStorage.setItem("feedBack", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const positive = Math.round((feedback.good / total) * 100);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={total}
        resetFeedback={resetFeedback}
      />
      {total > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
export default App;
