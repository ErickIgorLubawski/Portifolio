import { cn } from "@/app/lib/utils";

type HorizontalDivideProps = {
  className?: string;
}

export const HorizontalDivider = ({className}:HorizontalDivideProps) => {
    return(
        <div className={cn('w-full my-8 border-b border-gray-800', className)}></div>    
    )
}