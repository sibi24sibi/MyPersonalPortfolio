

function CTA() {
  return (
    <div className="pt-36 relative w-full flex justify-center ">
      
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#00040f] dark:text-white">
          Need to know about me more
        </h2>
        <div className="flex justify-center">
        <a
          href="src\assets\Sibi-Chakraborthy-V.pdf"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 dark:text-[#e1e1e1] border-2 rounded-full border-[#808080] bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
         Resume
        <svg
          className="w-6 h-6 absolute top-1/2 right-4 -mt-3 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M17 12l-5 5V9z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        </a>
        </div>
      </div>

      
    </div>
  );
}

export default CTA;