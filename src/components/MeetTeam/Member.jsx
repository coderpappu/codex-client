import {
  memberNormalBg,
  memberSocialFacebook,
  memberSocialInstagram,
  memberSocialLinkedin,
} from "../../assets/Home/Common SVG Images/svg";
export default function Member({ member }) {
  const {
    role,
    name,
    profile,
    description,
    facebook,
    linkedin,
    instagram,
    animation,
    subRole,
  } = member;
  return (
    <div
      data-aos={animation}
      className="max-sm:my-[25px] max-sm:w-[90%] mx-auto h-[400px] hover:scale-105 group rounded-[20px] border border-[#e4e4e4] flex duration-700 flex-col items-center py-[45px] memberCard"
    >
      <div className="relative bg-cover flex justify-center items-center memberHover">
        <div className=" absolute top-0 z-10 w-[110px] h-[110px] rounded-full border-[5px] border-[#6F4FFF] group-hover:border-[#D9D9D9] overflow-hidden duration-500">
          <img draggable={false} className="w-full" src={profile} alt="" />
        </div>

        <span className="memberSvg relative scale-110 -bottom-[15px] duration-1000">
          {memberNormalBg}
        </span>
      </div>

      <h2 className="text-[18px] sm:text-[24px] font-bold capitalize pt-[20px] text-center">
        {name}
      </h2>
      <h3 className="sm:text-[20px] text-[15px] py-[5px] text-center">
        {role}
      </h3>
      {subRole && (
        <h3 className="sm:text-[20px] text-[15px] text-center">& {subRole}</h3>
      )}
      <p className="text-center text-[12px] lg:text-[14px] xl:text-[16px] py-2 px-3">
        {description}
      </p>
      {/* social icon  */}
      <div className="lg:scale-0 w-full group-hover:scale-105 duration-300">
        <div className="flex justify-center gap-1">
          <a className="" href={facebook} target="_blank" rel="noreferrer">
            {memberSocialFacebook}
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            {memberSocialLinkedin}
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            {memberSocialInstagram}
          </a>
        </div>
      </div>
    </div>
  );
}
