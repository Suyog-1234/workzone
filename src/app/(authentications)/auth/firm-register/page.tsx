"use client";

import { FC } from 'react';
import CommonFormHeader from '@/components/authentication/CommonFormHeader';
import CommonFormWrapper from '@/components/authentication/CommonFormWrapper';
import FileUploader from '@/components/ui/FileUploader';
import { Button } from '@/components/ui/Button';
import DynamicSelect from '@/components/ui/DynamicSelect';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { businessTypes, countries, staffRanges, industries } from '@/data/static';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm ,SubmitHandler} from 'react-hook-form';
import { FirmRegisterSchema,FirmRegisterInput } from '@/schema-validation/zod-schama';
import { zodResolver } from '@hookform/resolvers/zod';
interface PageProps { }

const Page: FC<PageProps> = ({ }) => {
  const form = useForm<FirmRegisterInput>({
     resolver:zodResolver(FirmRegisterSchema)
  });

  const onSubmit :SubmitHandler<FirmRegisterInput> = (data) => {
         console.log(data)
  }

  return (
    <CommonFormWrapper className="max-w-full md:max-w-[75%] lg:max-w-[90%] 2xl:max-w-[80%] rounded-sm">
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)}>
          <CommonFormHeader className="mb-8 md:mb-10" title="Welcome to Firm Registration 👋" subtitle="Please provide your company details below." />
          <div className="form-body form-details-sections-wrapper mb-8 md:mb-10">
            <div className="mb-10 sub-details-sub-section">
              <div className="mb-8">
                <h3 className="mb-2 text-xl text-theme">Company Overview Details</h3>
                <p className="text-xs text-textV2">Provide accurate details to ensure a comprehensive dashboard interface tailored to your firm.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="industryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <FormControl>
                          <DynamicSelect onChange={field.onChange} data={industries} placeholder="Select industry type" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="bussinessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <FormControl>
                          <DynamicSelect onChange={field.onChange} data={businessTypes} placeholder="Select business type" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="staffRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Staff Range</FormLabel>
                        <FormControl>
                          <DynamicSelect data={staffRanges} onChange={field.onChange} placeholder="Select staff range" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="form-group col-span-2">
                  <FormField
                    control={form.control}
                    name="companyLogo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Logo</FormLabel>
                        <FormControl>
                          <FileUploader onChange={field.onChange}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="mb-10 sub-details-sub-section">
              <div className="mb-8">
                <h3 className="mb-2 text-xl text-theme">Company Location Details</h3>
                <p className="text-xs text-textV2">Provide accurate details to ensure a comprehensive dashboard interface tailored to your firm's address.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Street Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <DynamicSelect data={countries} onChange={field.onChange} placeholder="Select country" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                          <Input type='number' placeholder="Enter Postal Code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="mb-10 sub-details-sub-section">
              <div className="mb-8">
                <h3 className="mb-2 text-xl text-theme">Company Contact Details</h3>
                <p className="text-xs text-textV2">Provide accurate details to ensure a comprehensive dashboard interface tailored to your firm's communication needs.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Enter contact number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="companyEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter company email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-8">
                <h3 className="mb-2 text-xl text-theme">Credentials Details</h3>
                <p className="text-xs text-textV2">Set up login credentials for accessing the firm dashboard.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="form-group">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <Button type="submit">Register Firm</Button>
          </div>
        </form>
      </Form>
    </CommonFormWrapper>
  );
};

export default Page;
