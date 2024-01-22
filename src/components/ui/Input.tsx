import * as React from "react"

import { cn } from "@/lib/utils"
import ErrorMessage from "../authentication/ErrorMessage"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={cn(
            "flex  w-full rounded-sm bg-transparent border border-borderV1 hover:border-theme  px-4 py-4 text-xs placeholder:text-xs placeholder:text-textV1 focus:border-theme outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <ErrorMessage error={error}/>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
