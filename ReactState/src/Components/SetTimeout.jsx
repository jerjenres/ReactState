import { useState, useEffect } from "react";

export default function SetTimeOutExample() {
    const [width, setWidth] = useState(150);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth((prevWidth) => {
                const newWidth = prevWidth - 30;
                return newWidth < 0 ? 0 : newWidth;
            });
            console.log(width);
        }, 400);

        return () => clearTimeout(timer); // Clear timeout if the component unmounts or width changes
    }, [width]);

    return (
        <>
            <div style={{ width: width, backgroundColor: "#fff" }}>&nbsp;</div>
        </>
    );
}