import Link from "next/link";
import Image from "next/image";
export default function Cta() {
    return(
        <section>
            <div className="w-full max-w animate-border rounded-2xl bg-conic/[from_var(--border-angle)] from-black via-[#ff6361] to-black from-0% via-10% to-20% p-px">
                <div className="p-10 text-center rounded-2xl bg-black">
                    <div className="flex justify-center md:block">
                        <Image src="/images/3d_hello.png" alt="hello" width={70} height={70} className="md:ml-100"/>
                    </div>
                    <h1 className="mb-5 text-5xl text-white font-black capitalize">Say <span className="gradientText">Hello</span> to your new Self!!</h1>
                    <div className="flex justify-center gap-5"><button className="bg-white text-black p-3 rounded-3xl">Join the Community</button><Link href="/call" className="text-white underline mt-3 font-bold">Book A Call</Link></div>
                </div>
            </div>
        </section>
    );
}