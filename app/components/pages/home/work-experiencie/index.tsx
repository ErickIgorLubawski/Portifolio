import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experiencie-item"

export const WorkExperience = () =>{
    return(
        <section className="container py-16 flex md:gap-4 lg:gap-16 flex-col md:flex-row"> 
                <div className = "max-w[420px]"> 
                    <SectionTitle subtitle = "experiencias" title="Experiencia profissional"/>
                    <p className="text-gray-400 mt-6">
                        Estou sempre ....
                    </p>    
                </div>

                <div className="flex flex-col gap-4">
                    <ExperienceItem/>
                    <ExperienceItem/>
                    <ExperienceItem/>
            </div> 
        </section>
    ) 
}