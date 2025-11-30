/* Import section */
import { Search } from "lucide-react"
import { WindowControls } from "../components/WindowControls"
import { WindowWrapper } from "../hoc/WindowWrapper"
import { locations } from "../constants"
import { useLocationStore } from "../store/location"
import clsx from "clsx"
import { useWindowStore } from "../store/window"
import { useEffect, useState } from "react"

/* File manager window */
const FilesManager = () => {
    /* Stores */
    const { activeLocation, setActiveLocation } = useLocationStore()
    const { openWindow } = useWindowStore()

    /* State for GitHub Work folder */
    const [workChildren, setWorkChildren] = useState([])
    const [loadingWork, setLoadingWork] = useState(false)

    /* Fetch 10 latest GitHub repos for Work folder */
    useEffect(() => {
        const fetchRepos = async () => {
            setLoadingWork(true)
            try {
                const res = await fetch(
                    "https://api.github.com/users/phantekzy/repos?sort=created&direction=desc&per_page=10"
                )
                const data = await res.json()

                if (!Array.isArray(data)) return

                // Map repos with positions for layout
                const repos = data.map((repo, index) => ({
                    id: repo.id,
                    name: repo.name,
                    icon: "/images/folder.png",
                    kind: "folder",
                    position: `top-[${index * 16}px] left-[${index * 16}px]`,
                    children: [
                        {
                            id: repo.id + 1000,
                            name: `${repo.name}.txt`,
                            kind: "file",
                            fileType: "txt",
                            description: [repo.description || "No description provided"],
                            position: "top-5 left-5",
                            icon: "/images/txt.png",
                        },
                        {
                            id: repo.id + 2000,
                            name: repo.name,
                            kind: "file",
                            fileType: "url",
                            href: repo.html_url,
                            icon: "/images/firefox.png",
                            position: "top-5 left-40"
                        }
                    ]
                }))

                setWorkChildren(repos)

                // Update active Work folder if currently selected
                if (activeLocation.type === "work") {
                    setActiveLocation(prev => ({
                        ...prev,
                        children: repos
                    }))
                }
            } catch (err) {
                console.error("Failed to fetch GitHub repos:", err)
            } finally {
                setLoadingWork(false)
            }
        }

        fetchRepos()
    }, [activeLocation.type, setActiveLocation])

    /* Open folders/files */
    const openItem = (item) => {
        if (item.fileType === 'pdf') return openWindow('resume')
        if (item.kind === 'folder') return setActiveLocation(item)
        if (['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, "_blank")

        openWindow(`${item.fileType}${item.kind}`, item)
    }

    /* Helper to render lists in sidebar */
    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            item.id === activeLocation.id
                                ? "active"
                                : "not-active"
                        )}
                    >
                        <img src={item.icon} className="w-4" />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

    /* Compose Favorites WITHOUT Work */
    const favorites = Object.values(locations).filter(loc => loc.type !== "work")

    /* Return section */
    return (
        <>
            <div id="window-header">
                <WindowControls target='files' />
                <Search className="icon" />
            </div>

            <div className="flex h-full">
                {/* Sidebar */}
                <div className="sidebar">
                    {renderList('Favorites', favorites)}

                    {/* Work folder */}
                    {loadingWork
                        ? <p className="text-sm text-gray-400 px-2">Loading Work...</p>
                        : renderList('Work', workChildren.length > 0 ? workChildren : locations.work.children)
                    }
                </div>

                {/* Main content */}
                <ul className="content">
                    {(activeLocation?.children || []).map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

/* Wrap in WindowWrapper */
const FileManagerWindow = WindowWrapper(FilesManager, "files")
/* Export section */
export default FileManagerWindow

