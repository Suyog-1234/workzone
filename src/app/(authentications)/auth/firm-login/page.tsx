"use client";
import { FC, useState } from 'react'
import CommonFormHeader from '@/components/authentication/CommonFormHeader'
import CommonFormWrapper from '@/components/authentication/CommonFormWrapper'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { PasswordInput } from '@/components/ui/PasswordInput'
import Link from 'next/link'
import {useForm,SubmitHandler} from "react-hook-form";
import { FirmLoginSchema,FirmLoginInput } from '@/schema-validation/zod-schama';
import {zodResolver} from "@hookform/resolvers/zod";

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  
   const {register,formState,handleSubmit} = useForm<FirmLoginInput>({
       resolver:zodResolver(FirmLoginSchema)
   });

    const {errors} = formState;

    const handleFormSubmit : SubmitHandler<FirmLoginInput> = (formData)=>{
          console.log(formData)
          alert(`${formData.email} ${formData.password}`)
    }

  return (
    <CommonFormWrapper className="max-w-full md:max-w-[75%] lg:max-w-[65%] 2xl:max-w-[50%] rounded-sm">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <CommonFormHeader className="mb-8 md:mb-10" title='Welcome 👋 ' subtitle='Please login here' />
        <div className="form-body mb-8 md:mb-10">
          <div className="form-group mb-6">
            <Label className='mb-3'> Username</Label>
            <Input error={errors.email?.message} type='email' placeholder='username' {...register("email")} />
          </div>
          <div className="form-group mb-6">
            <Label className='mb-3'>Password</Label>
            <PasswordInput error={errors.password?.message} autoComplete='current-password' type='password' placeholder='password' {...register("password")} />
          </div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="form-group  flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor='remember' className='cursor-pointer'>Remember Me</Label>
            </div>
            <Link href="/forget-password">
              Forget Password
            </Link>
          </div>
        </div>
        <div className="form-footer">
          <Button type='submit'>
            Login
          </Button>
        </div>
      </form>
    </CommonFormWrapper>
  )
}

export default page;
