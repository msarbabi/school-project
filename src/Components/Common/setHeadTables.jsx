import React from "react";

const SetHeadTables = ({ feilds }) => {
    return (
        <tr>
            {feilds.map((feild) => (
                <th key={feild}>{feild}</th>
            ))}
        </tr>
    );
};

export default SetHeadTables;
