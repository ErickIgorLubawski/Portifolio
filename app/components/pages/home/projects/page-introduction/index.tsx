import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"
import {Link} from "@/app/components/link"

export const PageIntroduction = () => {
    return(
        <section className ="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle
            subtitle="projetos"
            title="meus Projetos"
            className="text-center items-center [&>h3]:text-4x1"
            />
            <div className ="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Aqui voce podera ver alguns dos trabalhos que eu desenovlvi.
                </p>
                <Link href="/">
                    <HiArrowNarrowLeft size={20}/>
                    Voltar para Home
                </Link>
            </div>
        </section>
    )
}