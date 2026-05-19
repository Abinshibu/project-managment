import noProjectImage from "../assets/no-projects.png";

import Button from "./Button";

export default function NoProjectSelected({ onSelectProject }) {
    return (
        <div id="no-project" className="mt-24 text-center w-full">
            <img src={noProjectImage} alt="" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-stone-700 font-bold uppercase md:text-xl text-base my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-8">Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button onClick={() => onSelectProject(null)}>
                    Create new project
                </Button>
            </p>
        </div>
    )
}