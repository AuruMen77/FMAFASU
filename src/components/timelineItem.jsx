import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const TimelineItem = ({ date, images, title, description }) => {
  const adjustedImages = images.length < 4 ? [...images, ...images] : images;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-6">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2,
            slideShadows: false,
          }}
          className="w-full h-[400px]"
        >
          {adjustedImages.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center scale-90 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-64 h-80 object-cover rounded-xl shadow-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
          <p className="mt-4 text-gray-600 max-w-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
