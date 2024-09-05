import { useState, useEffect } from "react";

export default function SetTimeOutExample({ onTimeout, duration }) {
    const [width, setWidth] = useState(100);

    useEffect(() => {
        const interval = 50; // Update progress every 100ms
        const decrement = (interval / duration) * 150;

        const timer = setInterval(() => {
            setWidth((prevWidth) => {
                const newWidth = prevWidth - decrement;
                if (newWidth <= 0) {
                    clearInterval(timer);
                    onTimeout();
                    return 0;
                }
                return newWidth;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onTimeout, duration]);

    return (
        <div style={{ width: '200px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginLeft: '20px'}}>
            <div
                style={{
                    
                    width: `${width}%`,
                    height: '20px',
                    backgroundColor: '#76c7c0',
                    borderRadius: '5px',
                    transition: 'width 0.1s linear',
                }}
            />
        </div>
    );
}