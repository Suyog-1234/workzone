"use client";

import { cn } from "@/lib/utils"
import IconEye from "../svg/IconEye"
import React, { useState } from "react"
import IconEyeClose from "../svg/IconEyeClose";
import ErrorMessage from "../authentication/ErrorMessage";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string
}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, ...props }, ref) => {
        const [tooglePass, setTooglePass] = useState<boolean>(false);

        return (
            <div className="">
                <div className="relative">
                    <input
                        type={tooglePass ? "text" : "password"}
                        className={cn(
                            "flex  w-full rounded-sm bg-transparent border border-borderV1 hover:border-theme focus:border-theme  px-4 py-4 text-xs placeholder:text-xs placeholder:text-textV2 outline-none",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    <span className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 end-4" onClick={() => setTooglePass(!tooglePass)}>{tooglePass ? <IconEye className="w-5 h-5 text-textV1" /> : <IconEyeClose className="w-5 h-5 text-textV1" />}</span>
                </div>
                {error && <ErrorMessage error={error}/>}
            </div>
        )
    }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
