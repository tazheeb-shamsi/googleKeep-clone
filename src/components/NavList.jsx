import * as React from "react";
import { Link } from 'react-router-dom';
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


//! Icons only
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete
} from '@mui/icons-material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


const NavList = ({ open }) => {

  const navList = [
    { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
    { id: 2, name: 'Reminders', icon: <NotificationsNoneOutlinedIcon />, route: '/reminders' },
    { id: 3, name: 'Edit labels', icon: <EditOutlinedIcon />, route: '/editLabels' },
    { id: 4, name: 'Archives', icon: <Archive />, route: '/archive' },
    { id: 5, name: 'Trash', icon: <Delete />, route: '/trash' },
  ]

  return (
    <List>
      {
        navList.map(list => (
          <ListItem button key={list.id}>
            <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
            <ListItemIcon style={{ alignItems: 'center' }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
            </Link>
          </ListItem>
        ))
      }
    </List>
  )
}

export default NavList;