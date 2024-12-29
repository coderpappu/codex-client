export default function BlogLoader() {
  return (
    <div className='rounded-[12px] mt-3 md:mt-0 lg:pb-2 shadow-3xl py-3 px-4 opacity-40'>
      <div className='p-4 skeleton h-[190px]'></div>
      <div className='p-4 my-3'>
        <h2 className='lg:h-[24px]  xl:text-2xl md:text-[18px] text-[14px] font-semibold my-4 skeleton'></h2>
        <h2 className='lg:h-[24px] lg:w-[90%] xl:text-2xl md:text-[18px] text-[14px] font-semibold my-4 skeleton'></h2>
        <h4 className='mt-6 lg:h-[18px] w-[60%] xl:text-2xl md:text-[18px] text-[14px] font-semibold my-4 skeleton'></h4>
        <div className='mt-7'>
          <h4 className='lg:h-[12px] w-[95%] xl:text-2xl md:text-[18px] text-[14px] font-semibold my-4 skeleton'></h4>
          <h4 className='lg:h-[12px] w-[98%] xl:text-2xl md:text-[18px] text-[14px] font-semibold my-4 skeleton'></h4>
          <h4 className='lg:h-[12px] w-[93%] xl:text-2xl md:text-[18px] text-[14px] font-semibold my-4 skeleton'></h4>
        </div>
        <h4 className='lg:h-[12px] mt-5 w-[70%]  xl:text-2xl md:text-[18px] text-[14px] font-semibold my-4 skeleton'></h4>
      </div>
    </div>
  );
}
