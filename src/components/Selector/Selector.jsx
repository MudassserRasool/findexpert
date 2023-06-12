import React from "react";
import Style from "./Selector.module.css";
import { Select } from "@chakra-ui/react";

const Selector = () => {
  return (
    <div>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  );
};

export default Selector;
