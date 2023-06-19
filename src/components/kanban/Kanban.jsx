import { Stack } from "@mui/material";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../column/Column";

import low from "../../assets/kanban-low.png";
import high from "../../assets/kanban-high.png";
import BrainstormingFooter from "../../assets/task-footer-brainstorming.png";
import OnboardingFooter from "../../assets/task-footer-onboarding.png";
import OnboardingImg from "../../assets/task-img-onboarding.png";

import MoodboardFooter from "../../assets/task-footer-moodboard.png";
import MoodboardImg1 from "../../assets/task-img-moodboard1.png";
import MoodboardImg2 from "../../assets/task-img-moodboard2.png";

import MobileImg from "../../assets/task-img-mobile.png";
import MobileFooter from "../../assets/task-footer-mobile.png";

const initialTasks = [
    {
        id: 1,
        name: "Brainstorming",
        stateId: 1,
        description:
            "Brainstorming brings team members' diverse experience into play.",
        image: [],
        priority: low,
        footer: BrainstormingFooter,
    },
    {
        id: 2,
        name: "Research",
        stateId: 1,
        description:
            "User research helps you to create an optimal product for users.",
        image: [],
        priority: high,
        footer: OnboardingFooter,
    },
    {
        id: 3,
        name: "Wireframes",
        stateId: 1,
        description:
            "Low fidelity wireframes include the most basic content and visuals.",
        image: [],
        priority: high,
        footer: BrainstormingFooter,
    },
    {
        id: 4,
        name: "Onboarding Illustrations",
        stateId: 2,
        description: "",
        image: [OnboardingImg],
        priority: low,
        footer: OnboardingFooter,
    },
    {
        id: 5,
        name: "Moodboard",
        stateId: 2,
        description: "",
        image: [MoodboardImg1, MoodboardImg2],
        priority: low,
        footer: MoodboardFooter,
    },
    {
        id: 6,
        name: "Mobile App Design",
        stateId: 3,
        description: "",
        image: [MobileImg],
        priority: high,
        footer: MobileFooter,
    },
    {
        id: 5,
        name: "Design System",
        stateId: 3,
        description: "It just needs to adapt the UI from what you did before ",
        image: [],
        priority: low,
        footer: MobileFooter,
    },
];

const Kanban = () => {
    const [toDo, setToDo] = useState(() => {
        return initialTasks.filter((t) => t.stateId === 1);
    });
    const [onProgress, setOnProgress] = useState(() => {
        return initialTasks.filter((t) => t.stateId === 2);
    });
    const [Done, setDone] = useState(() => {
        return initialTasks.filter((t) => t.stateId === 3);
    });

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (source.droppableId == destination.droppableId) return;
        // GET ITEM
        let task;
        //REMOVE FROM SOURCE ARRAY

        if (source.droppableId == 1) {
            setToDo((old) => {
                return old.filter((t) => {
                    if (t.id == draggableId) {
                        task = { ...t };
                        return false;
                    }
                    return true;
                });
            });
        } else if (source.droppableId == 2) {
            setOnProgress((old) => {
                return old.filter((t) => {
                    if (t.id == draggableId) {
                        task = { ...t };
                        return false;
                    }
                    return true;
                });
            });
        } else {
            setDone((old) => {
                return old.filter((t) => {
                    if (t.id == draggableId) {
                        task = { ...t };
                        return false;
                    }
                    return true;
                });
            });
        }

        //ADD ITEM
        if (destination.droppableId == 1) {
            setToDo((old) => {
                return [{ ...task, stateId: destination.droppableId }, ...old];
            });
        } else if (destination.droppableId == 2) {
            setOnProgress((old) => {
                return [{ ...task, stateId: destination.droppableId }, ...old];
            });
        } else {
            setDone((old) => {
                return [{ ...task, stateId: destination.droppableId }, ...old];
            });
        }
    };
    return (
        <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            flexGrow="1"
            // width="100%"
            marginBottom="2rem"
        >
            <DragDropContext onDragEnd={handleDragEnd}>
                <Column title={"To Do"} tasks={toDo} id={"1"} />
                <Column title={"On Progress"} tasks={onProgress} id={"2"} />
                <Column title={"Done"} tasks={Done} id={"3"} />
            </DragDropContext>
        </Stack>
    );
};

export default Kanban;
