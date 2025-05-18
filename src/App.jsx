import timelineData from './data/timelineData';
import TimelineItem from './components/timelineItem';

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
        The Summary So Far 💖
      </h1>

    <div className="h-screen w-full bg-pink-50 px-4 py-8 flex flex-col items-center">
      
      <div className="w-full max-w-screen-xl mx-auto space-y-12 flex flex-col items-center">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;