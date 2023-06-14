import React from "react";
import Style from "./ServiceInformation.module.css";
import { FreckleRemovalServiceImage } from "../../assets";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import { SlNotebook } from "react-icons/sl";
import ReuseableServiceInformationItem from "../ReuseableServiceInformationItem/ReuseableServiceInformationItem";

const ServiceInformation = () => {
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
            <ReuseableServiceInformationItem />
            <hr className={Style.lineStyle} />
          </div>

          {/* End Content-------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default ServiceInformation;
