import React from "react";
import Task from "../Task/Task";
import { Tabs } from "@geist-ui/react";
import "./Tasks.css";

const Tasks = ({ theme, tasksArray, checkedArray, deleteFunc, checkFunc }) => {
    return (
        <>
            {(tasksArray.length > 0 || checkedArray.length > 0) && (
                <Tabs
                    initialValue="1"
                    hideDivider
                    style={{ width: "100%", marginTop: "10" }}
                >
                    <Tabs.Item label="All" value="1">
                        <div className="Tasks-Container">
                            {tasksArray.map((item) => {
                                return (
                                    <Task
                                        key={item.id + "T"}
                                        theme={theme}
                                        task={item}
                                        deleteFunc={deleteFunc}
                                        checkFunc={checkFunc}
                                    />
                                );
                            })}
                        </div>

                        <div className="Tasks-Container">
                            {checkedArray.map((item) => {
                                return (
                                    <Task
                                        key={item.id + "C"}
                                        theme={theme}
                                        task={item}
                                        deleteFunc={deleteFunc}
                                        checkFunc={checkFunc}
                                    />
                                );
                            })}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item label="Active" value="2">
                        <div className="Tasks-Container">
                            {tasksArray.map((item) => {
                                return (
                                    <Task
                                        key={item.id + "T"}
                                        theme={theme}
                                        task={item}
                                        deleteFunc={deleteFunc}
                                        checkFunc={checkFunc}
                                    />
                                );
                            })}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item label="Completed" value="3">
                        <div className={"Tasks-Container"}>
                            {checkedArray.map((item) => {
                                return (
                                    <Task
                                        key={item.id + "C"}
                                        theme={theme}
                                        task={item}
                                        deleteFunc={deleteFunc}
                                        checkFunc={checkFunc}
                                    />
                                );
                            })}
                        </div>
                    </Tabs.Item>
                </Tabs>
            )}
        </>
    );
};

export default Tasks;
