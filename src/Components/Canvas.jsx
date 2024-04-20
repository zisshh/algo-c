import React, { useEffect } from 'react';
import ShowData from './ShowData';

export default function Canvas(props) {
    
    return (
        <div style={{ width: "80vw", height: "60vh", backgroundColor: "#000000", marginTop: "5vh", display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-evenly", zIndex: "-1" }}>
            {props.data.map((dataPoint) => (
                // Add a unique key prop to each ShowData component
                <ShowData value={dataPoint.value} height={dataPoint.value} minHeight={props.minHeight} maxHeight={props.maxHeight} bgColor={dataPoint.bgColor} textColor={dataPoint.textColor}/>
            ))}
        </div>
    );
}

