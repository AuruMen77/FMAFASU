import timelineData from './data/timelineData';
import TimelineItem from './components/timelineItem';

function App() {
  return (
    <div className="h-screen overflow-y-scroll bg-pink-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
        The Summary So Far 💖
      </h1>

      <div className="max-w-3xl mx-auto space-y-12">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
