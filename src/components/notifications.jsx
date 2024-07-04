import { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { FaBullhorn } from "react-icons/fa";

function TabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`update-tabpanel-${index}`}
      aria-labelledby={`update-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const NotificationTabs = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box className="w-full max-w-3xl mx-auto mt-8 px-4">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <div className="mb-8">
            <div className="flex items-center space-x-5 mb-4">
              <FaBullhorn className="text-3xl text-green-900" />
              <h1 className="text-green-900 text-2xl font-bold">Amatangazo</h1>
            </div>
            <Tabs
              value={tabValue}
              onChange={(e, newValue) => setTabValue(newValue)}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              className="border-b border-gray-200"
            >
              <Tab label="Yose" />
              <Tab label="Amashya" />
              <Tab label="Atarasomwe" />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
              <div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Sun 25/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Sun 25/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Sun 25/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Mon 2/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Mon 2/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Mon 2/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Sat 22/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Sat 22/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
                <div className="flex bg-gray-100 p-3 rounded-md my-3">
                  <h1 className="mr-2">Sat 22/2</h1>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h1>
                </div>
              </div>
            </TabPanel>
            <div className="p-2 border-2 border-green-900 justify-between flex flex-col sm:flex-row mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="border border-green-900 p-2 rounded-md font-bold bg-green-900 text-white">
                Ahabanza
              </button>
              <button className="border border-green-900 p-2 rounded-md font-bold">
                1
              </button>
              <button className="border border-green-900 p-2 rounded-md font-bold">
                2
              </button>
              <button className="border border-green-900 p-2 rounded-md font-bold">
                3
              </button>
              <button className="border border-green-900 p-2 rounded-md font-bold">
                4
              </button>
              <button className="border border-green-900 p-2 rounded-md font-bold">
                5
              </button>
              <button className="border border-green-900 p-2 rounded-md font-bold bg-green-900 text-white">
                Ahasoza
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white border p-5 text-center m-3 max-w-lg w-full shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-5">Tanga Irishya</h1>
          <input
            type="text"
            placeholder="Andika umutwe"
            className="border border-dotted outline-none border-green-900 rounded-md w-full mb-4 p-2"
          />
          <textarea
            placeholder="Andika itangazo"
            className="border border-dotted outline-none border-green-900 rounded-md w-full mb-4 p-2 h-32"
          ></textarea>
          <button className="border p-2 px-5 rounded-md bg-[#C99A2D] text-white hover:bg-[#b08a25] transition-colors">
            Ohereza
          </button>
        </div>
      </div>
    </Box>
  );
};

export default NotificationTabs;
