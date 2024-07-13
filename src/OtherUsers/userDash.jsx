import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  FaBars,
  FaGraduationCap,
  FaHandshake,
  FaHome,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import AdminNav from "../components/dashboardNav";
import School from "../components/school";
import Acts from "../components/activities";
import { useNavigate } from "react-router-dom";
import Lessons from "./lessons";
import Groups from "./next";
import Group from "./Groups";
import { MdList } from "react-icons/md";

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

export default function UserDash() {
  const [tabValue, setTabValue] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AdminNav />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          maxHeight: "100vh",
          overflowY: "hidden",
        }}
      >
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: 80,
            left: 10,
            display: { xs: "block", md: "none" },
          }}
        >
          <FaBars />
        </IconButton>

        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          <Box sx={{ p: 4, overflowY: "auto", height: "100%" }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              <img
                src="./logo.png"
                alt="logo"
                className="w-[100px] flex-col items-center"
              />
              <h1 className="font-bold text-#005C59-700 mx-5">SDA</h1>
            </Typography>
            <List>
              <ListItem
                button
                onClick={() => {
                  setTabValue(0);
                  setOpen(false);
                }}
              >
                <ListItemText primary="Ahabanza" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setTabValue(1);
                  setOpen(false);
                }}
              >
                <ListItemText primary="Amasomo" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setTabValue(2);
                  setOpen(false);
                }}
              >
                <ListItemText primary="Ubwitabire" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setTabValue(3);
                  setOpen(false);
                }}
              >
                <ListItemText primary="Amatsinda" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setTabValue(4);
                  setOpen(false);
                }}
              >
                <ListItemText primary="Liste y'ubwitabire" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Sohoka" onClick={() => navigate("/")} />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box
          sx={{
            flex: 1,
            bgcolor: "background.paper",
            p: 4,
            overflowY: "auto",
            height: "100%",
            maxHeight: "100vh",
            display: { xs: "none", md: "block" },
          }}
        >
          <Tabs
            orientation="vertical"
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            aria-label="Update Data Tabs"
            sx={{
              mb: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&.MuiTab-root": {
                mb: 10,
              },
            }}
          >
            <Tab
              label={
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <FaHome size={30} style={{ marginRight: 8 }} />
                  Ahabanza&nbsp;&nbsp;
                </span>
              }
              sx={{
                bgcolor: tabValue === 0 ? "#ebeced" : "#005C59",
                color: "white",
                "&:hover": {
                  bgcolor: "#005C59",
                  color: "white",
                },
                my: 3,
                borderRadius: 3,
              }}
            />
            <Tab
              label={
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <FaGraduationCap size={30} style={{ marginRight: 8 }} />
                  Amasomo&nbsp;&nbsp;
                </span>
              }
              sx={{
                bgcolor: tabValue === 1 ? "#ebeced" : "#005C59",
                color: "white",
                "&:hover": {
                  bgcolor: "#005C59",
                  color: "white",
                },
                my: 3,
                borderRadius: 3,
              }}
            />
            <Tab
              label={
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <FaUsers size={30} style={{ marginRight: 8 }} />
                  Ubwitabire&nbsp;&nbsp;
                </span>
              }
              sx={{
                bgcolor: tabValue === 2 ? "#ebeced" : "#005C59",
                color: "white",
                "&:hover": {
                  bgcolor: "#005C59",
                  color: "white",
                },
                my: 3,
                borderRadius: 3,
              }}
            />
            <Tab
              label={
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <FaUsers size={30} style={{ marginRight: 8 }} />
                  Amatsinda&nbsp;&nbsp;
                </span>
              }
              sx={{
                bgcolor: tabValue === 3 ? "#ebeced" : "#005C59",
                color: "white",
                "&:hover": {
                  bgcolor: "#005C59",
                  color: "white",
                },
                my: 3,
                borderRadius: 3,
              }}
            />
            <Tab
              label={
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <MdList size={30} style={{ marginRight: 8 }} />
                  Liste y&apos;ubwitabire&nbsp;&nbsp;
                </span>
              }
              sx={{
                bgcolor: tabValue === 4 ? "#ebeced" : "#005C59",
                color: "white",
                "&:hover": {
                  bgcolor: "#005C59",
                  color: "white",
                },
                my: 3,
                borderRadius: 3,
              }}
            />
 
            <span
              onClick={() => navigate("/")}
              className="flex items-center text-center cursor-pointer rounded-md p-2 w-48 text-white bg-[#005C59]"
            >
              <button className=" p-3 rounded-md text-white text-center">
                Sohoka
              </button>
              <FaSignOutAlt />
            </span>
          </Tabs>
        </Box>
        <Box
          sx={{
            flex: 3,
            p: 4,
            overflowY: "auto",
            height: "100%",
            maxHeight: "100vh",
          }}
        >
          <TabPanel value={tabValue} index={0} className="items-center">
            <div>
              <div className="flex flex-col md:flex-row">
                <div className="p-4 bg-gray-200 w-80 border-t-2 border-[#005C59] items-center text-center object-center flex flex-col py-24 mr-12">
                  <h1 className="font-bold">Urakaza neza mu rubuga rwacu</h1>
                  <FaHandshake size={40} />
                  <h1>umukuru w&apos;itorero</h1>
                  <img src="./Hellp.png" alt="hello" />
                </div>
                <div className="">
                  <div className="p-4 bg-gray-200 w-80 md:w-[30rem] border-t-2 border-[#005C59] items-center text-center object-center flex flex-col py-6 space-y-5 mr-12">
                    <h1 className="font-bold">
                      Raporo y&apos;ishuri ry&apos;isabato
                    </h1>
                    <h1>
                      Soma byinshi bitandukanye bijyanye n’ uburyo ishuri
                      ry’isabato ryagenze muri icyi cyumweru
                    </h1>
                    <button className="bg-[#005C59] text-white font-bold p-2 px-10 rounded-md">
                      Sura
                    </button>
                  </div>
                  <div className="p-4 my-4 bg-gray-200 w-80 md:w-[30rem] border-t-2 border-[#005C59] items-center text-center object-center flex flex-col py-6 space-y-5 mr-12">
                    <h1 className="font-bold">Raporo y&apos;Ubwitabire</h1>
                    <h1>
                      Soma byinshi bitandukanye bijyanye n’ uburyo ishuri
                      ry’isabato ryagenze muri icyi cyumweru
                    </h1>
                    <button className="bg-[#005C59] text-white font-bold p-2 px-10 rounded-md">
                      Sura
                    </button>
                  </div>
                </div>
              </div>
              <School />
            </div>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Lessons />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <School />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <Groups />
          </TabPanel>
          <TabPanel value={tabValue} index={4}>
            <Group />
          </TabPanel>
          <TabPanel value={tabValue} index={5}>
            <Acts />
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
}
