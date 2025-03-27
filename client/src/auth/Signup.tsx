import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, PhoneOutgoing, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [input, setInput] = useState<SignupInputState>({
        fullname: '',
        email: '',
        password: '',
        contact: '',
    })
    const [errors, setErrors] = useState<Partial<SignupInputState>>({});

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();

        // form validation
        const result = userSignupSchema.safeParse(input)
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<SignupInputState>);
            return;
        }
        console.log(input)
    }
    const loading = false;
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 shadow-lg">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">MadhavEats</h1>
                </div>
                <div className="relative mb-4">
                    <Label className="mb-2">Full Name</Label>
                    <Input
                        type="text"
                        value={input.fullname}
                        name="fullname"
                        onChange={changeEventHandler}
                        placeholder="Enter your full name"
                        className="pl-9 focus-visible: ring-0"
                    />
                    <User className="absolute inset-y-7 left-2 text-gray-500 pointer-events-none" />
                    {errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
                </div>

                <div className="relative mb-4">
                    <Label className="mb-2">Email</Label>
                    <Input
                        type="email"
                        value={input.email}
                        name="email"
                        onChange={changeEventHandler}
                        placeholder="Enter your email"
                        className="pl-9 focus-visible: ring-0"
                    />
                    <Mail className="absolute inset-y-7 left-2 text-gray-500 pointer-events-none" />
                    {errors && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>

                <div className="relative mb-6">
                    <Label className="mb-2">Password</Label>
                    <Input
                        type="password"
                        value={input.password}
                        name="password"
                        onChange={changeEventHandler}
                        placeholder="Enter your password"
                        className="pl-9 focus-visible: ring-0"
                    />
                    <LockKeyhole className="absolute inset-y-7 left-2 text-gray-500 pointer-events-none" />
                    {errors && <span className="text-xs text-red-500">{errors.password}</span>}
                </div>

                <div className="relative mb-6">
                    <Label className="mb-2">Contact</Label>
                    <Input
                        type="text"
                        value={input.contact}
                        name="contact"
                        onChange={changeEventHandler}
                        placeholder="Enter your contact"
                        className="pl-9 focus-visible: ring-0"
                    />
                    <PhoneOutgoing className="absolute inset-y-7 left-2 text-gray-500 pointer-events-none" />
                    {errors && <span className="text-xs text-red-500">{errors.contact}</span>}
                </div>

                <div className="mb-4">
                    {
                        loading ? (
                            <Button disabled className="w-full bg-orange-400 hover:bg-orange-500 cursor-pointer"><Loader2 className="h-4 w-4 animate-spin" />Please Wait</Button>
                        ) : (
                            <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 cursor-pointer">Signup</Button>
                        )
                    }
                </div>
                <Separator className="mb-2" />
                <p>
                    Already have an account ? {" "}
                    <Link to='/login' className="text-blue-500 hover:underline">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup;