import Image from "next/image"

export const ProjectCard = () =>{
    return(
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-orange-400 opacity-70 hover:-100 transition-all group" >
            <div className= "w-full h-48 overflow-hidden">
                <Image
                width={300}
                height={200}
                src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
                alt="Thumbnail do projeto BookWise"
                unoptimized
                className="w-full h-full object-cover group-houver:scale-110 duration-500 transition-all"
                />
            </div>
            <div className = "flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-amber-500 transition-all" >BookWise</strong>                
                <p className ="mt-2 text-gray-400 line-clamp-4">BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o boootcamp</p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate" > Next.js Next Auth, Stiches, Radix, TypeScript, Prisma, React Query</span>
            </div>
        </div>
    )
} 