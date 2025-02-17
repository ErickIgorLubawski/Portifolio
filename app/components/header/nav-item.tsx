import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  href: string
  label: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href} className={cn(
        'text-amber-500 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-amber-500',
      )}
    >
      {label}
    </Link>
  )
}
