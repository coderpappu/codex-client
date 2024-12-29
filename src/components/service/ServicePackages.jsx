import Package from './Package';

export default function ServicePackages({ servicePackage }) {
  const { packages, title } = servicePackage || {};

  return (
    <section className='allContainer md:pt-[100px] sm:pt-[50px]'>
      <h1 className='section_title text-center pb-5'>{title}</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12 md:gap-8 gap-6'>
        {packages.map((pack) => (
          <Package key={pack.id} pack={pack} />
        ))}
      </div>
    </section>
  );
}
