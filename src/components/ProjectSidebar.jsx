// ProjectSidebar.jsx
import Button from "./Button";

export default function ProjectSidebar({ onSelectProject }) {
    return (
        <aside className="w-[18rem] bg-stone-900 text-stone-50 md:w-72 rounded-r-xl p-16">
            <h2 className="text-stone-200 font-bold uppercase md:text-xl text-base my-8">Your Projects</h2>
            <Button onClick={() => onSelectProject(null)}>
                + Add Project
            </Button>
        </aside>
    )
}