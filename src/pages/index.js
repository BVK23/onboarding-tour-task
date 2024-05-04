import Header from "../components/Header";
import Footer from "../components/Footer";
import StepsAnimation from "@/components/StepsAnimation";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import { parseCookies } from 'nookies';

import { useState, useEffect } from 'react';
import Link from "next/link";



const Home = () => {

  const text = "MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES. MAD LIFE. MAD VIBES.";

  const handleClickScroll = () => {
    const element = document.getElementById('plan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
     <div className="relative flex items-start justify-center flex-col max-w-[1200px] mx-auto min-h-[calc(100vh-180px)] md:min-h-[calc(100vh-150px)] md2:min-h-[calc(100vh-170px)] lg2:min-h-[calc(100vh-200px)]">
     <Header/>
     <img src="/images/circle1.svg" alt="circle bg" className="absolute -top-[200px] sm2:-top-[300px] -right-[200px] sm2:-right-[350px] sm:-right-[500px]" />

     <Fade bottom>
      <div className="mainCont relative text-main-dark mt-[120px] md:mt-[160px] lg2:mt-[150px] z-30" style={{marginLeft: "0px", marginRight: "0px"}}>
       <div className="text-[35px] sm3:text-[40px] sm:text-[55px] md:text-[65px] leading-[50px] sm:leading-[117%] lg2:text-[80px]">Build a mad story to <br className="hidden sm:flex"/>attract jobs with <br className="hidden sm:flex"/><span className="text-main font-semibold inline-flex whitespace-nowrap">Unibot!</span></div>
       <Link href="/framework" className="mainButton flex items-center gap-3 border border-main-dark rounded-full transition hover:bg-main hover:text-white hover:border-main font-medium text-[19px] w-fit px-5 py-3 mt-5 md:mt-10 lg2:mt-10 lg2:text-[25px]">Yes, I'm in! <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor"/></svg></Link>
      </div>
      </Fade>
     </div>
     <div className="flex items-center justify-center mt-24 absolute bottom-0 left-1/2 -translate-x-1/2 z-30"><button onClick={handleClickScroll}><img src="/images/search-group.svg" alt="search icon" className="animate-bounce" /></button></div>

     
     
     
     <div id="plan" className="mainCont relative flex items-center justify-center flex-col md2:min-h-screen -scroll-my-[100px] mt-[100px]">
     <div className="relative text-main-dark mt-[150px] md2:mt-[200px] z-30">
     <Fade bottom>

      <div className="text-[35px] sm3:text-[42px] text-center mb-5">The <span className="text-main font-semibold">Unimad</span> framework 💡</div>
      </Fade>
      <Fade bottom>
       <div className="flex items-center justify-center">
        <StepsAnimation/>
       </div>
      </Fade>
      <Fade bottom>
      <Link href="/login" className="button2 bg-main transition hover:bg-main-dark text-white flex items-center gap-3 text-center font-medium rounded-full w-fit px-6 py-4 mt-10 mx-auto">Get my Plan <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16L7.075 14.6L12.675 9Z" fill="white"/></svg></Link>
      </Fade>
     </div>

    </div>
     
     
     


    {/* <div id="chatbot" className="flex items-center justify-center mt-[200px]">
     <div className="mainCont relative w-full">
     <div className="relative max-w-[1000px] text-main-dark mx-auto z-30">
     <div className="text-[35px] sm3:text-[42px] text-center mb-7">I’m <span className="text-main font-semibold">Unibot</span>, your career strategist!</div>
     <Fade bottom>
      <ChatBotHome/>
      </Fade>
     </div>
     <img src="/images/circle3.svg" alt="circle bg" className="hidden sm2:flex absolute bottom-[200px] md:-bottom-[100px] -left-[200px] w-[1500px]" />

     <Fade bottom>
      
      <div className="relative text-center z-30 mt-[100px]">
       <div className="text-[35px] sm2:text-[42px] italic mb-4">Don’t chase jobs, attract them!</div>
       
       <div className="font-normal">Our <Link href="/framework" className="text-main font-semibold">8-Module framework</Link> is designed to bring you into the spotlight. It's a journey to position <br className="hidden md2:flex"/> your profile in a way that attracts the hiring managers to reach out to you. </div>
            </div>
      </Fade>
     </div>

     </div> */}

     
     
     <div className="banner relative w-full overflow-hidden text-white text-[40px] md:text-[50px] py-2 mt-[120px] md2:mt-[150px] z-30">
      <div className="text-wrapper inline-flex whitespace-nowrap leading-[0]">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
     
     


     <div className="mainCont relative text-main-dark z-30">
      <div className="relative text-center z-30 mt-[120px] sm3:mt-[150px] ">
      <Fade bottom>
       <div className="text-[35px] sm3:text-[42px] leading-[117%] mb-6"><span className="text-main font-semibold">8 Acts</span> To Land Interviews</div>
       <div className="font-normal text-center max-w-[650px] mx-auto">Unimad equips you with a job-search playbook designed to break barriers and align your story with the expectations of recruiters. </div>
      </Fade>
      <Zoom>
       <img src="/images/steps.svg" alt="steps" className="mx-auto mt-10" />
      </Zoom>
      <Fade bottom>
        <Link href="/login" className="button2 bg-main transition hover:bg-main-dark text-white flex items-center gap-3 text-center font-medium rounded-full w-fit px-6 py-4 mt-10 mx-auto">Start your Journey <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16L7.075 14.6L12.675 9Z" fill="white"/></svg></Link>
       </Fade>
      </div>
     

      <img src="/images/circle2.svg" alt="circle bg" className="absolute -bottom-[100px] md:-bottom-[400px] -left-[200px] xl:-left-[100px] w-[1000px]" />
     </div>



     <div className="relative">
     <div className="relative z-30">
     <Fade bottom>
     </Fade>
     
     </div>
     <img src="/images/circle10.svg" alt="circle bg" className="absolute -right-[200px] md:-right-[500px] -bottom-[200px] md:-bottom-[400px] -z-[999]" />

     </div>

     <Fade bottom>
     <div className="mainCont">
      <div className="mainCont customBG relative text-white text-center rounded-3xl my-[150px] py-12 z-30">
       <div className="text-[34px] sm2:text-[45px] font-semibold mb-3">Go Unimad!</div>
       <div className="max-w-[550px] mx-auto">Reinvent your job search. Unimad’s goal is to form a community of students who thrive to uplift each other.</div>
       <a href="mailto:grow@unimad.xyz" className="bg-white text-main-dark flex text-center font-medium rounded-full w-fit transition hover:-translate-y-0.5 px-6 py-3 mt-10 mx-auto">Contact Us</a>
      </div>
     </div>
     </Fade>

    <Footer/>
    </div>
  )
}

export default Home
