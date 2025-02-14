import Image from "next/image"

export const HeroSection = () => {
    return(
        <section className="w-full h-[755px] bg-hero-image bg-cover bg center bg-no-repeat flex-col justify-end">
            <div className = "container">
                <div>
                    <p>Ola, meu nome é</p>
                    <h2>Erick Lubawski</h2>
               
                        <p>Desenvolvedor Full-Stack </p>
                    <div>   
                        Techs
                    </div>
                    <div>
                        Contato
                    </div>
                </div>
            <Image
                width={420}
                height={404}
                src="/images/profile-pic.png"
                alt="Foto de Erick Lubawski"
            />
            </div>
        </section>
    )
}