

function CTA() {
  return (
    <div className="pt-36 relative w-full flex justify-center ">
      
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#00040f] dark:text-white">
          Need to know about me more
        </h2>
        <div className="flex  inline-flex items-center">
        <a
          href="src\assets\Sibi-Chakraborthy-V.pdf"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 dark:text-[#e1e1e1] border-2 rounded-full border-[#808080] bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download</span>
         
        </a>
        
        </div>
      </div>

      
    </div>
  );
}

export default CTA;