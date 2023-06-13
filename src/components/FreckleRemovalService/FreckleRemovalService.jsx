import React from "react";
import Style from "./FreckleRemovalService.module.css";
import { FreckleRemovalServiceImage } from "../../assets";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CgNotes } from 'react-icons/cg';
import { SlNotebook } from 'react-icons/sl';



const FreckleRemovalService = () => {
  const [value, setvalue] = useState(1);

  const handelDecrement = () => {
    if (value > 0) {
      setvalue(value - 1);
    } else {
      setvalue(0);
    }
  };

  const handelIncrement = () => {
    setvalue(value + 1);
  };
  return (
    <div>
      <div className={Style.cardBody}>
        <div className={Style.contentBody}>
          {/* start image row header section----------------------------------- */}
          <div className={Style.imageAndHeadingRow}>
            <img
              src={FreckleRemovalServiceImage}
              alt="eror "
              className={Style.imgStyle}
            />

            <div className={Style.headingAndIncrement}>
              <h3 className={Style.frickelHeading}>Sunsport Frickel Removel</h3>

              {/* Start increment and decrement buttons------------------------------------ */}
              <div className={Style.buttonIncrementalAndDecremental}>
                <div
                  className={Style.decrementButton}
                  onClick={handelDecrement}
                >
                  <IoIosRemove
                    className={Style.decrementIcon}
                    color="#FFFFFF"
                  />
                </div>
                <h1 className={Style.buttonStatusText}>{value}</h1>
                <div
                  className={Style.incrementButton}
                  onClick={handelIncrement}
                >
                  <IoIosAdd className={Style.incrementIcon} color="#FFFFFF" />
                </div>
              </div>
              {/* End increment and decrement buttons------------------------------------ */}
            </div>
          </div>
          {/* end image row header section----------------------------------- */}

          {/* Start Content-------------------------------------- */}
          <div className={Style.lowerContentArea}>
            
            {/* Start Book apointment-------------------------------------- */}
            <div className={Style.aligenLeftItemsAndRightArrowIcon}>
              {/* start left side of the item------------------------------------ */}
              <div className={Style.leftSide}>
                <h1 className={Style.itemsHeadingsText}>Appointment</h1>
                <div className={Style.iconAndTextRow}>
                  <BsCalendar3 color="#e85353" size={17} />
                  <input type="date" className={Style.dateInput} />
                </div>
              </div>
              {/* end left side of the item------------------------------------ */}
              <FiChevronRight color="#a09e9e" size={18}/>
            </div>
            <hr className={Style.lineStyle}/>
            {/* End Book apointment-------------------------------------- */}

            
            
            {/* Start Address -------------------------------------- */}
            <div className={Style.aligenLeftItemsAndRightArrowIcon}>
              {/* start left side of the item------------------------------------ */}
              <div className={Style.leftSide}>
                <h1 className={Style.itemsHeadingsText}>Address</h1>
                <div className={Style.iconAndTextRow}>
                  <CiLocationOn color="#e85353" size={23} />
                  <p className={Style.itemsText}>London Clinic</p>
                </div>
              </div>
              {/* end left side of the item------------------------------------ */}
              <FiChevronRight color="#a09e9e" size={18}/>
            </div>
            <hr className={Style.lineStyle}/>
            {/* End Address -------------------------------------- */}


            
            
            {/* Start Notes -------------------------------------- */}
            <div className={Style.aligenLeftItemsAndRightArrowIcon}>
              {/* start left side of the item------------------------------------ */}
              <div className={Style.leftSide}>
                <h1 className={Style.itemsHeadingsText}>Notes</h1>
                <div className={Style.iconAndTextRow}>
                  <CgNotes color="#e85353" size={21} />
                  <p className={Style.itemsText}>London Clinic</p>
                </div>
              </div>
              {/* end left side of the item------------------------------------ */}
              <FiChevronRight color="#a09e9e" size={18}/>
            </div>
            <hr className={Style.lineStyle}/>
            {/* End Notes -------------------------------------- */}
            
            
            {/* Start Forms -------------------------------------- */}
            <div className={Style.aligenLeftItemsAndRightArrowIcon}>
              {/* start left side of the item------------------------------------ */}
              <div className={Style.leftSide}>
                <h1 className={Style.itemsHeadingsText}>Forms</h1>
                <div className={Style.iconAndTextRow}>
                  <SlNotebook color="#e85353" size={21} />
                  <p className={Style.itemsText}>Forms-1</p>
                </div>
              </div>
              {/* end left side of the item------------------------------------ */}
              <FiChevronRight color="#a09e9e" size={18}/>
            </div>
            <hr className={Style.lineStyle}/>
            {/* End Forms -------------------------------------- */}


          </div>
          {/* End Content-------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default FreckleRemovalService;
