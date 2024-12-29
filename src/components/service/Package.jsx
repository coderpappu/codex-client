export default function Package({ pack }) {
  const { title, description } = pack;
  return (
    <div className='p-8 bg-[rgba(186,180,255,.27)] rounded-md'>
      <h2 className='text-center font-bold text-xl pb-2'>{title}</h2>
      <p className='text-justify'>{description}</p>
    </div>
  );
}
