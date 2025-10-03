import Image from "next/image";
export default function Benefit() {
    return (
      <section id="benifits" className="py-10 bg-gradient-to-t from-[#ffb158] to-[#ffffff] text-center rounded-b-3xl">
        <div className="flex justify-center">
          <h1 className="capitalize bg-[#ffb158] text-[18px] font-bold text-white rounded-xl mb-5 px-3 py-2">Why choose us ?</h1>
        </div>
        <h1 className="md:text-5xl text-2xl text-black md:px-20 mb-10 font-bold">Real Fitness, Real Results—Fun, Achievable, and Life-Changing!</h1>
        <div className="cards-container mt-5">
          <div className="card-benefit p-0">
            <Image src="/Images/community_card1.jpg" alt="Community" className="rounded-t-[13px]" height={200} width={450}/>
            <div className="content">
              <p className="heading capitalize">Connect with Like-Minded Athletes & Thrive!</p>
              <p className="paragraph">
                Join a community of passionate athletes who motivate, support, and push each other to reach new heights!.
              </p>
            </div>
          </div>
  
          <div className="card-benefit">
          <Image src="/Images/weighing_card2.jpg" alt="weighing machine" className="rounded-t-[13px]" height={200} width={450}/>
                  <div className="content">
                      <p className="heading capitalize">Make your fitness journey more fun & realistic</p>
                      <p className="paragraph">
                        Stay motivated with engaging workouts, personalized plans, and a supportive community—fitness made enjoyable!
                      </p>
                  </div>
            </div>
  
            <div className="card-benefit">
            <Image src="/Images/planner_card3.jpg" alt="planner" className="rounded-t-[13px]" height={200} width={450}/>
            <div className="content">
              <p className="heading capitalize">Progress tracking becomes easier and faster</p>
              <p className="paragraph">
              Stay on track and achieve your goals faster with expert guidance, personalized plans, and monthly progress reviews.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  