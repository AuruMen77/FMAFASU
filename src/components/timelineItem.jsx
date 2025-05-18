import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const TimelineItem = ({ date, images, title, description }) => {
  const adjustedImages = images.length < 4 ? [...images, ...images] : images;

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <Swiper
        className="w-full"
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
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
      >
        {adjustedImages.map((img, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center" style={{ width: 'auto' }}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-80 h-96 object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center w-full max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;