import Image from "next/image"
import { TechBadge } from "@/app/components/tech-badge"
import NextLink from "next/link"
import { HiArrowCircleRight } from "react-icons/hi"

export const ProjectCard = () => {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                 width={420}
                 height={304}
                 src= "https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
                 alt=" Imagem do projeto"
                 className="h-full  sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                 />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-meduim text-lg text-gray-50">
                    <Image 
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                     />
                     BookWise
                </h3>

                <p className="text-gray-400 my-6">
                    BookWise é um projeto open source que tem como objetivo ajudar pessoas a encontrar livros para ler.
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name = "Next.js"/>
                    <TechBadge name = "TypeScript"/>
                    <TechBadge name = "TailwindCSS"/>
                    <TechBadge name = "Jest"/>
                    <TechBadge name = "Next.js"/>
                </div>
                <NextLink href="/projects/bookwise" className="flex items-center gap-2 text-gray-300 text-sm hover:text-amber-300 transition-colors">
                Ver projeto
                <HiArrowCircleRight/>
                </NextLink>
            </div>
        </div>
    )
}