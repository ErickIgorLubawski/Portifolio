import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experiencie-item"
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience"


type WorkExperienceProps = {
    experiences: IWorkExperience []
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) =>{
    return(
        <section className="container py-16 flex md:gap-4 lg:gap-16 flex-col md:flex-row"> 
                <div className = "max-w[420px]"> 
                    <SectionTitle subtitle = "experiencias" title="Experiencia profissional"/>
                    <p className="text-gray-400 mt-6">
                    Estou sempre aberto a oportunidades que me permitam colaborar em projetos desafiadores e impactantes na área de tecnologia.
                    ficarei feliz em conectar-me!
                    </p>    
                </div>

                <div className="flex flex-col gap-4">
                    {experiences?.map(experience => (
                        <ExperienceItem
                        key={experience.companyName}
                        experience={experience}
                        />
                    ))}
            </div> 
        </section>
    ) 
}