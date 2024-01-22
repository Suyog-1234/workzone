import { FC } from 'react'

interface ErrorMessageProps {
    error?:string
}

const ErrorMessage: FC<ErrorMessageProps> = ({error}) => {
  return (
      <p className='text-xs text-danger font-medium mt-2 capitalize'>{error}</p>
  )
}

export default ErrorMessage