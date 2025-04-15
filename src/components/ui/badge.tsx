
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: 
          "border-transparent bg-emerald-500 text-white dark:bg-emerald-600 dark:text-emerald-50 hover:bg-emerald-600 dark:hover:bg-emerald-700",
        warning:
          "border-transparent bg-amber-500 text-white dark:bg-amber-600 dark:text-amber-50 hover:bg-amber-600 dark:hover:bg-amber-700",
        info:
          "border-transparent bg-slate-700 text-white dark:bg-indigo-600 dark:text-indigo-50 hover:bg-slate-800 dark:hover:bg-indigo-700",
        popular:
          "border-transparent bg-amber-500 text-white dark:bg-amber-500 dark:text-white font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
