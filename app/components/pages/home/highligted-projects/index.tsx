import { SectionTitle } from "@/app/components/section-title";
import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { ProjectCard } from "./project-card";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "@/app/components/link";
import { Project } from "@/app/types/projects";

type HightLightedProjects = {
    projects: Project[]
}

export const HightLightedProjects = ({projects}: HightLightedProjects) => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title= "Projetos em destaque"/> 
             <HorizontalDivider className="mb-16"/>

             <div>
                {projects?.map(project =>(
                <div key={project.slug}>
                    <ProjectCard project ={project}/>
                    <HorizontalDivider className="my-16"/>
                </div>
                ))}
                
                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Veja mais projetos . . .     </span>
                    <Link href =" /projects "className="inline-flex">
                        Ver todos
                        <HiArrowNarrowRight/>
                    </Link>
                </p>

             </div>
         </section>
    )
}