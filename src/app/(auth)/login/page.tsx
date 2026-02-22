import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";


const LoginPage=()=> {
  return (<div className="max-w-md mx-auto bg-cyan-500 p-8 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-6">Login</h1>
    <LoginForm/>
    <p className="mt-4 text-center">Don't have an account?
         <Link href="/register" className="text-blue-700 hover:underline">Register</Link></p>
  </div>);
  
}

export default LoginPage