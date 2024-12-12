"use client";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReachUsSchema } from "@/schema/ReachUsSchema";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { toast } from "sonner";
import { PopoverClose } from "@radix-ui/react-popover";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { EventTypeData, OtherPlatformTypeData } from "@/data/ReachUs";
import { Input } from "@/components/ui/input";

function Form() {

  const [isLoading, setIsLoading] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const router = useRouter();

  const { register, handleSubmit, reset, setValue, setFocus, formState: { errors } } = useForm({
    resolver: zodResolver(ReachUsSchema)
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await axios.post("/api/v1/ReachUs", data);

      if (res.status === 201) {
        toast.success("Your Message Has Been Submitted Successfully!");
        setTimeout(() => {
          toast.success("We'll Get Back to You Within 48 Hours!");
        }, 2000);
        router.replace("/");
      } else if (res.status === 400) {
        toast.error("Please Fill All The Requierd Fields!");
      } else if (res.status === 500) {
        toast.error("Failed To Process Your Reach Us Form. Please Try Again Later!");
      }
    } catch (error) {
      toast.error("Oops! Something Went Wrong. Please Try Again Later!");
    } finally {
      setIsLoading(false);
      reset();
      setFromDate(null);
      setToDate(null);
      setFocus("name");
    }
  }

  return (
    <motion.form
      initial={{
        filter: "blur(10px)",
        opacity: 0,
        y: 5,
      }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-6 xl:w-1/2">

      <div className="flex flex-col gap-2">
        <Label>Full Name*</Label>
        <Input type="text" disabled={isLoading} placeholder="Harshit Jain" {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <Label>Mobile No*</Label>
        <Input type="tel" disabled={isLoading} placeholder="+91 00000 00000" minLength={10} maxLength={10} {...register("mobileNo")} />
        {errors.mobileNo && <p className="text-red-500">{errors.mobileNo.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <Label>Email*</Label>
        <Input type="email" disabled={isLoading} placeholder="demo@company.com" {...register("email")} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Event Type*</p>
        <Select disabled={isLoading} onValueChange={(value) => setValue('eventType', value, { shouldValidate: true })} defaultValue={""}>
          <SelectTrigger>
            <SelectValue placeholder="Select An Event Type" />
          </SelectTrigger>
          <SelectContent>
            {EventTypeData.map((data, index) => (
              <SelectItem key={index} value={data.type}>
                {data.type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.eventType && <p className="text-red-500">{errors.eventType.message}</p>}
      </div>

      <div className="flex flex-col w-full gap-6 md:gap-2 md:flex-row">

        <div className="flex flex-col gap-2 md:w-1/2">
          <Label>Event Start Date*</Label>
          <Popover disabled={isLoading}>
            <PopoverTrigger asChild>
              <Button type="button" disabled={isLoading} variant="date" className="justify-start">
                {fromDate ? format(fromDate, "dd-MM-yyyy") : <span className="text-neutral-500">DD-MM-YYYY</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" disabled={isLoading}>
              <PopoverClose asChild>
                <span>
                  <Calendar mode="single" selected={fromDate} onSelect={(value) => { setFromDate(value); setValue("eventFromDate", value, { shouldValidate: true }) }} defaultValue={""} initialFocus />
                </span>
              </PopoverClose>
            </PopoverContent>
          </Popover>
          {errors.eventFromDate && <p className="text-red-500">{errors.eventFromDate.message}</p>}
        </div>

        <div className="flex flex-col gap-2 md:w-1/2">
          <Label>Event End Date*</Label>
          <Popover disabled={isLoading}>
            <PopoverTrigger asChild>
              <Button type="button" disabled={isLoading} variant="date" className="justify-start">
                {toDate ? format(toDate, "dd-MM-yyyy") : <span className="text-neutral-500">DD-MM-YYYY</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" disabled={isLoading}>
              <PopoverClose asChild>
                <span>
                  <Calendar mode="single" selected={toDate} onSelect={(value) => { setToDate(value); setValue("eventToDate", value, { shouldValidate: true }) }} defaultValue={""} initialFocus />
                </span>
              </PopoverClose>
            </PopoverContent>
          </Popover>
          {errors.eventToDate && <p className="text-red-500">{errors.eventToDate.message}</p>}
        </div>

      </div>

      <div className="flex flex-col gap-2">
        <Label>Event Location*</Label>
        <Input type="text" disabled={isLoading} placeholder="Chennai, TamilNadu" {...register("eventLocation")} />
        {errors.eventLocation && <p className="text-red-500">{errors.eventLocation.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Where Did You Hear About Us?*</p>
        <Select disabled={isLoading} onValueChange={(value) => setValue('hearAboutUs', value, { shouldValidate: true })} defaultValue={""}>
          <SelectTrigger>
            <SelectValue placeholder="Select An Platform" />
          </SelectTrigger>
          <SelectContent>
            {OtherPlatformTypeData.map((data, index) => (
              <SelectItem key={index} value={data.type}>
                {data.type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.hearAboutUs && <p className="text-red-500">{errors.hearAboutUs.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <Label>Message</Label>
        <textarea disabled={isLoading} {...register("bodyMessage")} placeholder="Type Your Message ...." rows="5" className="p-3 bg-transparent border rounded-lg resize-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-neutral-500 border-neutral-400 focus:border-black focus:outline-none"></textarea>
        {errors.bodyMessage && <p className="text-red-500">{errors.bodyMessage.message}</p>}
      </div>

      <div className="flex justify-end">
        <Button size={"lg"} type="submit" disabled={isLoading} className="flex justify-center w-40">
          {!isLoading ? "Submit" : <Loader2 className="animate-spin" />}
        </Button>
      </div>

    </motion.form>
  );
}

export default Form;
