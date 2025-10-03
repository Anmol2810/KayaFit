"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { ReactLenis, useLenis } from 'lenis/react'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, index }) => {
    return (
        <div className="card" id={`card-${index + 1}`}>
            <div className="card-inner">
                <div className="card-content">
                    <h1 className="card-head">{title}</h1>
                    <p className="card-para">{copy}</p>
                </div>
                <div className="card-img mt-4">
                    <img src={`/images/card-${index + 1}.jpg`} alt={title}/>
                </div>
            </div>
        </div>
    );
};
export default function Program(){
    const cards = [
        {
            title:"Weight Management",
            copy:"Transform your body and lifestyle with Kayafit's personalized weight management plans. Our approach combines customized diet plans, expert coaching, and sustainable habits to help you lose weight, build muscle, and maintain long-term results. Experience a healthier, more confident you with a plan that fits your unique goals.",
        },
        {
            title:"Workout Sessions",
            copy:"Get fit from anywhere with Kayafit's exclusive online workout sessions—available live and on-demand. Our expert trainers lead you through HIIT, strength training, yoga, cardio, and more with routines designed to motivate, challenge, and transform you. No matter your fitness level, experience engaging, effective workouts right from home.",
        },
        {
            title:"Nutrition Consultation",
            copy:"Fuel your body and reach your goals with our personalized nutrition consultations. Our certified nutritionists create tailored meal plans to help you boost energy, manage weight, and achieve lasting health. We emphasize balanced, sustainable eating habits so you can enjoy food while staying on track.",
        },
        {
            title:"Injury Recovery",
            copy:"Recover safely and confidently with Kayafit's injury recovery programs designed to restore strength, mobility, and confidence. Our expert-led routines focus on rehabilitation and long-term recovery, helping you get back to doing what you love—pain-free.",
        },
    ];

    const container = useRef();
    useGSAP(() => {
        const cards = gsap.utils.toArray(".card");

        ScrollTrigger.create({
            trigger: cards[0],
            start: "top 30%",
            endTrigger: cards[cards.length-1],
            end: "top 30%",
            pin: ".intro",
            pinSpacing: false,
        });

        cards.forEach((card, index) => {
            const isLastCard = index === cards.length - 1;
            const cardInner = card.querySelector(".card-inner");

            if (!isLastCard) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 26%",
                    endTrigger: ".outro",
                    end: "top 30%",
                    pin: true,
                    pinSpacing: false,
                });

                gsap.to(cardInner,{
                    y: `${(cards.length - index - 2)}vh`,
                    ease: "none",
                    ScrollTrigger: {
                        trigger: card,
                        start: "top 30%",
                        endTrigger: ".outro",
                        end: "top 30%",
                        scrub: true,
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, 
    {scope: container}
);


    return (<ReactLenis root>
    <div className="overflow-x-clip" ref={container}>
    <section className="intro">
        <h1 className="intro-head">At <span className="bg-gradient-to-b from-[#14AE5C] to-[#164D30] text-transparent bg-clip-text">Kayafit</span>, we help you become your best self with personalized fitness, nutrition, and recovery solutions!</h1>
    </section>
    <section className="cards bg-white">
        {cards.map((card, index) => (
            <Card key={index} {...card} index={index}/>
        ))}
    </section>
    <section className="outro flex-col"><h1 className="intro-head md:mt-15 mt-25">Take the <span className="gradientText font-black capitalize">first step</span> towards a healthier, fitter, and more confident you—Join Kayafit today!</h1>
    <div className="flex justify-center md:mt-5">
            <button className="capitalize text-[18px] md:text-[25px] md:mt-15"><Link href="/programs" className="cursor-pointer transition-all bg-[#fdfdfd] md:text-[25px] text-[15px] text-black px-6 py-2 rounded-3xl border-[#959595] border b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]mb-5">Explore</Link> more about our Programs</button>
    </div>
    </section>
    </div>
    </ReactLenis>
    );
}