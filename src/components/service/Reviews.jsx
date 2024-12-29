import {
  serviceFacebookIcon,
  serviceGoogleIcon,
  serviceStarIcon,
  serviceTrustPilotIcon,
} from "../../assets/Home/Common SVG Images/svg";

const reviews = [
  {
    id: 1,
    title: "Google Reviews",
    rating: 5,
    icon: serviceGoogleIcon,
    link: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Trustpilot Reviews",
    rating: 5,
    icon: serviceTrustPilotIcon,
    link: "https://www.trustpilot.com/",
  },
  {
    id: 3,
    title: "Facebook Reviews",
    rating: 5,
    icon: serviceFacebookIcon,
    link: "https://www.facebook.com/",
  },
];
export default function Reviews() {
  return (
    <section className="allContainer py-[100px]">
      <h2 className="text-center font-semibold text-transparent lg:text-[46px] bg-clip-text bg-gradient-to-r from-[#02022D] to-[#5B3CE8] md:text-[32px] text-[24px]">
        We Average 5 stars across <br /> 400+ reviews !
      </h2>
      <p className="text-center pb-9 pt-5">
        We average 5-star reviews from trusted online sources such as Facebook,
        Google and Trustpilot! <br className="hidden lg:block" /> Read our
        client reviews to gain a better understanding of the kind of service we
        are capable of <br className="hidden lg:block" /> providing to help grow
        businesses like yours.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10 ">
        {reviews.map((review) => (
          <a
            href={review.link}
            target="_blank"
            rel="noreferrer"
            key={review.id}
            className="grid justify-center items-center grid-cols-12 border border-[#6F4FFF] rounded-md p-1"
          >
            <p className="col-span-3 flex justify-center">
              <p className="bg-[#407BFF] rounded-full p-2"> {review.icon}</p>
            </p>
            <p className="flex flex-col gap-1 col-span-9">
              <p className="flex gap-1">
                {Array(review.rating)
                  .fill(review.rating)
                  .map((rate, i) => (
                    <span key={rate + i}>{serviceStarIcon}</span>
                  ))}
              </p>
              <p className="font-bold text-base">{review.title}</p>
              <p className="lg:text-[13px]">See All Our {review.title}</p>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
