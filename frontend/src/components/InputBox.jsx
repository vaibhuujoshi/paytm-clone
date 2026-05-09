export default function InputBox({ label, placeholder, onChange }) {
    return (
        <div className="w-full">
            <div className="mb-1">
                {label}
            </div>
            <input type="text" placeholder={placeholder} onChange={onChange} className="text-base px-3 py-3 w-full rounded-xl border-2 border-mariner-600 bg-transparent bg-linear-to-b from-mariner-700-500/[0.4] to-mariner-800/80 text-mariner-50 placeholder:text-mariner-200 placeholder:opacity-60" />
        </div>
    )
}