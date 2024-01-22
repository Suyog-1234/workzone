import { ReactNode, SVGProps } from "react";

export interface CommonComponentProps{
     children?:ReactNode,
     className?:string
}

export interface IconProps extends SVGProps<SVGSVGElement> {}
