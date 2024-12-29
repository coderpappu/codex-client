import {
  contactInstagram,
  contactLinkedin,
  contactLocation,
  contactSocialLightEllipse,
  contactSocialRightEllipse,
  contactWhatsapp,
} from '../../assets/Home/Common SVG Images/svg';

export default function SocialContact() {
  const socialContactData = [
    {
      id: 1,
      icon: contactLinkedin,
      link: 'https://www.linkedin.com/in/Codexdevware/',
      text: 'LinkedIn',
      userName: '@codexdevware',
    },
    {
      id: 2,
      icon: contactLocation,
      link: '',
      text: 'Location',
      userName: '@codexdevware',
    },
    {
      id: 3,
      icon: contactInstagram,
      link: '',
      text: 'Instagram',
      userName: '@codexdevware',
    },
    {
      id: 4,
      icon: contactWhatsapp,
      link: '',
      text: 'Whatsapp',
      userName: '@codexdevware',
    },
  ];

  const style = { boxShadow: '0px 30px 50px 0px rgba(0, 0, 0, 0.09)' };
  return (
    <section style={style} className='allContainer'>
      <div className='rounded-lg overflow-hidden relative lg:px-9 md:p-6 sm:px-20 px-5 py-[50px]  mt-5 lg:my-[100px] md:my-20 sm:my-12'>
        <span className='absolute right-0 top-0 -z-10'>
          {contactSocialRightEllipse}
        </span>
        <span className='absolute left-0 bottom-0 -z-10'>
          {contactSocialLightEllipse}
        </span>
        <div className='flex lg:flex min-[500px]:grid min-[500px]:grid-cols-2 max-lg:flex-wrap lg:gap-3 place-content-center lg:justify-between justify-center'>
          {socialContactData.map((sc) => {
            return (
              <div
                key={sc.id}
                className='flex gap-2 items-center justify-center  min-[500px]:my-3 max-lg:my-3 '
              >
                <a
                  className='font-bold'
                  href={sc.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='contact_svg'>{sc.icon}</span>
                </a>
                <div>
                  <h1 className='font-sora font-bold bg-gradient-to-r text from-[#02022D] to-[#5B3CE8] text bg-clip-text text-transparent'>
                    {sc.text}
                  </h1>
                  <a
                    className='font-bold text-sm'
                    href={sc.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {sc.userName}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
