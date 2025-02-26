import { SectionTitle } from "@/app/components/section-title";
import { TbBrandNextjs } from "react-icons/tb";
import { KnownTech } from "./known-tech";
import { KnownTech as IKnownTech } from "@/app/types/projects";

type KnownTechsProps = {
 techs: IKnownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="competencias" title= "Conhecimentos"/> 
            
            <div className="grid grid-cols-[repeat(auto-fit,minmax(246px,1fr))] gap-3 mt-[60px]">
            {techs?.map((tech) => (
                <KnownTech key={tech.name} tech={tech} />
            ))}
            </div>
        </section>
    )
}

//