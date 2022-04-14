import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import device from '../../../img/Group.png'
import gas from '../../../img/gas.png'
import notification from '../../../img/notification.png'

import user from '../../../img/User.png'
import { NavLink } from 'react-router-dom';
export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader">
      <NavLink to='devise'>
        <ListItemButton>
          <ListItemIcon>
            <img src={device} />
          </ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItemButton>
      </NavLink>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <img src={user} />
        </ListItemIcon>
        <ListItemText primary="Permission" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Role" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItemButton>
        </List>
      </Collapse>
      <NavLink to='gas'>
        <ListItemButton>
          <ListItemIcon>
            <img src={gas} />
          </ListItemIcon>
          <ListItemText primary="Gas station" />
        </ListItemButton>
      </NavLink>
      {/* <NavLink to='/notification'> */}
      <ListItemButton>
        <ListItemIcon>
          <img src={notification} />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItemButton>
      {/* </NavLink> */}
    </List>
  );
}