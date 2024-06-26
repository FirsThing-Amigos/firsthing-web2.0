import NewsLatterBox from "./NewsLatterBox";
import SectionTitle from "../Common/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
          <div className="w-full text-center">
           <SectionTitle
                title="Contact Us"
                paragraph=""
                mb="44px"
                center
              />
              </div>
      <div className="container">
  
        <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
       
        <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
      Contact Info.
      </h3>

     <h4 className="mt-10  leading-tight text-black dark:text-white"> REACH US.</h4>
    <p  className="m-0 text-base font-medium text-body-color">info@firsthing.earth</p>
    <h4 className="mt-10  leading-tight text-black dark:text-white">CALL</h4>
    <p  className="m-0 text-base font-medium text-body-color">+91 98113 22159</p>
    <h4 className="mt-10">VISIT US</h4>
    <p className="m-0 text-base font-medium text-body-color">Firsthing Pvt. Ltd. <br/> Green Gold 56, Plot 54-P, Block B, <br/>Sector 56, Gurugram, Haryana 122011</p>


      </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
          
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8173993297537!2d77.09928247644348!3d28.424766199999972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e7cf718c95%3A0x6af0c1faac10cd00!2sGreen%20Gold%2056!5e0!3m2!1sen!2sin!4v1716746480501!5m2!1sen!2sin" width="100%" height="440"  ></iframe>
             {/* <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
             
             <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form> 
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
