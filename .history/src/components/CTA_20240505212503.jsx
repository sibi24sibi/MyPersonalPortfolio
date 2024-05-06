import RaisedButton from 'material-ui/RaisedButton';

function CTA() {
  const resumeLink = "/Sibi-Chakraborthy-V.pdf";
  return (
    <div id="resume" className="pt-36 max-w-6xl resume relative w-full flex justify-center ">
      
      <div className="pt-14 mx-20 pb-40">
        <h2 className="text-4xl md:text-5xl max-sm:text-[35px] max-sm:leading-[60px] font-bold mb-10 text-[#00040f] dark:text-white text-center">
          Need to know about me more
        </h2>
        <div className="flex justify-center ">
       
<DownloadButton onClick="" downloadData="">
  <RaisedButton
    id="downloadButton"
    label=""
    primary=""
  />
</DownloadButton>
        </div>
      </div>

      
    </div>
  );
}

export default CTA;