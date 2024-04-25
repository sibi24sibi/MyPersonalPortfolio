

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
        
        </a>
        <span className="ml-2">▼</span>
        </div>
      </div>

      
    </div>
  );
}

export default CTA;