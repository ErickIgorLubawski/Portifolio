type TechBadgeProps = {
    name:String;
}

export const TechBadge =  ({name}: TechBadgeProps) => {
    return(
        <span className="text-black bg-amber-400/80 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}
