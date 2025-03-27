import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState<LoginInputState>({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<Partial<LoginInputState>>({});

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        // form validation
        const result = userLoginSchema.safeParse(input)
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<LoginInputState>);
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

                <div className="mb-4">
                    {
                        loading ? (
                            <Button disabled className="w-full bg-orange-400 hover:bg-orange-500 cursor-pointer"><Loader2 className="h-4 w-4 animate-spin" />Please Wait</Button>
                        ) : (
                            <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 cursor-pointer">Login</Button>
                        )
                    }
                </div>
                <Separator className="mb-2" />
                <p>
                    Don't have an account ? {" "}
                    <Link to='/signup' className="text-blue-500 hover:underline">Signup</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;