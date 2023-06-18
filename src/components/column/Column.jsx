import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import Task from "../task/Task";
import FlexBetween from "../FlexBetween";

import plus from "../../assets/kanban-plus.png";

export default function Column({ title, tasks, id }) {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    let dividerColor;
    if (title === "To Do") {
        dividerColor = "#5030E5";
    } else if (title === "On Progress") {
        dividerColor = "#FFA500";
    } else {
        dividerColor = "#8BC48A";
    }
    return (
        <Box
            direction="column"
            spacing="1"
            backgroundColor="#F5F5F5"
            padding="0.7rem"
            borderRadius="15px"
            flexGrow="1"
            maxWidth={{ xs: "30%", sm: "30%", md: "30%" }}
        >
            <FlexBetween marginBottom="0.5rem">
                <FlexBetween gap={1}>
                    <Typography>{title}</Typography>
                    <Box
                        backgroundColor="#DBDBDB"
                        borderRadius="50%"
                        width="1rem"
                        height="1rem"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography fontSize="0.8rem">
                            {tasks.length}
                        </Typography>
                    </Box>
                </FlexBetween>
                {title === "To Do" ? (
                    <Box
                        component="img"
                        alt="profile"
                        src={plus}
                        height="1rem"
                        width="1rem"
                        margin="0.5rem"
                        sx={{ objectFit: "cover" }}
                    />
                ) : (
                    <Box height="1rem" width="1rem" margin="0.5rem" />
                )}
            </FlexBetween>
            <Divider color={dividerColor} sx={{ borderBottomWidth: 3 }} />
            <Droppable droppableId={id}>
                {(provided, snapshot) => {
                    return (
                        <Stack
                            ref={provided.innerRef}
                            direction="column"
                            spacing={{ xs: 1, sm: 2, md: 3 }}
                            {...provided.droppableProps}
                            sx={{
                                isDraggingOver: snapshot.isDraggingOver,
                                transistion: "background-color 0.1s ease",
                                backgroundColor: "#f4f5f7",
                            }}
                            justifyContent="space-evenly"
                            display="flex"
                            alignItems="center"
                            minHeight="3rem"
                            minWidth={{ xs: "8rem", sm: "8rem", md: "10rem" }}
                        >
                            {tasks.map((task, index) => (
                                <Task key={index} index={index} task={task} />
                            ))}
                            {provided.placeholder}
                        </Stack>
                    );
                }}
            </Droppable>
        </Box>
    );
}
