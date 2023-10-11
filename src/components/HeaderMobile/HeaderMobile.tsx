import React, { FC, useState } from "react";
import styles from "./HeaderMobile.module.css";
import navigationLinks from "../../data/headerNav";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Button, Divider, Toolbar } from "@mui/material";

interface HeaderMobileProps {
	setSearch: Function
}

const HeaderMobile: FC<HeaderMobileProps> = (props) => {
    const [isNavOpen, setNav] = useState<boolean>(false);

    return (
        <AppBar position="relative" className={styles.HeaderMobile}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    onClick={() => {
                        setNav(true);
                    }}
                >
                    <MenuIcon></MenuIcon>
                </IconButton>
                <Drawer
                    disableScrollLock={true}
                    anchor="left"
                    open={isNavOpen}
                    sx={{
                        width: "40vw",
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        onClick={() => {
                            setNav(false);
                        }}
                    >
                        <CloseIcon></CloseIcon>
                    </IconButton>

                    <Divider
                        sx={{
                            marginBottom: "2vh",
                        }}
                    ></Divider>
                    {navigationLinks.map((navEl, index) => {
                        return (
                            <Button
                                key={"navLink-" + index}
                                variant="text"
                                sx={{
                                    justifyContent: "start",
                                    color: "#333333",
                                    marginRight: "10vw",
									fontFamily: "AvertaRegular"
                                }}
                            >
                                {navEl.label}
                            </Button>
                        );
                    })}
                </Drawer>
                <p className={styles.Logo}>LOGO</p>
                <div>
                    <IconButton
                        size="large"
                        edge="start"
                        onClick={() => {
							props.setSearch(true)
                        }}
                    >
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "#f0be14",
                            color: "#333333",
                            borderRadius: "0px",
                            fontFamily: "AvertaRegular",
                            textTransform: "none",
                        }}
                    >
                        Login
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderMobile;
