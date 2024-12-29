export default function ServiceImportance({ importanceService }) {
  const { title, image, importanceData } = importanceService || {};
  const littleBlueCircle = `animateSeoElement shadow-[rgba(0,_0,_0,_0.4)_0px_0px_50px]  absolute rounded-full bg-gradient-to-tr from-[#030E78] to-[#6F86FF] flex justify-center items-center xl:h-[150px] xl:w-[150px]
  lg:h-[130px] lg:w-[130px] md:w-[100px] md:h-[100px] overflow-hidden sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]`;
  const littleWhiteCircle =
    "rounded-full flex justify-center bg-white items-center xl:w-[130px] xl:h-[130px] lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] sm:h-[70px] sm:w-[70px] w-[32px] h-[32px] overflow-hidden";
  const bigCircle =
    "animateSeo rounded-full mx-auto  flex justify-center items-center relative  border-dashed border-2 border-[#407BFF] xl:h-[700px] xl:w-[700px] lg:h-[500px] lg:w-[500px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[150px] h-[150px]";
  return (
    <section className="allContainer pb-[80px] xl:pb-[100px]">
      <h2 className="section_title text-center pb-[70px] xl:pb-[120px]">
        {title}
      </h2>
      <div className={`${bigCircle}`}>
        <div
          className={`${littleBlueCircle} xl:-top-[75px] lg:-top-[65px] md:-top-[55px] sm:-top-[45px] -top-[22px]`}
        >
          <div className={`${littleWhiteCircle}`}>
            <span className="text-center xl:text-[12px] lg:text-[10px] md:text-[7px] sm:text-[6px] text-[3px] max-lg:px-2  p-1 max-w-[100px]">
              {importanceData[0]?.title}
            </span>
          </div>
        </div>
        <div
          className={`xl:top-[90px] xl:-right-[30px] lg:top-[77px] lg:-right-[49px] md:top-[60px] md:-right-[30px] sm:top-[40px] sm:-right-[25px] top-[20px] -right-[16px] ${littleBlueCircle}`}
        >
          <div className={`${littleWhiteCircle}`}>
            <span className="text-center xl:text-[12px] lg:text-[10px] md:text-[7px] sm:text-[6px] text-[3px] max-lg:px-2  p-1 max-w-[100px]">
              {importanceData[1]?.title}
            </span>
          </div>
        </div>
        <div
          className={`${littleBlueCircle} xl:bottom-[93px] xl:-right-[30px] lg:bottom-[67px] lg:-right-[31px] md:bottom-[54px] md:-right-[17px] sm:bottom-[33px] sm:-right-[21px] bottom-[13px] -right-[6px]`}
        >
          <div className={`${littleWhiteCircle}`}>
            <span className="text-center xl:text-[12px] lg:text-[10px] md:text-[7px] sm:text-[6px] text-[3px] max-lg:px-2  p-1 max-w-[100px]">
              {importanceData[2]?.title}
            </span>
          </div>
        </div>
        <div
          className={`xl:-bottom-[75px] lg:-bottom-[65px] md:-bottom-[55px] sm:-bottom-[45px] -bottom-[20px] ${littleBlueCircle}`}
        >
          <div className={`${littleWhiteCircle}`}>
            <span className="text-center xl:text-[12px] lg:text-[10px] md:text-[7px] sm:text-[6px] text-[3px] max-lg:px-2  p-1 max-w-[100px]">
              {importanceData[3]?.title}
            </span>
          </div>
        </div>
        <div
          className={`xl:bottom-[93px] xl:-left-[30px] lg:bottom-[67px] lg:-left-[31px] md:bottom-[54px] md:-left-[17px] sm:bottom-[33px] sm:-left-[21px] bottom-[17px] -left-[8px] ${littleBlueCircle}`}
        >
          <div className={`${littleWhiteCircle}`}>
            <span className="text-center xl:text-[12px] lg:text-[10px] md:text-[7px] sm:text-[6px] text-[3px] max-lg:px-2  p-1 max-w-[100px]">
              {importanceData[4]?.title}
            </span>
          </div>
        </div>
        <div
          className={`xl:top-[90px] xl:-left-[30px] lg:top-[77px] lg:-left-[49px] md:top-[60px] md:-left-[30px] sm:top-[40px] sm:-left-[25px] top-[16px] -left-[12px] ${littleBlueCircle}`}
        >
          <div className={`${littleWhiteCircle}`}>
            <span className="text-center xl:text-[12px] lg:text-[10px] md:text-[7px] sm:text-[6px] text-[3px] max-lg:px-2  p-1 max-w-[100px]">
              {importanceData[5]?.title}
            </span>
          </div>
        </div>
        <div className="animateSeoElement">
          <img draggable={false}
            className="xl:w-full lg:w-3/4 mx-auto w-2/4"
            src={image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
