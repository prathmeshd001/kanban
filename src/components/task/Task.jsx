import { Box, Card, ImageList, ImageListItem, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

import threeDots from "../../assets/kanban-3dots.png";
import completed from "../../assets/kanban-completed.png";
import FlexBetween from "../FlexBetween";

export default function Task({ task, index }) {
    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                        padding: "10px",
                        cursor: "grab",
                        isDragging: snapshot.isDragging,
                        boxShadow: "1",
                        borderRadius: "15px",
                    }}
                    margin="1rem"
                    backgroundColor="white"
                    flexGrow="1"
                    width="100%"
                    gap={2}
                >
                    <FlexBetween marginY="0.3rem">
                        <Box
                            component="img"
                            alt="profile"
                            src={task.stateId == 3 ? completed : task.priority}
                            sx={{ objectFit: "cover" }}
                        />
                        <Box
                            component="img"
                            alt="profile"
                            src={threeDots}
                            sx={{ objectFit: "cover" }}
                        />
                    </FlexBetween>
                    <Box marginY="0.3rem">
                        <Typography variant="h5" fontWeight="bold" noWrap>
                            {task.name}
                        </Typography>
                    </Box>
                    {task.image.length > 0 && (
                        <ImageList sx={{}} cols={task.image.length % 3}>
                            {task.image.map((item, index) => {
                                return (
                                    <ImageListItem
                                        key={index}
                                        sx={{
                                            objectFit: "cover",
                                        }}
                                    >
                                        <img
                                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt="img"
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                );
                            })}
                        </ImageList>
                    )}
                    <Box marginY="0.3rem">
                        <Typography variant="p">{task.description}</Typography>
                    </Box>
                    <Box
                        component="img"
                        alt="profile"
                        src={task.footer}
                        width={{ xs: "100%", sm: "100%", md: "17rem" }}
                        sx={{ objectFit: "cover" }}
                        marginTop="1.5rem"
                    />
                    {provided.placeholder}
                </Box>
            )}
        </Draggable>
    );
}
