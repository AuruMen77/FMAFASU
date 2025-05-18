import timelineData from './data/timelineData';
import TimelineItem from './components/timelineItem';

function App() {
  return (
    <>
 

    <div className="h-screen w-full px-4 py-8 flex flex-col items-center">
    <h1 className="text-3xl font-bold text-center text-pink-600 mb-20">
        The Summary So Far 💖
      </h1>
      <div className="w-full max-w-screen-xl  mx-auto space-y-50 flex flex-col items-center">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
      <h1 className="text-3xl max-w-1/2 mt-25 font-bold text-center text-gray-800 mb-8">
        Here's to the moments we've shared ✨💖 and the beautiful moments yet to come 🌹
      </h1>
      <h1 className="text-3xl max-w-1/2 mt-25 font-bold text-center text-yellow-400 mb-8">
      🚧Under construction, make more moments!🚧
      </h1>

    </div>
    </>
  );
}

export default App;