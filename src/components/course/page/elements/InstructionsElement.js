import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import React from "react";

const InstructionsElement = ({ cellActions, noStart=false }) => {
    return (
        <div className={`w-full ${noStart ? "text-blue-500" : "text-gray-400"} flex justify-center gap-2`}>

            <table className={"quick-keys-table"}>
                <thead>
                <tr>
                    <th>Quick Key</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>t</td>
                    <td>Add new text cell below current</td>
                </tr>
                <tr>
                    <td>v</td>
                    <td>Add new video cell below current</td>
                </tr>
                <tr>
                    <td>c</td>
                    <td>Add new code cell below current</td>
                </tr>
                <tr>
                    <td>enter</td>
                    <td>Enter edit mode</td>
                </tr>
                <tr>
                    <td>ctrl+enter</td>
                    <td>Save current cell</td>
                </tr>
                <tr>
                    <td>esc</td>
                    <td>Exit edit mode</td>
                </tr>
                <tr>
                    <td>delete</td>
                    <td>Delete current cell</td>
                </tr>

                {
                    !noStart &&
                    <tr className={"bottom"}>
                        <td colSpan={2}>
                            <div className={"flex gap-3 items-center"}>
                                <p>Start</p>
                                <SpeedDial
                                    ariaLabel="SpeedDial Open"
                                    sx={{ position: 'relative', left: 0, '& .MuiFab-primary': { width: 35, height: 30, backgroundColor: 'var(--blue)', color: 'white' }}}
                                    icon={<SpeedDialIcon  />}
                                    direction={"right"}
                                >
                                    {cellActions.map((action) => (
                                        <SpeedDialAction
                                            onClick={action.action}
                                            key={action.name}
                                            icon={action.icon}
                                            tooltipTitle={action.name}
                                        />
                                    ))}
                                </SpeedDial>
                            </div>
                        </td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
    )
}

export default InstructionsElement