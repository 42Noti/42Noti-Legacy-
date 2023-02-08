import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
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
  const [sidebar, setSidebar] = React.useState(false);

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

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["홈", "로그인", "To-do", "마이페이지"].map((text, index) => (
          <Link
            href="/"
            style={{ color: "black", textDecoration: "none" }}
            key={text}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebar(open);
  };

  return (
    <React.Fragment key="left">
      <Box sx={{ flexGrow: 1, minWidth: 650 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <SideBarButton />
            <MainLogo />
            <MyPageButton />
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={sidebar} onClose={toggleDrawer(false)}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {list()}
      </Drawer>
    </React.Fragment>
  );
}
