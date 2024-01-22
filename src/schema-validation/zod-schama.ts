import {z} from "zod"

export const FirmLoginSchema = z.object({
      email:z.string().min(1,{message:"comapany name is required"}),
      password:z.string().min(8,{message:"password must be 8 characters long"}).max(16,{message:"password should have max 16 characters ."}),
})

export type FirmLoginInput = z.infer<typeof FirmLoginSchema>

export const FirmRegisterSchema = z.object({
      companyName:z.string().min(1,{message:"companyName is required"}),
      industryType:z.string().min(1,{message:"industryType is required"}),
      bussinessType:z.string().min(1,{message:"bussinessType is required"}),
      staffRange:z.string().min(1,{message:"staffRange is required"}),
      companyLogo:z.object({}),
      streetAddress:z.string().min(1,{message:"streetAddress is required"}),
      country:z.string().min(1,{message:"country is required"}),
      postalCode:z.string().min(1,{message:"postalCode is required"}),
      contactNumber:z.string().min(1,{message:"contactNumber is required"}),
      companyEmail:z.string().min(1,{message:"companyEmail is required"}),
      username:z.string().min(1,{message:"username is required"}),
      password:z.string().min(1,{message:"password is required"}),
})

export type FirmRegisterInput = z.infer<typeof FirmRegisterSchema>