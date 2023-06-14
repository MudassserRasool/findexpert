import React from "react";
import Style from "./ReuseableServiceInformationItem.module.css";
import { BsCalendar3 } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

const ReuseableServiceInformationItem = () => {
  return (
    <div>
      {/* Start Book apointment-------------------------------------- */}
      <div className={Style.aligenLeftItemsAndRightArrowIcon}>
        {/* start left side of the item------------------------------------ */}
        <div className={Style.leftSide}>
          <h1 className={Style.itemsHeadingsText}>Appointment</h1>
          <div className={Style.iconAndTextRow}>
            <BsCalendar3 color="#e85353" size={17} />
            <p className={Style.textOfIconAligenment}>25th Dec - 7:30 AM</p>
          </div>
        </div>
        {/* end left side of the item------------------------------------ */}
        <FiChevronRight color="#a09e9e" size={18} />
      </div>
      {/* End Book apointment-------------------------------------- */}
    </div>
  );
};

export default ReuseableServiceInformationItem;
