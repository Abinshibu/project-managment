import { useRef } from "react"
import Input from "./Input"

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        // now do something with this data

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-4 py-2 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700">Save</button>
                </li>
            </menu>
            <div id="input-section" className="flex flex-col gap-4 my-4">
                <Input ref={title} label="Title" type="text" />
                <Input ref={description} label="Description" textarea />
                <Input ref={dueDate} label="Due Date" type="date" />
            </div>
        </div>
    )
}