import { Box, Container, useMediaQuery } from "@mui/material";
import DashboardTitle from "../../assets/dashboard-title.png";
import DashboardInvite from "../../assets/dashboard-invite.png";
import DashboardFilter from "../../assets/dashboard-filter.png";
import DashboardShare from "../../assets/dashboard-share.png";
import Kanban from "../../components/kanban/Kanban";

export default function Dashboard() {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                marginX: "1rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isNonMobile ? "row" : "column",
                    overflow: "hidden",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: "1rem",
                }}
            >
                <Box
                    component="img"
                    alt="profile"
                    src={DashboardTitle}
                    height="3rem"
                    width="20rem"
                    margin="0.5rem"
                    sx={{ objectFit: "cover" }}
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        margin: "0.5rem",
                    }}
                >
                    <Box
                        component="img"
                        alt="profile"
                        src={DashboardInvite}
                        height="2rem"
                        width="14rem"
                        sx={{ objectFit: "cover" }}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isNonMobile ? "row" : "column",
                    overflow: "hidden",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: "2rem",
                }}
            >
                <Box
                    component="img"
                    alt="profile"
                    src={DashboardFilter}
                    margin="0.5rem"
                    sx={{ objectFit: "cover" }}
                />
                <Box
                    component="img"
                    alt="profile"
                    src={DashboardShare}
                    sx={{ objectFit: "cover" }}
                />
            </Box>
            <Kanban />
        </Box>
    );
}
