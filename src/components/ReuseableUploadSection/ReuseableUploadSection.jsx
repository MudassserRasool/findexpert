import React from "react";
import Style from "./ReuseableUploadSection.module.css";
import { BsFillImageFill, BsFileEarmarkImage, BsMic } from "react-icons/bs";
import { HiOutlineVideoCamera } from 'react-icons/hi';



const ReuseableUploadSection = () => {
  return (
    <div>
      <div className={Style.uploadFileContainer}>
        <h1 className={Style.text}>Upload Image now</h1>
        <div className={Style.uploadBox}>
          <div className={Style.iconAndText}>
            <BsFileEarmarkImage size={25} className={Style.icon} color="#494848" />
            <p className={Style.text}>Upload Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseableUploadSection;
