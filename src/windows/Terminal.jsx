/* Import section */
import { useState, useRef, useEffect } from "react";
import { WindowControls } from "../components/WindowControls";
import { WindowWrapper } from "../hoc/WindowWrapper";
import { useWindowStore } from "../store/window";
import { about, contact, fastfetch, help, resume, skills, whoami } from "../commands/database";

/* Terminal window */
const Terminal = () => {
    const { windows } = useWindowStore();
    const isOpen = windows["terminal"]?.isOpen;

    /* Command lines */
    const commandMap = {
        fastfetch: fastfetch,
        whoami: whoami,
        about: about,
        resume: resume,
        skills: skills,
        contact: contact,
        help: help,
    };


    /* useState */
    const [linesState, setLinesState] = useState([]);
    const [input, setInput] = useState("");
    const [pendingCommand, setPendingCommand] = useState(null);
    const [fetchedRepos, setFetchedRepos] = useState([]);



    /* useRef */
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll and focus input
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        if (isOpen) inputRef.current?.focus();
    }, [linesState, isOpen]);

    // Reset terminal when closed
    useEffect(() => {
        if (!isOpen) {
            setLinesState([]);
            setInput("");
        }
    }, [isOpen]);

    /* Github repositories */
    const fetchGitHubRepos = async () => {
        try {
            const res = await fetch("https://api.github.com/users/phantekzy/repos?sort=updated&direction=desc&per_page=5");
            if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
            const data = await res.json();

            if (!data.length) {
                setLinesState(prev => [...prev, "No repositories found."]);
                return;
            }

            setFetchedRepos(data);

            const output = data.map((repo, i) => `${i + 1}. ${repo.name}`);
            setLinesState(prev => [
                ...prev,
                "Select a project by typing its number:",
                ...output
            ]);

            setPendingCommand("projects");

        } catch (error) {
            setLinesState(prev => [...prev, `Error fetching GitHub repos: ${error.message}`]);
            setPendingCommand(null);
        }
    };

    /* Handle command function */
    const handleCommand = (cmd) => {

        /* Terminal initial line */
        const newLine = `[phantekzy@archlinux ~]$ ${cmd}`;

        /* Download or show resume options */
        if (pendingCommand === 'resume') {
            if (cmd === '1') {
                /* Open resume in the browser  */
                window.open("/resume.pdf", "_blank");
                setLinesState(prev => [...prev, `[Opened resume in browser]`]);
            } else if (cmd === '2') {
                /* Download the resume */
                const link = document.createElement('a')
                link.href = "/resume.pdf"
                link.download = "resume.pdf"
                link.click()
                setLinesState(prev => [...prev, `[Downloaded resume.pdf]`]);
                /* Invalid inputs because why not */
            } else {
                setLinesState(prev => [...prev, `Invalid selection. Type 1 or 2.`]);
            }
            /* Reset the state */
            setPendingCommand(null);

            setInput("");
            return;
        }

        /* Selection of the repo */
        if (pendingCommand === 'projects') {
            const index = parseInt(cmd) - 1
            if (fetchedRepos[index]) {
                const repo = fetchedRepos[index]
                window.open(repo.html_url, "_blank"); // open in new tab
                setLinesState(prev => [...prev, `[Opened ${repo.name} in browser]`]);
            } else {
                setLinesState(prev => [...prev, "Invalid selection. Type a number from the list."]);
            }
            setPendingCommand(null); // reset pending
            setInput("");
            return;
        }

        /* Contact Command */
        if (pendingCommand === "contact") {
            const index = parseInt(cmd) - 1;
            switch (index) {
                case 0:
                    window.open("mailto:mainilotfi@gmail.com", "_blank");
                    setLinesState(prev => [...prev, "[Opened Email]"]);
                    break;
                case 1:
                    window.open("https://github.com/phantekzy", "_blank");
                    setLinesState(prev => [...prev, "[Opened GitHub]"]);
                    break;
                case 2:
                    window.open("https://linkedin.com/in/maini-lotfi", "_blank");
                    setLinesState(prev => [...prev, "[Opened LinkedIn]"]);
                    break;
                case 3:
                    window.open("https://twitter.com/themainilotfi", "_blank");
                    setLinesState(prev => [...prev, "[Opened Twitter]"]);
                    break;
                default:
                    setLinesState(prev => [...prev, "Invalid selection. Type 1-4."]);
            }
            setPendingCommand(null);
            setInput("");
            return;
        }


        // SPECIAL CASES
        /* Resume command */
        if (cmd === 'resume') {
            setPendingCommand('resume')
        }

        /* Projects commands */
        if (cmd === 'projects') {
            setLinesState(prev => [...prev, newLine, "Fetching projects from GitHub..."]);
            setPendingCommand("projects")
            fetchGitHubRepos();
            setInput("");
            return;

        }

        if (cmd === "contact") {
            setLinesState(prev => [...prev, newLine, ...contact]);
            setPendingCommand("contact");
            setLinesState(prev => [...prev, '[type a number once , if failed rewrite contact again]'])
            setInput("");
            return;
        }


        /* Clear terminal command */
        if (cmd === "clear") {
            setLinesState([]);
            setInput("");
            return;
        }
        /* Exit command */
        if (cmd === 'exit') {
            useWindowStore.getState().closeWindow('terminal')
            setLinesState([]);
            setInput("");
            setPendingCommand(null);
            return;
        }
        /* Commands typed by users*/
        const response = commandMap[cmd];

        if (response) {
            setLinesState(prev => [...prev, newLine, ...[].concat(response)]);
        } else {
            setLinesState(prev => [...prev, newLine, `command not found: ${cmd}`]);
        }


        setInput("");
    };

    /* Return section */
    return (
        <>
            {/* Header */}
            <div id="window-header" className="bg-black/20 text-white flex items-center justify-between p-2">
                <WindowControls target="terminal" />
                <h2>Terminal</h2>
            </div>

            {/* Terminal content */}
            <div
                ref={terminalRef}
                className="techstack font-mono p-3 whitespace-pre overflow-auto max-h-[65vh] rounded-lg shadow-inner flex flex-col"
            >
                {/* linesState mapping */}
                {linesState.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}

                {/* Input */}
                <div className="flex flex-col mt-1">
                    <div className="flex items-center">
                        <span className="text-white mr-1">
                            [
                            <span className="text-transparent bg-linear-to-r from-purple-600 via-pink-400 to-red-500 bg-clip-text">
                                phantekzy
                            </span>
                            @archlinux ~]$
                        </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleCommand(input);
                            }}
                            className="bg-transparent outline-none text-white w-full font-mono"
                        />
                    </div>
                    {!linesState.length && (
                        <p className="text-gray-400 text-sm mt-1">type 'help' for more info</p>
                    )}
                </div>

            </div>
        </>
    );
};

/* HOC wrapper */
const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;

