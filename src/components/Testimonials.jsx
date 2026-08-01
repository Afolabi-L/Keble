import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/Testimonials.css";

import { Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

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
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <TestimonialCard image={item.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;