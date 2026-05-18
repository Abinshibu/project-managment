import Input from "./Input"

export default function NewProject() {
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
                <Input label="Title" type="text" />
                <Input label="Description" textarea />
                <Input label="Due Date" type="date" />
            </div>
        </div>
    )
}