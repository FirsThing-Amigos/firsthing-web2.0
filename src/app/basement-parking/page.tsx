"use client";
import '@/styles/basement.css';
import { useRef, useState, useEffect } from 'react';

const BasementParking = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // For carousal2
  const [currentIndex3, setCurrentIndex3] = useState(0); // For carousal3
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartX3 = useRef(0);
  const touchEndX3 = useRef(0);
  const autoSwipeInterval = useRef(null);

  const images = [
    '../images/basement-parking/1.webp',
    '../images/basement-parking/about.webp',
    '../images/basement-parking/monitoring.webp',
    '../images/basement-parking/retrofit.webp',
    '../images/basement-parking/upfront.webp',
    '../images/carousal.webp',
  ];

  const reviews = [
    {
      text: "Firsthing.earth is incredible! The team's dedication to sustainability is commendable. Thank you, Firsthing.earth!",
      author: "Utkarsh"
    },
    {
      text: "Firsthing.earth is amazing! Their innovative climate tech solutions are making a real difference in our Basement parking Electricity bills. Thank you, Firsthing.earth!",
      author: "Prashant"
    },
    {
      text: "Firsthing.earth's climate tech innovations are fantastic! Their Monitoring Dashboards are really useful. Thank you for your incredible work, Firsthing.earth!",
      author: "Ansh"
    }
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const handleTouchStart3 = (e) => {
    touchStartX3.current = e.changedTouches[0].screenX;
    clearInterval(autoSwipeInterval.current);
  };

  const handleTouchEnd3 = (e) => {
    touchEndX3.current = e.changedTouches[0].screenX;
    handleSwipeGesture3();
    startAutoSwipe();
  };

  const handleSwipeGesture3 = () => {
    if (touchStartX3.current - touchEndX3.current > 50) {
      // Swipe left
      setCurrentIndex3((prevIndex) => (prevIndex + 1) % reviews.length);
    }

    if (touchEndX3.current - touchStartX3.current > 50) {
      // Swipe right
      setCurrentIndex3((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    }
  };

  const startAutoSwipe = () => {
    autoSwipeInterval.current = setInterval(() => {
      setCurrentIndex3((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Auto-swipe interval set to 3 seconds
  };

  useEffect(() => {
    startAutoSwipe();
    return () => clearInterval(autoSwipeInterval.current);
  }, []);

  return (
    <>
      <div className="page1">
        <img src="../images/bgimage.png" alt="" className="img1" />
        <div className="overlay-text">
          <h1 className="text1">Save Electricity in Basement Parking</h1>
          <h2 className="text2">Reduce Your Basement Parking Electricity Bill up to 50%</h2>
          <form action="/submit" method="post">
            <input type="submit" value="Learn More" className="submit-button border-x-white" />
          </form>
        </div>
      </div>
      <div className="page2">
        <img src="../images/carousal.webp" alt="" className="img1" />
        <div className="carousal1">
          <div className="flex">
            <img src="../images/partner/1.png" alt="" className="" />
            <img src="../images/partner/asf3.png" alt="" className="" />
            <img src="../images/partner/settl.svg" alt="" className="" />
          </div>
        </div>
      </div>

      <div className="page3">
        <h1 className="heading">Real-Time Monitoring</h1>
        <div className=" images">
          <div className="info">
            <img src="../images/basement-parking/monitoring.webp" alt="monitoring" className="1" />
            <div className="infotext1">
              <div className=" mt-[5em] mb-[2em]">
                <h1 className=" text-2xl ml-2">Real-Time Monitoring</h1>
                <br />
                <p className=" font-extralight ml-2">Current Savings upto 50%. Savings are being updated in real-time</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="info">
            <img src="../images/basement-parking/upfront.webp" alt="" className="1" />
            <div className="infotext2">
              <div className=" mt-[5em] mb-[2em]">
                <h1 className=" text-2xl ml-2">Zero Upfront Cost</h1>
                <br />
                <br />
                <p className=" font-extralight ml-2">No upfront charges. We charge a percentage from the savings.</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="info">
            <img src="../images/basement-parking/retrofit.webp" alt="" className="1" />
            <div className="infotext3">
              <div className=" mt-[5em] mb-[2em]">
                <h1 className=" text-2xl ml-2">Retrofit Solutions</h1>
                <br />
                <p className=" font-extralight ml-2">Our devices are designed to be retrofit, allowing easy installation and immediate savings of up to 50% on your electricity bill using our ESDs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page4">
        <div className="aboutus">
          <img src="../images/basement-parking/about.webp" alt="" className="pl-5 pr-5" />
        </div>
        <div className="aboutusinfo">
          <h1 className=" font-bold text-3xl m-10 text-white">About Us</h1>
          <br />
          <p className=" ml-5 mr-5 text-white">
            Our climate tech business operates in the Gurgaon Division, HR, India. We focus on using technology to address environmental challenges.
            <br />
            <br />
            We aim to offer practical solutions that help reduce the impact of climate change. Our team is dedicated and works to create a sustainable future.
          </p>
          <form action="/submit" method="post">
            <input type="submit" value="Contact" className=" mt-10 ml-[25%] px-12 py-6 bg-transparent border-x-2 border-y-2 border-x-white border-y-white font-semibold rounded-lg focus:outline-none mb-16 text-white " />
          </form>
        </div>
      </div>
      <div className="page5">
        <div
          className="carousal2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((img, index) => (
              <img src={img} alt={`carousel-item-${index}`} key={index} className="carousel-item" />
            ))}
          </div>
        </div>
      </div>
      <div className="page6">
        <div className=" p-10">
          <h1 className=" font-bold text-3xl text-center mb-10 text-white">Pricing Table</h1>
          <div className=" p-5 border-white border-x-2 border-y-2">
            <img src="../images/basement-parking/eco.webp" alt="" className="eco" />
            <br />
            <h1>
              Zero Upfront Cost
            </h1>
            <h1>
              ₹0
            </h1>
            <form action="/submit" method="post">
              <input type="submit" value="More Info" className=" mt-10 ml-[2.4em] px-12 py-6 bg-transparent border-x-2 border-y-2 border-x-white border-y-white font-semibold rounded-lg focus:outline-none mb-16 text-white " />
            </form>
            <h1>
              No upfront charges. We charge a percentage from the savings.
            </h1>
            <br />
            <br />
            <h1><b>✔</b>Energy check</h1>
            <br />
            <h1><b>✔</b>Report</h1>
          </div>
        </div>
      </div>
      <div className="page7">
        <div className="carousal3">
          <div
            className="carousal3"
            onTouchStart={handleTouchStart3}
            onTouchEnd={handleTouchEnd3}
          >
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex3 * 100}%)` }}>
              {reviews.map((review, index) => (
                <div key={index} className="review">
                  <h1>{review.text}</h1>
                  <p>- {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="w-full">
        </div>
        <div className="container">

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">

              <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
                <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                  Contact Info.
                </h3>

                <h4 className="mt-10  leading-tight text-black dark:text-white"> REACH US.</h4>
                <p className="m-0 text-base font-medium text-body-color">info@FirsThing.earth</p>
                <h4 className="mt-10  leading-tight text-black dark:text-white">CALL</h4>
                <p className="m-0 text-base font-medium text-body-color">+91 98113 22159</p>
                <h4 className="mt-10">VISIT US</h4>
                <p className="m-0 text-base font-medium text-body-color">FirsThing.earth <br /> Green Gold 56, Plot 54-P, Block B, <br />Sector 56, Gurugram, Haryana 122011</p>


              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            </div>

            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8173993297537!2d77.09928247644348!3d28.424766199999972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e7cf718c95%3A0x6af0c1faac10cd00!2sGreen%20Gold%2056!5e0!3m2!1sen!2sin!4v1716746480501!5m2!1sen!2sin&maptype=satellite&zoom=15&disableDefaultUI=true&zoomControl=false&scaleControl=false&streetViewControl=false&rotateControl=false&fullscreenControl=false"
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasementParking;
