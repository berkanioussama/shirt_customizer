import { SketchPicker,CirclePicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";
import CustomButton from "./CustomButton";

const ColorPicker = ({doneColorPick}) => {

    const snap = useSnapshot(state)

    return (
        <div className="absolute left-full ml-3 p-1 rounded-md flex flex-col gap-4">
            {/* <SketchPicker
                color={snap.color}
                disableAlpha
                onChange={(color) => state.color = color.hex}
            /> */}
            <CirclePicker
                color={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]}
                onChange={(color) => state.color = color.hex}
            />
            <CustomButton title="Done" type="filled" customStyles="w-fit px-4 py-2.5 rounded-md font-bold test-sm" handleClick={doneColorPick} />
        </div>
    );
}
 
export default ColorPicker;