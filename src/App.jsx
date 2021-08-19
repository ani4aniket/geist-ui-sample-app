import { useState, useEffect } from "react";
import Add from "./components/Add/Add";
import Tasks from "./components/Tasks/Tasks";
import Footer from "./components/Footer/Footer";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const [checked, setChecked] = useState(
        JSON.parse(localStorage.getItem("checked")) || []
    );

    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) ||'dark');

    const addTask = (task) => {
        setTasks([
            ...tasks,
            {
                id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                text: task,
                isChecked: false,
            },
        ]);
    };

    const deleteTask = (id, isChecked) => {
        if (!isChecked) {
            setTasks(tasks.filter((item) => item.id !== id));
        } else if (isChecked) {
            setChecked(checked.filter((item) => item.id !== id));
        }
    };

    const checkTask = (id, text, isChecked) => {
        if (!isChecked) {
            setChecked([
                {
                    id: checked.length > 0 ? checked[0].id + 1 : 1,
                    text: text,
                    isChecked: true,
                },
                ...checked,
            ]);
            setTasks(tasks.filter((item) => item.id !== id));
        } else if (isChecked) {
            setTasks([
                ...tasks,
                {
                    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                    text: text,
                    isChecked: false,
                },
            ]);
            setChecked(checked.filter((item) => item.id !== id));
        }
    };

    const updateTheme = (theme) => {
        setTheme(theme)
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("checked", JSON.stringify(checked));
    }, [tasks, checked]);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    return (
        <GeistProvider themeType={theme}>
            <CssBaseline />
            <div className="App">
                <div className="Task-Container">
                    <Add clickFunc={addTask} />
                    <Tasks
                        theme={theme}
                        tasksArray={tasks}
                        checkedArray={checked}
                        deleteFunc={deleteTask}
                        checkFunc={checkTask}
                    />
                </div>
                <Footer theme={theme} themeFunc={updateTheme}/>
            </div>
        </GeistProvider>
    );
};

export default App;
