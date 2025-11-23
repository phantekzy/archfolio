/* Import section */
import { Tooltip } from "react-tooltip"
import { useRef } from "react"
import { dockApps } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
/* Dock component */
export function Dock() {
    /* useRef */
    const dockRef = useRef(null)
    /* GSAP section */
    useGSAP(() => {
        const dock = dockRef.current
        if (!dock) return
        /* Selecting all the icons */
        const icons = dock.querySelectorAll(".dock-icon")
        /* Icons animation */
        const animateIcons = (mouseX) => {
            /* Left side of the dock */
            const { left } = dock.getBoundingClientRect()
            icons.forEach((icon) => {
                /* left side and witdh of each icon */
                const { left: iconLeft, width } = icon.getBoundingClientRect()
                /* Getting the center of the icon */
                const center = iconLeft - left + width / 2
                /* Distance */
                const distance = Math.abs(mouseX - center)
                /* Gaussian formula */
                const intensity = Math.exp(-(distance ** 2.5) / 20000)
                /* Animation */
                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out"
                })
            })
        }
        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect()
            animateIcons(e.clientX - left)
        }
        const resetIcons = () => icons.forEach((icon) => {
            gsap.to(icon, {
                scale: 1, y: 0, duration: 0.3, ease: 'power1.out'
            })
        })
        dock.addEventListener('mousemove', handleMouseMove)
        dock.addEventListener('mouseleave', resetIcons)
        return () => {
            dock.removeEventListener("mousemove", handleMouseMove)
            dock.removeEventListener("mouseleave", resetIcons)
        }
    }, [])


    /* Toggle apps */
    const toggleApp = (app) => {
        /* Open windows */
    }
    return (
        <section id='dock'>
            <div
                ref={dockRef}
                className="dock-container"
            >
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div
                        key={id ?? name}
                        className="relative flex justify-center"
                    >
                        <button
                            type="button"
                            className="dock-icon"
                            aria-sort={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img
                                src={`/images/${icon}`}
                                loading="lazy"
                                className={canOpen ? " " : "opacity-60"}
                            />
                        </button>
                    </div>
                ))}
                <Tooltip
                    id='dock-tooltip'
                    place="top"
                    className="tooltip"
                />
            </div>
        </section>
    )
}
