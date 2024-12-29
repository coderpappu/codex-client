import Marquee from 'react-fast-marquee';
import blogAuthor from '../../assets/blogAuthor.png';
export default function NewMembers() {
  return (
    <section className='allContainer'>
      <Marquee>
        <div>
          <img
            src={blogAuthor}
            className='w-[80px] mx-auto rounded-full'
            alt=''
          />
          <h2>Mohammad Ikhtiar Uddin</h2>
        </div>
      </Marquee>
    </section>
  );
}
