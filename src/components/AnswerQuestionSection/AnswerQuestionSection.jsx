import React from "react";
import Style from "./AnswerQuestionSection.module.css";
import ReuseableQuestion from "../ReuseableQuestion/ReuseableQuestion";
import ReuseableInputSelector from "../ReuseableInputSelector/ReuseableInputSelector";
import ReuseableUploadSection from "../ReuseableUploadSection/ReuseableUploadSection";

const AnswerQuestionSection = () => {
  return (
    <div>
      <div className={Style.questionAnswerSection}>
        <div className={Style.colummnForQuestions}>
          <h1 className={Style.answerQuestionHeading}>Answer Following Questions</h1>
          <ReuseableQuestion/>
          <ReuseableQuestion/>
          <ReuseableInputSelector/>
          <ReuseableUploadSection/>
          <ReuseableUploadSection/>
          <ReuseableUploadSection/>
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestionSection;
