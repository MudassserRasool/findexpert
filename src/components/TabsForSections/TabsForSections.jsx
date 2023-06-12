import React from "react";
import Style from "./TabsForSections.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabsForSections = () => {
  return (
    <div>
      <Tabs variant="unstyled">
        <TabList>
          <div className={Style.setBorder}>
            <Tab
              _selected={{
                color: "#DB0406",
                bg: "#efb6b6",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                // border: "0.5px solid lightgray",
              }}
            >
              <p className={Style.tabItemsText}>Quetion Builder</p>
            </Tab>
          </div>
          <div className={Style.setBorder}>
            <Tab
              _selected={{
                color: "#DB0406",
                bg: "#efb6b6",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              <p className={Style.tabItemsText}>Form Builder</p>
            </Tab>
          </div>
          <div className={Style.setBorder}>
            <Tab
              _selected={{
                color: "#DB0406",
                bg: "#efb6b6",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
             
              <p className={Style.tabItemsText}>All Forms</p>
            </Tab>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Quetion Builder</p>
          </TabPanel>
          <TabPanel>
            <p>Form Builder</p>
          </TabPanel>
          <TabPanel>
            <p>All Forms</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabsForSections;
