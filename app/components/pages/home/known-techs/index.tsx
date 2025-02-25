import { SectionTitle } from "@/app/components/section-title";
import { TbBrandNextjs } from "react-icons/tb";
import { KnownTech } from "./known-tech";

export const KnownTechs = () => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="competencias" title= "Conhecimentos"/> 
            
            <div className="grid grid-cols-[repeat(auto-fit,minmax(246px,1fr))] gap-3 mt-[60px]">
            {Array.from({length: 8}).map((_, index) => (
                <KnownTech key={index} tech={{
                    icon: <TbBrandNextjs  />,
                    name: 'Next.js', 
                    startDate: '2021-01-01'
                }} />
            ))}
            </div>
        </section>
    )
}

//