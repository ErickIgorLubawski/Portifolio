'use client'
import { Button } from "@/app/components/button"
import { CMSIcon } from "@/app/components/cms-icon";
import { TechBadge } from "@/app/components/tech-badge"
import { HomePageInfo } from "@/app/types/page-info";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi";


type HomeSectionProps = {
    homeInfo :HomePageInfo
}

export const HeroSection = ({homeInfo}: HomeSectionProps) => {
    const handleContact =()=>{
        const contactSection = document.querySelector('#contact');
        if(contactSection){
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
    }



    return(
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center  bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex itens-start justify-between flex-col-reserve lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="front-mono text-yellow-400" >Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Erick Lubawski</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">
                        <RichText content = {homeInfo.introduction.raw}/>
                    </p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {homeInfo.technologies.map((tech)=> (
                            <TechBadge name={tech.name}/>
                        ))}
                    </div>

                    <div className="mt -6 lg:mt-10 flex sm:items-center sm:gap-5 sm:flex-row">
                        <Button className ="w-max shadow-button" onClick={handleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size = {18} />
                        </Button>

                        <div className="text-2x1 text-yellow-400 flex items-center h-20 gap-3">
                            { homeInfo.social.map((contact, index) => (
                                <a 
                                    href = {contact.url}
                                    key = {`contact-${index}`}
                                    target = "_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                <CMSIcon icon={contact.iconSvg}/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                    width={420}
                    height={404}
                    src = { homeInfo.profilePicture.url}
                    alt="Imagem de um desenvolvedor"
                    className="w=[300px] h-[300px] lg:w-[200px] lg:h-[404px] mb-6 lg:mb-0 shadow-2x1  "
                />
              </div>
        </section>
    )
}