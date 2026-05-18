export default function Input({ label, textarea, ...props }) {
    const sharedClass = "p-2 w-full rounded-md border border-stone-300 bg-stone-200";
    return (
        <p className="my-4 flex flex-col gap-1">
            <label className="text-stone-500 font-bold uppercase">{label}</label>
            {textarea
                ? <textarea {...props} className={sharedClass} />
                : <input {...props} className={sharedClass} />}
        </p>
    )
}