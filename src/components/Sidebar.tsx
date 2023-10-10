export default function Sidebar({
    showSidebar,
    setShowSidebar,
}: {
    showSidebar: Boolean;
    setShowSidebar: Function;
}) {
    return (
        <div
            className={`fixed top-0 right-0 z-10 bg-slate-600 w-[80vw] h-screen p-2 
        ${showSidebar ? "translate-x-0" : "translate-x-full"} 
        ease-in-out duration-500`}
        >
            <button
                type="button"
                className="text-base bg-white rounded-full flex items-center justify-center 
        text-gray-400 hover:text-gray-500 hover:bg-gray-100 w-5 h-5"
                onClick={() => setShowSidebar(false)}
            >
                x
            </button>
        </div>
    );
}
