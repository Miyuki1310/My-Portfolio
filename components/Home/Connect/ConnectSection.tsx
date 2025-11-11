'use client'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { TbBrandGithubFilled } from 'react-icons/tb'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ConnectFormData } from '@/types/Type'
import { motion } from "framer-motion";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    message: yup.string().required("Message is required"),
}).required()

const ConnectSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: ConnectFormData ) => {
        console.log(data);
    }
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16'>
        <div className="flex flex-col gap-4">
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>Schedule a call with me to see if I can help</h2>
            <p className='text-gray-400 text-base sm:text-lg'>Reach out to me through my phone/email today and let’s discuss how I can help you achieve your goals.</p>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <BiPhone className='w-9 h-9 text-cyan-300'/>
                    <p className='text-xl font-bold text-gray-400'>096148743</p>
                </div>
                <div className="flex items-center gap-3">
                    <BiEnvelope className='w-9 h-9 text-cyan-300'/>
                    <p className='text-xl font-bold text-gray-400'>nguyenkhanhhuan13102003@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                    <BiMap className='w-9 h-9 text-cyan-300'/>
                    <p className='text-xl font-bold text-gray-400'>HCM, Vietnam</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-blue-800">
                    <FaFacebookF className='w-6 h-6 text-white' />
                </div>
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-sky-400">
                    <FaLinkedinIn className='w-6 h-6 text-white' />
                </div>
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black">
                    <TbBrandGithubFilled className='w-6 h-6 text-white' />
                </div>
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-600">
                    <FaYoutube className='w-6 h-6 text-white' />
                </div>
            </div>
        </div>
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} 
            className="p-5 md:p-10 bg-blue-950/20 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                <input className='px-4 py-3.5 bg-[#363659] text-white outline-none placeholder:text-white/70 rounded-md' {...register("name")} placeholder="Enter your name" />
                {errors.name && <p className='text-red-500 text-sm -mt-4'>{errors.name.message}</p>}
                <input className='px-4 py-3.5 bg-[#363659] text-white outline-none placeholder:text-white/70 rounded-md' {...register("email")} placeholder="Enter your email" />
                {errors.email && <p className='text-red-500 text-sm -mt-4'>{errors.email.message}</p>}
                <input className='px-4 py-3.5 bg-[#363659] text-white outline-none placeholder:text-white/70 rounded-md' {...register("phone")} placeholder="Enter your phone number" />
                {errors.phone && <p className='text-red-500 text-sm -mt-4'>{errors.phone.message}</p>}
                <textarea className='px-4 py-3.5 bg-[#363659] text-white outline-none placeholder:text-white/70 rounded-md h-40' {...register("message")} placeholder="Enter your message" />
                {errors.message && <p className='text-red-500 text-sm -mt-4'>{errors.message.message}</p>}
                <button className='cursor-pointer px-12 py-4 rounded-full bg-blue-950 hover:bg-blue-900 transition-all duration-300 w-fit' type="submit">Send Message</button>
            </form>
        </motion.div>
    </div>
  )
}

export default ConnectSection