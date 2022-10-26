import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({

    minHeighttimerange: {
        paddingBottom: "0 !important",
        minHeight: "0 !important",
    },
}))

export default function TimelineEntry(props) {
    const { entry: { time, image, content }, useBar, setstate, state } = props;
    console.log("childprops", props)

    const classes = useStyles()

    return (
        <div
            className="timeline-entry"
            onClick={() => {
                debugger
                setstate({
                    ...state,
                    timelineImage: image,
                    content: content,
                });
            }}>
            <span
                style={{ fontFamily: "notoSerif-regular" }}
                className={`time-range ${state.timelineImage === image ? "active" : ""
                    } ${useBar ? "" : classes.minHeighttimerange}`}>
                {time}
            </span>
            <div
                className={`${"timeline-icon-container"} ${state.timelineImage === image ? "active" : ""
                    }`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
                </svg>

                {useBar && <div className="bar" />}
            </div>
        </div>
    )
}