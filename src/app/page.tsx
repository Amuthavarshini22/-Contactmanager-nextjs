import Image from "next/image";

export default function Home() {
  return <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-5 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950" >
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-400">Welcome to Contact Manager</h1>
      <p className="mt-2 text-lg text-white ">Manage your contacts easily and efficiently</p>
      <Image src="/phone.jpg" alt="contact manager" width={500}
      height={300} className="rounded-lg shadow-lg" />
      </div>
      <div className="text-center">
      <p className="mt-2 text-lg text-white">Start managing your contacts today!</p>
      <div></div>
      </div>
      </div>
};
