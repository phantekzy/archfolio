/* Import section */
import { useState } from "react";
import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";
import { useMediaQuery } from "react-responsive";
/* Navbar component */
export function Navbar() {
    /* useState */
    const [currentDir, setCurrentDir] = useState('~')
    const isMobile = useMediaQuery({ query: '(max-width : 1024px)' })
    return (
        <nav>
            <div>
                {/* Logo image */}
                <img
                    src="/archblack.png"
                    className="h-5 w-5"
                    onClick={() => setCurrentDir("~")}
                />
                <p className="font-bold text-black text-xs">{currentDir}</p>
                {/* Mapping on data */}
                <ul>
                    {
                        navLinks.map(({ id, name }) => (
                            <li key={id}>
                                <p
                                    className={
                                        `${currentDir === `~/${name.toLowerCase()}`
                                            ? "text-black/50 scale-120"
                                            : "text-black"
                                        }`
                                    }
                                    onClick={() => setCurrentDir(`~/${name.toLowerCase()}`)}
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
            {/* Navigation icons */}
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
