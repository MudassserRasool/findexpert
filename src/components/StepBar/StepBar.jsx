import React from "react";
import Style from "./StepBar.module.css";
import { AiOutlineCheck } from "react-icons/ai";

const StepBar = () => {
  return (
    <div>
      <div className={Style.stepCirclesRow}>
        {/* start Red Field circle-------------------------------- */}
        <div className={Style.circleBoxRed}>
          <AiOutlineCheck
            color="#FFFFFF"
            size={19}
            className={Style.cirlcleIconArrangement}
          />
        </div>
        {/* end Red Field circle-------------------------------- */}

        {/* start line ----------------------------------------- */}
        <hr className={Style.stepBarRedLine} />
        {/* end line ----------------------------------------- */}

        {/* start White Un-Field circle-------------------------------- */}
        <div className={Style.circleBoxWhite}>
          <p className={Style.stepBarText}>2</p>
        </div>
        {/* end White Un-Field circle-------------------------------- */}
      </div>
    </div>
  );
};

export default StepBar;
