import { useState } from "react";
import {
    Menu as MenuIcon,
    Search,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import profileImage from "../../assets/profile.png";
import navbarIcons from "../../assets/navbar-icons.png";
import {
    AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme,
} from "@mui/material";
import FlexBetween from "../FlexBetween";

function Navbar({ isSidebarOpen, setIsSidebarOpen, user }) {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
                borderBottom: "1px solid gray",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Left side */}
                <FlexBetween>
                    {!isSidebarOpen && (
                        <IconButton
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <FlexBetween
                        backgroundColor="#F5F5F5"
                        borderRadius="9px"
                        gap="3rem"
                        p="0.1rem 1.5rem"
                    >
                        <InputBase placeholder="Search for anything" />
                        <IconButton onClick={() => console.log("Searching")}>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>

                {/* Right side */}
                <FlexBetween width="13rem">
                    <Box
                        component="img"
                        alt="nav"
                        src={navbarIcons}
                        height="0.7rem"
                        width="4rem"
                        marginRight="2px"
                        sx={{ objectFit: "cover" }}
                    />
                    <FlexBetween width="8rem">
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "0.5rem",
                            }}
                        >
                            <Box textAlign="left">
                                <Typography
                                    fontWeight="bold"
                                    fontSize="0.65rem"
                                    color="black"
                                    sx={{ textWrap: "nowrap" }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography fontSize="0.55rem" color="gray">
                                    {user.location}
                                </Typography>
                            </Box>
                            <Box
                                component="img"
                                alt="profile"
                                src={profileImage}
                                height="25px"
                                width="25px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />
                            <ArrowDropDownOutlined
                                sx={{
                                    fontSize: "15px",
                                }}
                            />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={isOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                        >
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
