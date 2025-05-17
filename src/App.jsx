import timelineData from './data/timelineData';
import TimelineItem from './components/timelineItem';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl font-bold text-center text-pink-600 mb-8"
      >
        The Summary So Far 💖
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <TimelineItem {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
