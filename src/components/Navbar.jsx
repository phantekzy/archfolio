/* Import section */
import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";
import { useMediaQuery } from "react-responsive";
import { useWindowStore } from "../store/window";
/* Navbar component */
export function Navbar() {
    /* useState */
    const isMobile = useMediaQuery({ query: '(max-width : 1024px)' })
    const { openWindow, focusedWindow } = useWindowStore()
    const currentDir = focusedWindow ? `~/${focusedWindow}` : "~";

    return (
        <nav>
            <div>
                {/* Logo image */}
                <img
                    src="/archblack.png"
                    className="h-5 w-5"
                />
                <p className="font-bold text-white/70 text-xs">{currentDir}</p>


                {/* Mapping on data */}
                <ul>
                    {
                        navLinks.map(({ id, name, type }) => (
                            <li
                                key={id}
                                onClick={() => openWindow(type)}
                            >
                                <p
                                    className={`${focusedWindow === type ? "text-black/50 scale-120" : "text-black"}`}

                                >{name}</p>
                            </li>
                        ))
                    }
                </ul>


                {/* Date and time */}
                <time>
                    {isMobile
                        ? dayjs().format('MMM D, h:mm A')
                        : dayjs().format('dddd, MMMM D, h:mm A')
                    }
                </time>
            </div>


            {/* OS icons */}
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img
                                src={img}
                                className="icon-hover"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
