import Button from '../../utils/Button';

export default function ContactForm() {
  const inputClass = 'px-3 py-2 focus:outline-none rounded-md my-1 w-full';
  const labelClass = 'text-[18px] font-bold';
  return (
    <div className='flex flex-col justify-center items-center max-md:pt-8'>
      <div className='bg-[#CCDDFF] p-6 rounded-lg w-full'>
        <form>
          <h2 className='md:text-[38px] text-[25px] font-bold mb-3 max-lg:w-full'>
            Contact Us
          </h2>
          <div className='sm:grid grid-cols-2 gap-2 pb-2'>
            <div>
              <label className={labelClass} htmlFor='name'>
                Name
              </label>
              <br />
              <input
                className={`${inputClass} `}
                type='text'
                name='name'
                id='name'
                placeholder='Name'
              />
            </div>
            <div>
              <label className={labelClass} htmlFor='email'>
                Email
              </label>
              <br />
              <input
                className={inputClass}
                type='email'
                name='email'
                id='email'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='pb-2'>
            <label className={labelClass} htmlFor='subject'>
              Subject
            </label>
            <br />
            <input
              placeholder='Subject'
              className={`${inputClass}`}
              type='text'
              name='subject'
            />
          </div>
          <div className='pb-2 my-2'>
            <label className={labelClass} htmlFor='message'>
              Message
            </label>
            <br />
            <textarea
              placeholder='Message'
              id='message'
              name='message'
              className={`${inputClass} resize-none w-full`}
              cols='30'
              rows='3'
            ></textarea>
          </div>
          <button>
            <Button active={true}>Send Message</Button>
          </button>
        </form>
      </div>
    </div>
  );
}
