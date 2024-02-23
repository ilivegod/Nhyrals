import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Brands1000 from "./sections/Brands1000";
import Footer from "./sections/Footer";

import { useState } from "react";

function App() {
  return (
    <main className="flex flex-col relative ">
      <Nav className="bg-[#F5F5DC]" />
      <section className=" wide:padding-r padding-b bg-[#F5F5DC]">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 bg-[#F5F5DC]">
        <Section1 />
      </section>
      <section className="sm:px-16 px-8 sm:py-4 py-2 bg-[#F5F5DC]">
        <Section2 />
      </section>
      <section className="sm:px-16 px-8 sm:py-4 py-2 bg-[#F5F5DC]">
        {/* <Section3 /> */}
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 bg-[#F5F5DC]">
        <Brands1000 />
      </section>
      <section className="sm:px-16 px-8 bg-[#E3735E]">
        {" "}
        <Footer />{" "}
      </section>
    </main>
  );
}

export default App;
