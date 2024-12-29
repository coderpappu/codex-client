import Button from "../../utils/Button";
import serviceIdea from "../../assets/services/serviceIdea.svg";

const ServicesIdea = () => {
  return (
    <>
      <div className="text-center mt-[100px]">
        <h2 className="section_title">Have an idea with your mind?</h2>
      </div>

      <section className="grid lg:grid-cols-2 my-12 lg:my-0 allContainer items-center justify-items-center">
        {/* service idea banner  */}
        <div className="lg:ml-20 mb-12 lg:mb-0">
          <img  draggable={false}
            className="lg:max-w-lg md:max-w-md max-w-[350px]"
            src={serviceIdea}
            alt=""
          />
        </div>
        <div>
          {/* service idea form  */}
          <form className="lg:mr-20 mx-5 md:mx-0">
            <div className="w-full grid grid-cols-2 justify-between gap-5 mt-7">
              <input
                type="text"
                name=""
                id="firstName"
                placeholder="First Name"
                className="bg-[#f2f2f2] px-4 py-3 rounded-xl"
              />
              <input
                type="text"
                name=""
                id="lastName"
                placeholder="Last Name"
                className="bg-[#f2f2f2] px-4 py-3 rounded-xl"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Write your mail"
              className="bg-[#f2f2f2] px-4 py-3 rounded-xl w-full  my-7"
            />
            <div>
              <label htmlFor="typeOfService" className="block mb-2">
                What type of service you want to be developed? *
              </label>
              <select
                name="typeOfService"
                id="typeOfService"
                className="bg-[#f2f2f2] px-4 py-3 rounded-xl w-full  mb-7"
              >
                <option value="seo">All in ONE SEO</option>
                <option value="wordpress">WordPress Solution</option>
                <option value="graphics">Graphics Design</option>
                <option value="webdevelopment">Web Development</option>
              </select>
            </div>
            <div>
              <label htmlFor="deliveryTime" className="block mb-2">
                Expected Project Delivery Time Frame *:{" "}
              </label>
              <select
                name="deliveryTime"
                id="deliveryTime"
                className="bg-[#f2f2f2] px-4 py-3 rounded-xl w-full mb-7"
              >
                <option value="days">1-5 Days</option>
                <option value="months">1-5 Month</option>
                <option value="year">1 year</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block mb-2">
                What is your approximate budget look like? *
              </label>
              <select
                name="budget"
                id="budget"
                className="bg-[#f2f2f2] px-4 py-3 rounded-xl mb-7 w-full"
              >
                <option value="25k">25k</option>
                <option value="40k">40k</option>
                <option value="80k">80k</option>
                <option value="120">120k</option>
              </select>
            </div>
            <Button width="w-full" active={true}>
              Connect
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ServicesIdea;
