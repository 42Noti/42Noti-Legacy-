import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const MyPageButton = () => {
    return (
      <Link href="/mypage" style={{ textDecoration: "none" }}>
        <IconButton>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Link>
    );
  };

  const SideBarButton = () => {
    return (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    );
  };

  const MainLogo = () => {
    return (
      <Typography
        variant="h6"
        component="h1"
        color="textSecondary"
        align="center"
        sx={{ flexGrow: 1 }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          42Manager
        </Link>
      </Typography>
    );
  };

  const setLink = (text) => {
    if (text === "홈") return "/";
    else if (text === "To-Do") return "/todo-list";
    else if (text === "마이페이지") return "/mypage";
    else if (text === "42 Intra") return "https://profile.intra.42.fr/";
    else if (text === "Gather")
      return "https://app.gather.town/app/Zq3peLuvz5isVQ0f/42seoul";
    else if (text === "로그아웃") return "/logout";
  };

  const setIcon = (text) => {
    if (text === "홈") return <HomeIcon />;
    else if (text === "To-Do") return <EventNoteIcon />;
    else if (text === "마이페이지") return <PersonIcon />;
    else if (text === "42 Intra") return "42.png";
    else if (text === "Gather") return "gather.png";
  };

  const PageList = ({ list }) => (
    <List>
      {list.map((text) => (
        <Link
          href={setLink(text)}
          style={{ color: "black", textDecoration: "none" }}
          key={text}
        >
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {text === "로그아웃" ? (
                ""
              ) : (
                <ListItemIcon>{setIcon(text)}</ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );

  const CustomPageList = () => (
    <List>
      {["42 Intra", "Gather"].map((text, index) => (
        <Link
          href={setLink(text)}
          target="_blank"
          style={{ color: "black", textDecoration: "none" }}
          key={text}
        >
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <div style={{ minWidth: 56 }}>
                <img
                  src={setIcon(text)}
                  style={{ width: 30, height: 30, marginTop: 7 }}
                />
              </div>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <React.Fragment key="left">
      {/* global-container = header 10% + 페이지-container 90% */}
      <Box sx={{ minWidth: 320, height: "10%" }}>
        <AppBar
          position="static"
          color="default"
          sx={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: "100%",
          }}
        >
          <Toolbar>
            <SideBarButton />
            <MainLogo />
            <MyPageButton />
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <PageList list={["홈", "To-Do", "마이페이지"]} />
          <Divider />
          <CustomPageList />
          <Divider />
          <PageList list={["로그아웃"]} />
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
