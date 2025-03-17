'use client'

import {motion} from 'framer-motion';
import {ComponentProps} from 'react';

type TechBadgeProps = ComponentProps <typeof motion.span> & {
    name:String;
}

export const TechBadge =  ({name, ...props}: TechBadgeProps) => {
    return(
        <motion.span
         className="text-black bg-amber-400/80 text-sm py-1 px-3 rounded-lg"
         {...props}
         >
            {name}
        </motion.span>
    )
}
