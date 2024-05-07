'use client'

import { useEffect, useState } from "react"
import Heading from "../components/Heading"
import Input from "../components/inputs/Input"
import { FieldValues, SubmitHandler, useForm} from "react-hook-form"
import Button from "../components/Button"
import Link from "next/link"
import { AiOutlineGoogle } from "react-icons/ai"
import { signIn } from "next-auth/react"
import router from "next/navigation"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { SafeUser } from "../../../types"

interface LoginFormPrps{
    currentUser : SafeUser | null
}

const LoginForm: React.FC<LoginFormPrps> = ({currentUser}) => {
    const [isLoading, setISLoading] = useState(false)
    const {register, handleSubmit , formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            email: '',
            password: '',
        }
    })

    const router = useRouter()
    useEffect(()=>{
        if(currentUser){
            router.push('/cart')
            router.refresh();
        }
    }, [])

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
        setISLoading(true)
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) =>{
            setISLoading(false)
            if(callback?.ok){
                router.push('/cart')
                router.refresh()
                toast.success('Logged In')
            }
            if(callback?.error){
                toast.error(callback.error)
            }
        });
        if(currentUser){
            return <p className="text-center">Logged In. Redirecting . . . </p>
        }
        
    }

    

  return (
    <>
    <Heading title="Signin to Musix~Shop" />
    {/* <Button
    outline
    label="Continue with Google"
    icon={AiOutlineGoogle}
    onClick ={() =>{}}/> */}
    <hr className="bg-slate-300 w-full h-px"/>
    <Input
    id="email"
    label="Email"
    disabled={isLoading}
    register={register}
    errors={errors}
    required/>
    <Input
    id="password"
    label="Password"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    type="password"/>
    <Button label = {isLoading? "Loading" : 'Login'} onClick={handleSubmit(onSubmit)}/> 
    <p className="text-sm text-center">
        Do not have an account? <Link className="underline" href="/register">Sign up</Link>
    </p>
    </>
  )
}

export default LoginForm