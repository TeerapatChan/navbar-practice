export default function Card({
    month,
    start,
    end,
    price,
    setShowSidebar,
}: {
    month: string;
    start: string;
    end: string;
    price: number;
    setShowSidebar: Function;
}) {
    return (
        <div className="relative w-[20.438rem] h-[7.625rem] bg-white rounded-lg p-4 grid grid-rows-1 grid-cols-2 shadow-sm">
            <div className="flex flex-col gap-1">
                <p className="font-medium text-sm">รอบ {month}</p>
                <p className="text-[0.5rem]">
                    {start} - {end}
                </p>
                <p className="text-[0.5rem] text-red-500">
                    กรุณาชำระภายใน {end}
                </p>
                <p className="text-base mt-2">฿ {price.toLocaleString()}</p>
            </div>
            <div className="absolute right-4 bottom-4">
                <button
                    className="w-[77px] h-[36px] flex items-center justify-center 
                    outline outline-1 outline-offset-0 outline-custom-orange/50 rounded-lg
                    hover:bg-custom-orange/50 hover:text-white text-sm font-bold text-custom-orange 
                    hover:cursor-pointer"
                    onClick={() => setShowSidebar(true)}
                >
                    จ่ายเงิน
                </button>
            </div>
        </div>
    );
}
