import { useEffect, useState } from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRightOutlined } from "@mui/icons-material";

import SidebarThoughts from "../../assets/sidebar-thoughts.png";
import SidebarHome from "../../assets/sidebar-home.png";
import SidebarMessages from "../../assets/sidebar-message.png";
import SidebarTasks from "../../assets/sidebar-tasks.png";
import SidebarMembers from "../../assets/sidebar-members.png";
import SidebarSettings from "../../assets/sidebar-settings.png";
import MobileApps from "../../assets/sidebar-mobileapp.png";
import WebRedesign from "../../assets/sidebar-webdesign.png";
import DesignSys from "../../assets/sidebar-designsys.png";
import Wireframes from "../../assets/sidebar-wireframes.png";
import logo from "../../assets/logo.png";

const navItems = [
    {
        text: "SidebarHome",
        icon: SidebarHome,
    },
    {
        text: "SidebarMessages",
        icon: SidebarMessages,
    },
    {
        text: "SidebarTasks",
        icon: SidebarTasks,
    },
    {
        text: "SidebarMembers",
        icon: SidebarMembers,
    },
    {
        text: "SidebarSettings",
        icon: SidebarSettings,
    },
];

const myProjects = [
    {
        text: "MobileApps",
        icon: MobileApps,
    },
    {
        text: "WebRedesign",
        icon: WebRedesign,
    },
    {
        text: "DesignSys",
        icon: DesignSys,
    },
    {
        text: "Wireframes",
        icon: Wireframes,
    },
];

function Sidebar({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav" borderRight="1px solid black" borderColor="">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth,
                        },
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                    }}
                >
                    <Box width="100%">
                        <Box m="1rem 2rem 2rem 3rem">
                            <Box className="flex-between">
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap="1rem"
                                >
                                    <Box display="flex" alignItems="center">
                                        <Box
                                            component="img"
                                            alt="profile"
                                            src={logo}
                                            sx={{ objectFit: "cover" }}
                                        />
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            noWrap
                                        >
                                            Project M.
                                        </Typography>
                                    </Box>

                                    <IconButton
                                        onClick={() =>
                                            setIsSidebarOpen(!isSidebarOpen)
                                        }
                                    >
                                        <ChevronLeft />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                const lowerCaseText = text.toLowerCase();

                                return (
                                    <ListItem key={text}>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lowerCaseText}`);
                                                setActive(lowerCaseText);
                                            }}
                                            sx={{
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <ListItemIcon>
                                                {
                                                    <Box
                                                        component="img"
                                                        alt="profile"
                                                        src={icon}
                                                        sx={{
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                }
                                            </ListItemIcon>
                                            {active === lowerCaseText && (
                                                <ChevronRightOutlined
                                                    sx={{ ml: "auto" }}
                                                />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                    <Box width="100%" bottom="2rem">
                        <Divider />
                        <List>
                            {myProjects.map(({ text, icon }) => {
                                const lowerCaseText = text.toLowerCase();
                                if (lowerCaseText === "mobileapp") {
                                    return (
                                        <ListItem key={text}>
                                            <ListItemIcon>
                                                {
                                                    <Box
                                                        component="img"
                                                        alt="profile"
                                                        src={icon}
                                                        sx={{
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                }
                                            </ListItemIcon>
                                        </ListItem>
                                    );
                                }
                                return (
                                    <ListItem key={text}>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lowerCaseText}`);
                                                setActive(lowerCaseText);
                                            }}
                                            sx={{
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <ListItemIcon>
                                                {
                                                    <Box
                                                        component="img"
                                                        alt="profile"
                                                        src={icon}
                                                        sx={{
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                }
                                            </ListItemIcon>
                                            {active === lowerCaseText && (
                                                <ChevronRightOutlined
                                                    sx={{ ml: "auto" }}
                                                />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Box
                                component="img"
                                alt="profile"
                                src={SidebarThoughts}
                                height="17rem"
                                width="17rem"
                                marginTop="1rem"
                                sx={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
}

export default Sidebar;
