

import Hero from "./components/Hero";
import Service from "./components/Service";
import Review from "./components/Review";

import ContactPage from "./components/Contact";

// import Webchat from "./components/Webchat";

// const Webchat = dynamic(() => import('@/components/Webchat'), { ssr: false });


export default function Home() {
  return (
    <>
    <div className="flex flex-col mt-10 gap-5">
      <Hero/>
      <Service/>
      <Review />
      {/* <About/> */}
      <ContactPage/>
     {/* <Webchat/> */}
    </div>
    </>
  );
}
