export default function Hero() {
    return(
        <section className="">
            <header className="relative flex items-center 
            justify-center h-screen mb-12 
            overflow-hidden">
            <div className="relative z-20 p-5 text-2xl">
                <div className="slot text-[#D9D9D9] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] overflow-hidden">
                    <div className="letter1 sm:px-5 px-2">
                        <p>B</p>
                        <p>A</p>
                        <p>F</p>
                        <p>W</p>
                        <p>K</p>
                    </div>
                    <div className="letter2 sm:px-5 px-2">
                        <p>A</p>
                        <p>T</p>
                        <p>I</p>
                        <p>O</p>
                        <p>A</p>
                    </div>
                    <div className="letter3 sm:px-5 px-2">
                        <p>L</p>
                        <p>H</p>
                        <p>T</p>
                        <p>R</p>
                        <p>Y</p>
                    </div>
                    <div className="letter4 sm:px-5 px-2">
                        <p>A</p>
                        <p>L</p>
                        <p>N</p>
                        <p>K</p>
                        <p>A</p>
                    </div>
                    <div className="letter5 sm:px-5 px-2">
                        <p>N</p>
                        <p>E</p>
                        <p>E</p>
                        <p>O</p>
                        <p>F</p>
                    </div>
                    <div className="letter6 sm:px-5 px-2">
                        <p>C</p>
                        <p>T</p>
                        <p>S</p>
                        <p>U</p>
                        <p>I</p>
                    </div>
                    <div className="letter7 sm:px-5 px-2">
                        <p>E</p>
                        <p>E</p>
                        <p>S</p>
                        <p>T</p>
                        <p>T</p>
                    </div>          
                </div>
                <div className="flex justify-center mt-5 p-2">
                <div className="gird text-center">
                    <h1 className="text-[35px] py-2 uppercase font-bold tracking-[0.5rem] md:tracking-[1.8rem] bg-gradient-to-b from-[#DCFFEC] to-[#00C05A] text-transparent bg-clip-text">Balancing Life</h1>
                </div>
                </div>
            </div>
            <video id="background-video" autoPlay loop muted className="brightness-60">
                <source src="/hero.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>
            </header>
        </section>
    );
}