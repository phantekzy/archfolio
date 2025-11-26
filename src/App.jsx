/* Import section */
import gsap from "gsap"
import { Dock } from "./components/Dock"
import { Navbar } from "./components/Navbar"
import { Draggable } from "gsap/Draggable"
import TerminalWindow from "./windows/Terminal"
import FirefoxWindow from "./windows/Firefox"
import ResumeWindow from "./windows/Resume"

/* GSAP Registre */
gsap.registerPlugin(Draggable)

/* App component section */
function App() {
    return (
        <main>
            {/* Navigation bar section */}
            <Navbar />
            {/* Dock section */}
            <Dock />
            {/* Terminal window */}
            <TerminalWindow />
            {/* Firefox window */}
            <FirefoxWindow />
            {/* Resume window */}
            <ResumeWindow />
        </main>
    )
}
/* Export section */
export default App
