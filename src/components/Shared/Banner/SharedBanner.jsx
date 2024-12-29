export default function SharedBanner({ title, subtitle, children, bg }) {
  return (
    <section
      className={`${
        !bg ? "bg-[rgba(244,244,255,.67)]" : "bg-transparent"
      } h-[280px] grid place-content-center`}
    >
      {title && (
        <h1 className="text-center font-semibold text-transparent lg:text-[46px] bg-clip-text bg-gradient-to-r from-[#02022D] to-[#5B3CE8] md:text-[32px] text-[24px]">
          {title}
        </h1>
      )}
      {subtitle && (
        <h2 className="allContainer text-center max-w-[600px] text-[13px] max-w-sm:text-[12px] lg:text-[15px] pt-2 font-normal mx-auto">
          {subtitle}
        </h2>
      )}
      {children && <div>{children}</div>}
    </section>
  );
}
