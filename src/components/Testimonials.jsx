
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/Testimonials.css";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const testimonials = [
    { id: 1, image: testimonial1 },
    { id: 2, image: testimonial2 },
];

function Testimonials() {
    return (
        <section className="testimonial-section">
            <h2 className="testimonial-title">Our Customers' Stories</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                slidesPerView={1.2}
                loop={true}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Customer testimonial"
                            className="testimonial-img"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;