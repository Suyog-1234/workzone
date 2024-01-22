import { cn } from '@/libs/utils'
import { CommonComponentProps } from '@/types/common'
import { FC } from 'react'

interface CommonFormHeaderProps extends CommonComponentProps{
    title?:string,
    subtitle?:string
}

const CommonFormHeader: FC<CommonFormHeaderProps> = ({title,subtitle,className}) => {
    return (
        <div className={cn("form-header",className)}>
            <h3 className='text-textV1 text-xl sm:text-2xl font-semibold mb-2'>{title}</h3>
            <p className='text-textV2 text-xs sm:text-sm font-thin'>{subtitle}</p>
        </div>
    )
}

export default CommonFormHeader