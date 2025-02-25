import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const  ExperienceItem = () =>{
    return(
    <div className="grid grid-cols-[420px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo da empresa Work"
                    />
                </div>
            <div className="h-full w-[1px] bg-gray-800"/>
            </div>
        <div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a 
                    href="https://www.linkedin.com/company/workwolf"     
                    target="_blanck"
                    className="text-orange-300 hover:text-amber-200 transition-colors"           
                >
                    @workwolf
                </a>
                <h4 className="text-gray-300"> Desenvolvedor Front-end</h4>
                <span className="text-amber-400">
                    out 2022 0momento (6meses)
                </span>
                <p className="text-gray-400">
                    Desenvolvimento e manutenção de interface ultilizando....
                </p>
            </div>
            <p className="text-amber-700 text-sm mb-3 mt-6 font-semibold">Competencias</p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8" >
                <TechBadge name="React"/>
                <TechBadge name="React"/>
                <TechBadge name="React"/>
                <TechBadge name="React"/>
                <TechBadge name="React"/>
            </div>
        </div>
    </div>
    )
}