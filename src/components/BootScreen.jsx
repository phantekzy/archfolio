/* Import section */
import { useEffect, useState } from "react";
import { bootSteps } from "../constants";

/* Boot screen component */
export const BootScreen = ({ onFinish }) => {

    /* useState for steps */
    const [step, setStep] = useState(0)
    /* useEffect */
    useEffect(() => {
        if (step < bootSteps.length) {
            const timer = setTimeout(() => setStep(step + 1), 8)
            return () => clearTimeout(timer)
        } else {
            onFinish()
        }
    }, [step, onFinish])

    return (
        <div className="w-full h-screen bg-black text-white flex flex-col justify-center
                    px-10 font-mono">
            <pre>
                {
                    bootSteps.slice(0, step).map((line, index) => {
                        if (line.startsWith("[OK]")) {
                            return (
                                <span key={index}>
                                    <span className="text-green-500">[OK]</span>
                                    {line.slice(4)}
                                    {"\n"}
                                </span>
                            )
                        }
                        return <span key={index}>{line}{"\n"}</span>;

                    })
                }
            </pre>
            <span className="blink">|</span>
        </div>
    )
}
