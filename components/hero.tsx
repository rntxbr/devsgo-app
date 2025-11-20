
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
    
      <div className="flex gap-8 justify-center items-center">
      <Image src='/assets/img/devsgo.png' width={200} height={100} alt="logo" />
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Aprenda programação de verdade em code challenges exclusivos.
      
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
