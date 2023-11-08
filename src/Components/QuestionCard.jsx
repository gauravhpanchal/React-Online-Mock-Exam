import Option from "./Option";
import { useState } from "react";

const QuestionCard = ({ question, options, ans, setScore }) => {
  const [show, setShow] = useState(false);
  const handleClick = (ele) => {
    setShow(!show);
    if (ele === ans) {
      setScore((s) => s + 1);
    }
  };
  return (
    <div className="question-card">
      {/* add question here */}
      <h3>{question}</h3>
      <div
        className="options"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        {options.map((el) => (
          <Option
            style={{ margin: "10px", padding: "10px" }}
            el={el}
            ans={ans}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="show-ans">
        <button onClick={handleClick}>{show ? "Hide Ans" : "Show Ans"}</button>
        {show ? <p style={{ color: "green" }}>{options[ans]}</p> : ""}
      </div>
    </div>
  );
};

export default QuestionCard;
