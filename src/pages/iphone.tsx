import type { NextPage } from "next";

import Div100vh from "react-div-100vh";

const Iphone: NextPage = () => {
  return (
    <div className="bg-red-500">
      <Div100vh className="flex flex-col bg-red-100">
        <header className="h-24 bg-amber-500">HEADER_AREA</header>
        <main className="flex-1 overflow-y-scroll bg-lime-500">
          {[...Array(50)].map((_, i) => (
            <p key={`${i}_temp`}>ROW_{i}</p>
          ))}
        </main>
        <footer className="h-24 bg-blue-500 text-white">FOOTER_AREA</footer>
      </Div100vh>
    </div>
  );
};

export default Iphone;
