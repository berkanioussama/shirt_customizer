'use client'

import { useSnapshot } from "valtio"
import state from "../store"
import { getContrastingColor } from "../config/helpers"

const CustomButton = ({type,title,customStyles,handleClick}) => {

    const snap = useSnapshot(state)
    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        }
        if (type === 'outline') {
            return {
                borderWidth: '2px',
                borderColor: snap.color,
                color: snap.color,
            }
        }
    }

    return (
        <button 
            className={`w-full rounded-md font-bold test-sm ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title}
        </button>
    );
}
 
export default CustomButton;