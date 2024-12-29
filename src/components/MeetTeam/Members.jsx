import Member from './Member';
import memberData from './memberData';

export default function Members() {
  return (
    <>      <div className='sm:grid lg:grid-cols-3 md:grid-cols-2 justify-center xl:gap-12 lg:gap-5 md:gap-12 gap-8'>
        {memberData.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}
