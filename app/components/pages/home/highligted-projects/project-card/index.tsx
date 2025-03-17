'use client'

import Image from "next/image"
import { TechBadge } from "@/app/components/tech-badge"
import Link from "next/link"
import { HiArrowCircleRight } from "react-icons/hi"
import { Project } from "@/app/types/projects"
import { motion } from "framer-motion"
import { techBadgeAnimation } from "@/app/lib/animation"
import { fadeUpAnimation } from "@/app/lib/animation"

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
     

    return (
      <motion.div
        className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image
            width={420}
            height={304}
            src={project.thumbnail.url}
            alt={`Thumbnail do projeto ${project.title}`}
            className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
          />
        </motion.div>

        <div>
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </motion.h3>

        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {project.technologies.map((tech, i) => (
            <TechBadge
              name={tech.name}
              key={`${project.title}-tech-${tech.name}`}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay:  0.5 + i * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowCircleRight />
        </Link>
      </div>
    </motion.div>
  )
}