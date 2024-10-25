'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import SparklesText from "@/components/ui/sparkles-text";
import MainBtn from "@/components/elements/buttons/main-btn"
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import BoostText from "@/components/elements/animations/text/boost-text"
import { SelectGroup, SelectLabel } from "@radix-ui/react-select"

const services = [
  {
    category: "Consultation",
    items: [
      { title: "SMM Strategy" },
      { title: "Content Creation" },
      { title: "Ad Campaigns" },
      { title: "Analytics & Reporting" },
      { title: "Brand Reputation" },
    ]
  },
  {
    category: "Services",
    items: [
      { id: 0, title: "SEO" },
      { id: 1, title: "Targeted Ads" },
      { id: 2, title: "Content Creation" },
      { id: 3, title: "Email Marketing" },
      { id: 4, title: "Web Design" },
      { id: 5, title: "Analytics" },
    ]
  }
];

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  service: z.string({ required_error: "Please select a service." }),
  date: z.date({ required_error: "Please select a date." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="container mx-auto px-4 py-12"> 
        <div className="container mx-auto">
          <div className="w-full mx-auto md:my-10 flex flex-col items-start gap-5">
            <p className="text-lg">
              Interested? Let&apos;s talk.
            </p>
            <SparklesText text="Contact Us" sparklesCount={5} className="text-left font-[family-name:var(--font-clash)] text-[#333]" />
            <BoostText text="We'd love to hear from you. Please fill out the form below or use our contact information to get in touch with us." speed={0.5} boostedElement="words" direction="left" strength={2} />
          </div>
        </div>
      
      <div className="flex mobile:flex-col gap-12">
        {/* Contact Form */}
        <div className="w-3/4 mobile:w-full space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} className="h-12 text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} className="h-12 text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@example.com" {...field} className="h-12 text-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-4 items-end">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 text-lg">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((category) => (
                            <SelectGroup key={category.category} className="space-y-1">
                              <SelectLabel className="px-2 font-medium border-y py-1">{category.category}</SelectLabel>
                              {category.items.map((item) => (
                                <SelectItem key={item.title} value={item.title}>
                                  {item.title}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "h-12 text-lg font-normal justify-start text-left",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[200px] text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> 
              <MainBtn text="Send it!" /> 
            </form>
          </Form>
        </div>

        {/* Contact Details */}
        <div className="w-1/4 mobile:w-full space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-muted-foreground w-5 h-5" />
              <span className="text-base">contact@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-muted-foreground w-5 h-5" />
              <span className="text-base">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-muted-foreground w-5 h-5" />
              <span className="text-base">123 Main St, Anytown, USA 12345</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-4 text-muted-foreground hover:text-primary">
                <Facebook className="w-5 h-5" />
                <span className="text-lg">Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-4 text-muted-foreground hover:text-primary">
                <FaXTwitter className="w-5 h-5" />
                <span className="text-lg">Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-4 text-muted-foreground hover:text-primary">
                <IoLogoInstagram className="w-5 h-5" />
                <span className="text-lg">Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-4 text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
                <span className="text-lg">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}