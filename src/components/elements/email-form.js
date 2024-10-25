'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const EmailForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  })

  return (
    <div className='flex my-8'>
      <Form {...form}> 
        <form className='relative w-[500px] max-w-full'>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="hello@socialboost.com" 
                    className="focus:!ring-0 h-12 rounded-xl bg-white text-black text-xs" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="text-white absolute right-0 rounded-xl top-0 h-full variant-secondary px-3 bg-black">
            Get started!
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default EmailForm
