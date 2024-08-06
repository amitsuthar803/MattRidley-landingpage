import bookImg from "../assets/book.png";
function Home() {
  return (
    <div className="flex max-xl:flex-col  max-xl:items-center ">
      {/*left side */}
      <aside className=" w-1/2  max-xl:w-[90%] mt-[46px] max-xl:mt-[10px] relative max-xl:h-[300px] ">
        <div className="h-[785px] mb-[54px]  ">
          <div className="circle absolute right-[84px] max-xl:right-0 max-xl:m-auto  max-xl:left-0 flex items-center justify-center   bg-accent w-[785px] h-[785px] rounded-full max-xl:flex-initial max-xl:max-w-[300px] max-xl:max-h-[300px] max-xl:w-full">
            <img src={bookImg} alt="book" className=" max-xl:max-w-[150px] " />
          </div>
        </div>
      </aside>
      {/* right side */}
      <div className="w-1/2  max-w-[572px] max-xl:max-w-[100%] max-xl:mt-5 max-xl:w-[90%] mb-[14px] mt-[82px]">
        <h1 className="font-bold text-[3rem]  text-primary max-xl:text-xl">
          Innovation happens when people are free to think,speculate and
          experiment
        </h1>
        <p className="text-black text-[1.25rem] max-xl:mb-7 mb-[65px] font-extralight max-xl:text-[1rem]">
          Ridley&apos;s new book, How Innovation Works, chronicles the history
          of innovation and argues that we need to change the way we think about
          innovation, to see it as an incremental, bottom-up, fortuitous process
          that happens to society as a direct result of the human habit of
          exchange.
        </p>

        <div className="flex items-center justify-start max-xl:justify-between  max-xl:gap-0 gap-[49px] mb-5">
          <button className="bg-accent uppercase outline-none border-none py-[1rem] px-[47px] rounded-[50px] max-xl:px-[25px] text-primary text-[2rem] font-bold max-xl:text-[1rem]">
            Buy Now
          </button>
          <button className="bg-primary outline-none border-none py-[1rem] px-[47px] rounded-[50px] text-white max-xl:px-[25px]  text-[2rem] font-bold max-xl:text-[1rem]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
