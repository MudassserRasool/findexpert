import React from "react";
import Style from "./ReuseableInputSelector.module.css";

const ReuseableInputSelector = () => {
  return (
    <div>
      <div className={Style.questionAnswerBox}>
        <p className={Style.questionText}>How Long Have You Had These Sports</p>
        <div className={Style.selectorRow}>
          <div>
         
            <input
              type="radio"
              className={Style.radioInputAnswer} /* Corrected class name */
              name="radionInputAnswer"
              value="HTML"
            />
             <span className={Style.selectorName}>Yes</span>
          </div>

          <div className={Style.radioInputAnswerRightSide}>
            
            
            <input
              type="radio"
              className={Style.radioInputAnswer}
              name="radionInputAnswer"
              value="HTML"
            />
            <span className={Style.selectorName}>No</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseableInputSelector;
