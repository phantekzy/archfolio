/* Import section */
import { Dock } from "./components/Dock"
import { Navbar } from "./components/Navbar"

/* App component section */
function App() {
    return (
        <main>
            {/* Navigation bar section */}
            <Navbar />
            {/* Dock section */}
            <Dock />
        </main>
    )
}
/* Export section */
export default App
