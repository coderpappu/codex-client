export default function Button({ children, active, width, handler, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={handler && handler}
      className={`group overflow-hidden relative text-center px-4 md:text-md text-sm py-2 font-medium md:py-3 md:font-semibold rounded get-btn ${
        width ? width : 'w-auto'
      } ${
        active
          ? 'bg-[#6F4FFF]  text-white '
          : 'bg-[#EAEAEA] border-1 border-[#CACACA]'
      }`}
    >
      <span
        className={`duration-700 ${
          active ? 'group-hover:text-black' : 'group-hover:text-[#eaeaea]'
        }`}
      >
        {children}
      </span>
      <span
        className={`absolute  duration-700 -z-10 group-hover:h-full  left-0 w-full h-0 ${
          active ? 'bg-[#EAEAEA] top-0 ' : ' top-0 bg-[#6F4FFF]'
        }`}
      ></span>
    </button>
  );
}
