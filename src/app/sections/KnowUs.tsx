import Image from "next/image";
import model from "@/app/assets/page1img.png";
import TrainingNowIndicator from "@/app/component/community";

export default function KnowUs() {
    return(
        <section>
            <div className="pt-[20px] lg:pt-[80px] px-[20] lg:px-[80px]">
                <h1 className="md:text-5xl text-2xl text-center md:text-left m-2 p-2 font-bold tracking-tight text-[#dfdfdf]">Start Your <strong className = "bg-gradient-to-b from-[#4A75FF] to-[#BAC5FF] text-transparent bg-clip-text">Transformation</strong> Journey Here</h1>
                <div className="flex justify-between">
                    <div>
                        <p className="text-[#dfdfdf] text-md text-center md:text-left mt-5 md:text-xl p-3">At Kayafit, <span className="italic">we believe fitness is more than just a routine—it's a lifestyle.</span> Inspired by the Hindi word <b className="bg-gradient-to-b from-[#BAC5FF] to-[#4A75FF] text-transparent bg-clip-text">“Kaya”</b> meaning appearance of oneself, we empower individuals to transform their bodies and minds through expert-led weight management programs, online fitness classes, and personalized nutrition consulting. Whether you're looking to shed extra pounds, build strength, or adopt a healthier lifestyle, Kayafit provides science-backed solutions tailored to your unique goals. Join our community today and take the first step towards a stronger, healthier, and more confident you!</p>
                        <div className="flex justify-center py-2 m-2 md:block">
                            <button className="mx-2 cursor-pointer transition-all bg-[#fdfdfd] md:text-[21px] text-black px-6 py-2 rounded-3xl border-[#959595] border b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]mb-5"><a href="/">Join Now</a></button>
                            <TrainingNowIndicator/>
                        </div>
                    </div>
                    <Image src={model} alt="woman model" width={320} className="hidden lg:block"/>
                </div>
            </div>
        </section>
    );
}