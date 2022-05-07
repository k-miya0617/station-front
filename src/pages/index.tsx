import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-stone-100 w-screen h-screen">
      <div className="flex flex-col space-y-2 p-10">
        <h1 className="text-3xl text-lime-500">STATION サービス建設予定地</h1>
        <h2 className="text-xl text-stone-900">
          GW明け、仕事が忙しくない時にボチボチつくります。
        </h2>
      </div>
    </div>
  );
};

export default Home;
