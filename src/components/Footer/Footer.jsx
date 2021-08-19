import { Button, Select } from "@geist-ui/react";
import { Github, Sun, Moon } from "@geist-ui/react-icons";

const Footer = ({ theme, themeFunc }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0px",
            }}
        >
            <a
                href="https://github.com/AndreiSaliba/todo"
                target="_blank"
                rel="noreferrer"
            >
                <Button auto icon={<Github size={18} />}>
                    Github
                </Button>
            </a>
            <Select
                value={theme}
                width="10px"
                size="mini"
                dropdownStyle={{
                    position: "relative",
                    bottom: "130px",
                    marginBottom: "20px",
                    border: theme === "light" && "1px solid #e6e6e6",
                }}
                style={{ height: "38px", marginLeft: "10px" }}
                onChange={(value) => {
                    themeFunc(value);
                }}
            >
                <Select.Option value="dark">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Moon size={16} />
                        <span style={{ marginLeft: "5px" }}>Dark</span>
                    </div>
                </Select.Option>

                <Select.Option value="light">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Sun size={16} />
                        <span style={{ marginLeft: "5px" }}>Light</span>
                    </div>
                </Select.Option>
            </Select>
        </div>
    );
};

export default Footer;
