import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { Button } from "@/app/components/button"
import {FiGlobe} from "react-icons/fi"
import {Link} from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const ProjectDetails = ()=>{
    return(
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div
                className = "absolute inset-0 z-[-1]"
                style ={{
                    background: 'url(/images/hero-bg.png) no-repeat center/cover, url(https://cdn.pixabay.com/photo/2018/01/14/23/05/ecommerce-3082813_1280.jpg)'
                }}
            />
            <SectionTitle
            subtitle ="projetos"
            title="BookWise"
            className="text-center items-center sm:[&>h3]:text-4x1"
            />
            <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                BookWise é uma plataforma de avaliação de livros que foi desenvolvida duranteqwdqwd
            </p>

            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                <TechBadge name="Nex.js" />
                <TechBadge name="Nex.js" />
                <TechBadge name="Nex.js" />
                <TechBadge name="Nex.js" />
            </div>
            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href="https://github/com" target="_blank">
                <Button className="min-w-[180px]">
                    <TbBrandGithub size={20}/>
                    Repositorio
                </Button>
                </a>
                <a href="https://github/com" target="_blank">
                <Button className="min-w-[180px]">
                    <FiGlobe size={20}/>
                    Projeto Online
                </Button>
                </a>
            </div>
                <Link href="/projects">
                    <HiArrowNarrowLeft size={20}/>
                    Voltar para Projetos
                </Link>
        </section>
    )
}