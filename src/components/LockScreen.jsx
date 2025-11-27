/* Import section */
import dayjs from "dayjs";
import { useEffect, useState } from "react";

/* Lockscreen section */
export function LockScreen({ onUnlock }) {
    const [unlockedLayer, setUnlockedLayer] = useState(false);

    useEffect(() => {
        const unlock = () => setUnlockedLayer(true);
        window.addEventListener("keydown", unlock);
        window.addEventListener("click", unlock);

        return () => {
            window.removeEventListener("keydown", unlock);
            window.removeEventListener("click", unlock);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden text-white">

            {/* BACKGROUND (only this blurs) */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{
                    backgroundImage: `url("/images/wallpaper3.jpeg")`,
                    filter: unlockedLayer ? "blur(6px)" : "none",
                    transform: unlockedLayer ? "scale(1.09)" : "scale(1)"
                }}
            />

            {/* UI LAYER (stays sharp) */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">

                {/* Center Time */}
                <h1 className="text-8xl font-extrabold drop-shadow-xl">
                    {dayjs().format("HH:mm")}
                </h1>
                <p className="text-2xl mt-2 opacity-80">
                    {dayjs().format("dddd, MMMM D")}
                </p>

                {/* Press any key */}
                {!unlockedLayer && (
                    <p className="mt-20 text-white/90 text-lg font-bold tracking-widest">
                        Press any key to unlock
                    </p>
                )}

                {/* LOGIN PANEL */}
                {unlockedLayer && (
                    <div
                        className="absolute bottom-32 bg-white/10 backdrop-blur-xl p-6 
                                   rounded-2xl w-80 text-center animate-slide-up"
                    >
                        <p className="text-lg mb-4">Enter any Password</p>

                        <input
                            type="password"
                            className="w-full px-3 py-2 rounded bg-black/10 
                                       text-white outline-none"
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

