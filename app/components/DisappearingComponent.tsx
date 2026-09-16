import clsx from "clsx";
import React, { useEffect, useState } from "react";

const DisappearingComponent = ({ children, delay = 5000, classMode = "" }: { children: React.ReactNode, delay?: number, classMode: string }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsVisible(false), delay);
        return () => clearTimeout(timeoutId);
    }, [delay]);

    return (
        <div className={clsx(
            "smooth",
            classMode,
            isVisible ? "opacity-100" : "opacity-0"
        )}>
            {children}
        </div>
    );
};

export default DisappearingComponent;