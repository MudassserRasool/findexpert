import React from "react";
import Style from "./ReuseableQuestion.module.css";

const ReuseableQuestion = () => {
  return (
    <div>
      <div className={Style.questionAnswerBox}>
        <p className={Style.questionText}>How Log Have You Had TheseSports</p>
        <input type="text" className={Style.answerInput} />
      </div>
    </div>
  );
};

export default ReuseableQuestion;
