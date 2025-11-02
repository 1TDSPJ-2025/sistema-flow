import React from "react";
import { Link } from "react-router-dom";

interface TitleProps {
    text: string;
}

export default function Title({ text }: TitleProps) {
    return (
        <header className="w-full bg-transparent">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">{text}</h1>
                <nav>
                    <Link
                        to="/faq"
                        className="inline-flex items-center gap-2 bg-rose-600 text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400"
                        aria-label="Acessar FAQ"
                    >
                        FAQ
                    </Link>
                </nav>
            </div>
        </header>
    );
}