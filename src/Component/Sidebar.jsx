import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  const sideBar = [
    {
      text: "Dashboard",
      link: "/",
    },
    {
      text: "Order List",
      link: "dashboard/order-list",
    },
    {
      text: "Order Detail",
      link: "dashboard/order-detail",
    },
    {
      text: "Customer",
      link: "dashboard/customer",
    },
    {
      text: "Analytics",
      link: "dashboard/analytics",
    },
    {
      text: "Reviews",
      link: "dashboard/reviews",
    },
    {
      text: "Foods",
      link: "dashboard/food",
    },
    {
      text: "Food Detail",
      link: "dashboard/food-detail",
    },
    {
      text: "Calender",
      link: "dashboard/calender",
    },
    {
      text: "Chat",
      link: "dashboard/chat",
    },
    {
      text: "Wallet",
      link: "dashboard/wallet",
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {sideBar.map((text, index) => (
              <NavLink
                to={text.link}
                className=""
                key={index}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bolder" : "",
                    backgroundColor: isActive ? "blue" : "inherit",
                    color: isActive ? "black" : "black",
                    transition : isActive ? "0.5s" : "all",
                    // overflow: isActive ? "auto" : "hidden",
                    // viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <ListItem key={index} disablePadding>
                  <ListItemButton>{text.text}</ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
