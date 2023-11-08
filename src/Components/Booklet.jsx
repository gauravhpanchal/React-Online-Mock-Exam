import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

const Booklet = () => {
  const [start, setStart] = useState(true);
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setStart(!start);
    const data = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
    );
    const json = await data.json();
    setData(json.data);
    // console.log(json);
  };

  // () => setStart(!start)

  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}
      {start ? (
        <div className="questions-container">
          {/* Append score and question card components here */}
          <button onClick={() => setStart(!start)}>End Exam</button>
          <h3>Score:{score}</h3>
          {data?.map((el) => (
            <QuestionCard
              key={el.id}
              question={el.question}
              options={el.options}
              ans={el.correctOptionIndex}
              setScore={setScore}
            />
          ))}
        </div>
      ) : (
        <div className="welcome-div">
          <h1>To begin the exam, click on the 'Start Exam' button below</h1>
          <button onClick={fetchData}>Start Exam</button>
        </div>
      )}
    </div>
  );
};

export default Booklet;
