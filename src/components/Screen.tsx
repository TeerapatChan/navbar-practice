"use client";
import { useState } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

export default function Screen() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="relative flex justify-center items-center bg-gray-100 h-screen w-screen">
            <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <Card
                month="เมษายน"
                start="05/03/66"
                end="04/04/66"
                price={18000}
                setShowSidebar={setShowSidebar}
            />
        </div>
    );
}
