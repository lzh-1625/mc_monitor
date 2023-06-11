import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { NavLink, Outlet} from "react-router-dom";
import background from "./../img/wood.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
const routerMap=new Map(
  [
    ["主页","home"]
    ,["分类","aaa"]
  ]
)


export default function Home() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const onClick = () => {
    setState({ left: true });
  };
  const itemClick=(e)=>{
    console.log(e.target.innerText)
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List onClick={itemClick}>
        {["主页", "分类", "Send email", "Drafts"].map((text, index) => (
          <NavLink to={routerMap.get(text)} style={{ "text-decoration":"none","color":"black"}}>  
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root} style={{"backgroundImage":`url(${background})`,"position": "absolute","height":"100%","width":"100%"}}> 
      <AppBar position="static" color="">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={onClick} />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
          <Button color="inherit" style={{ marginLeft: "auto" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={"left"}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Outlet/>
    </div>
  );
}