/* Import section */
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

/* Lockscreen section */
export function LockScreen({ onUnlock }) {
    const inputRef = useRef(null)
    const [unlockedLayer, setUnlockedLayer] = useState(false);

    useEffect(() => {
        const unlock = (e) => {
            e.preventDefault()
            setUnlockedLayer(true);
            window.removeEventListener("keydown", unlock);
            window.removeEventListener("click", unlock);
        }
        window.addEventListener("keydown", unlock);
        window.addEventListener("click", unlock);
        return () => {
            window.removeEventListener("keydown", unlock);
            window.removeEventListener("click", unlock);
        };
    }, []);

    useEffect(() => {
        if (unlockedLayer && inputRef.current) {
            inputRef.current.focus()
        }
    })

    return (
        <div className="fixed inset-0 overflow-hidden text-white">
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{
                    backgroundImage: `url("/images/wallpaper3.jpeg")`,
                    filter: unlockedLayer ? "blur(6px)" : "none",
                    transform: unlockedLayer ? "scale(1.09)" : "scale(1)"
                }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full">

                <h1 className="text-8xl font-extrabold drop-shadow-xl">
                    {dayjs().format("HH:mm")}
                </h1>
                <p className="text-2xl mt-2 opacity-80">
                    {dayjs().format("dddd, MMMM D")}
                </p>

                {!unlockedLayer && (
                    <h2 className="mt-20 text-white/90 text-lg font-bold ">
                        Click or press a button to unlock the way.
                    </h2>
                )}

                {unlockedLayer && (
                    <div
                        className="absolute bottom-60 bg-white/10 backdrop-blur-xl p-6 
                                   rounded-2xl w-80 text-center animate-slide-up"
                    >
                        <p className="text-lg mb-4">Enter any Password</p>

                        <input
                            ref={inputRef}
                            type="password"
                            className="w-full px-3 py-2 rounded bg-black/10 
                                       text-white outline-none text-center"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") onUnlock();
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

