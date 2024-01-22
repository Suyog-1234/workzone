import { cn } from '@/libs/utils'
import { CommonComponentProps } from '@/types/common'
import { FC, ReactNode } from 'react'

interface CommonFormWrapperProps extends CommonComponentProps {
  
}

const CommonFormWrapper: FC<CommonFormWrapperProps> = ({children,className}) => {
    return (
        <div className={cn('bg-backgroundV2  p-6 xxs:p-8 md:p-10 mx-auto w-full',className)}>
            {children}
        </div>
    )
}

export default CommonFormWrapper