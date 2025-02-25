import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react";

type KnownTechProps = {
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
   const relativeTime = getRelativeTimeString(
    new Date(tech.startDate), 'pt-BR'
    ).replace('há ', '');
    return (
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-yellow-600 hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p>{tech.name}</p>
                {tech.icon}
            </div>
            <span>{relativeTime} de experiencia</span>
        </div>
    );
} 