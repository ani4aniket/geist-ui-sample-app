import { useState } from "react";
import { Input, Button } from "@geist-ui/react";
import "./Add.css";

const Add = ({ clickFunc }) => {
    const [text, setText] = useState("");

    const addTask = () => {
        if (text) clickFunc(text);
        setText("");
    };

    return (
        <div className="Container">
            <Input
                size="large"
                placeholder="Enter Task"
                width="95%"
                status="secondary"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button auto size="medium" type="secondary" onClick={addTask}>
                Add
            </Button>
        </div>
    );
};

export default Add;
