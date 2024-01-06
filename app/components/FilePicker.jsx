import CustomButton from "./CustomButton";

const FilePicker = ({file, setFile, readFile}) => {
    return (
        <div className="filepicker-container">
            <div className="flex flex-1 flex-col">
                <input 
                    id="file-upload"
                    type="file"
                    about="image/*"
                    onChange={(e)=> setFile(e.target.files[0])}
                />
                <label htmlFor="file-upload" className="filepicker-label">
                    Upload File
                </label>
                <p className="mt-2 text-gray-500 text-xs truncate">
                    {file === '' ? "No file has been selected" : file.name}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <CustomButton
                        type="outline"
                        title="Full"
                        handleClick={()=> readFile('full')}
                        customStyles="text-xs py-2"
                    />
                    <CustomButton
                        type="filled"
                        title="logo"
                        handleClick={()=> readFile('logo')}
                        customStyles="py-2 text-xs"
                    />
                </div>
            </div>
        </div>
    );
}
 
export default FilePicker;