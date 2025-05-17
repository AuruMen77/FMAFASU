const TimelineItem = ({ date, image, title, description }) => (
    <div className="bg-white shadow-lg rounded-xl p-4 mb-6 flex flex-col md:flex-row items-center">
      <img src={image} alt={title} className="w-full md:w-64 h-64 object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
  
  export default TimelineItem;
  