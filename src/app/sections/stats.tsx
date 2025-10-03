import Image from 'next/image';
export default function Stats() {
    return (
        <section className="text-center py-20 px-20">
            <div className="md:flex gap-20">
                <div className='md:flex md:w-[800px]'>
                    <div className='text-white'>
                        <div className='mt-5 text-xl md:text-left text-[#00C05A]'>Results</div>
                        <h2 className='text-[35px] mt-10 md:text-left font-bold leading-none'>Proven success in transforming lives.</h2>
                        <p className='traking-tight mt-10 mb-10 text-center md:text-left text-[18px]'>Join the thousands who have achieved their fitness goals with us. Our Programs are designed for real results and lasting change.</p>
                        <div className="gridNew">
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold tracking-tighter text-[#00C05A]'>🔥150K</h1>
                                <h3 className="text-xl font-bold my-2 uppercase">Calories Burned</h3>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold tracking-tighter text-[#00C05A]'>⌛5+</h1>
                                <h3 className="text-xl font-bold my-2 uppercase">Years of experience</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-center">
                    <Image src="/Images/stats.png" alt='statistic' className='rounded-3xl border-[2px] border-[conic/[from_0deg] from-black via-[#00C05A] to-black]' width={300} height={500}/>
                </div>
            </div>
        </section>
    );
  };
  