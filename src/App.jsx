import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Brands1000 from "./sections/Brands1000";
import Footer from "./sections/Footer";

import { useState } from "react";

function App() {
  return (
    <main className="flex flex-col relative ">
      <Nav />
      <section className=" wide:padding-r padding-b bg-slate-600">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 ">
        <Section1 />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 bg-red-600">
        <Section2 />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 bg-yellow-400">
        <Brands1000 />
      </section>
      <section className="sm:px-16 px-8 bg-black">
        {" "}
        <Footer />{" "}
      </section>
    </main>
  );
}

export default App;
