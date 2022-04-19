import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import {Avatar } from "@mui/material"
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="Facebookd.png" alt="Facbook logo" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large"/>
        </div>

        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large"/>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Something</h4>
          <IconButton>
            <AddIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>


        </div>
      </div>
    </div>
  );
};

export default Header;
