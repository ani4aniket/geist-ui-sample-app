import React from "react";
import { Card, Checkbox } from "@geist-ui/react";
import { Trash2 } from "@geist-ui/react-icons";
import "./Task.css";

const Task = ({ theme, task, deleteFunc, checkFunc }) => {
    return (
        <Card
            type={theme}
            shadow
            style={{
                margin: "5px 0px",
                minHeight: "10px",
                border: theme === 'light' && "1px solid #666666",
            }}
        >
            <div className="Task">
                <div className="Check-Container">
                    <Checkbox
                        checked={task.isChecked}
                        size="medium"
                        onChange={() =>
                            checkFunc(task.id, task.text, task.isChecked)
                        }
                    ></Checkbox>
                    <span
                        style={{
                            width: "90%",
                            maxWidth: "92%",
                            overflowWrap: "break-word",
                            textDecoration: task.isChecked
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {task.text}
                    </span>
                </div>
                <div className="Icon-Container">
                    <Trash2
                        size={18}
                        onClick={() => deleteFunc(task.id, task.isChecked)}
                    />
                </div>
            </div>
        </Card>
    );
};

export default Task;
