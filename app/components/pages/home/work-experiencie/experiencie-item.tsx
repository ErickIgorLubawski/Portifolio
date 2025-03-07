import { TechBadge  } from "@/app/components/tech-badge"
import { WorkExperience } from "@/app/types/work-experience"
import { RichText } from "@graphcms/rich-text-react-renderer"
import Image from "next/image"
export const dynamic = 'force-dynamic';

// Seu código de componente ou rota aqui


type ExperienceItemProps = {
    experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
    const {
      endDate,
      companyName,
      companyLogo,
      companyUrl,
      description,
      role,
      technologies,
    } = experience
  
return(
    <div className="grid grid-cols-[420px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                {companyLogo && companyLogo.url ? (
            <Image
            src={companyLogo.url}
            width={40}
            height={40}
            className="rounded-full"
            alt={`Logo da empresa ${companyName}`}
            />
          ) : (
            <div className="placeholder-logo" style={{ width: 40, height: 40 }} />
          )}
                </div>
            <div className="h-full w-[1px] bg-gray-800"/>
            </div>
        <div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a 
                    href= {companyUrl}
                    target="_blanck"
                    className="text-orange-300 hover:text-amber-200 transition-colors"           
                >
                    @{companyName}
                </a>
                <h4 className="text-gray-300">{role}</h4>
                <span className="text-amber-400">
                    out 2022 0 momento (6meses)
                </span>
                <div className="text-gray-400">
                    <RichText content={description.raw}/>
            </div>
            <p className="text-amber-700 text-sm mb-3 mt-6 font-semibold">Competencias</p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8" >
                {technologies.map(tech => (
            <TechBadge
            name={tech.name}
            key={`experience-${companyName}-tech-${tech.name}`}/>
                ))}
            </div>
        </div>
        </div>
    </div>
    )
}