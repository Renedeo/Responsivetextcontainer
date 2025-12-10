import { useState } from 'react';
import { ResponsiveTextContainer } from './components/ResponsiveTextContainer';
import { motion } from 'framer-motion';

export default function App() {
  const [containerWidth, setContainerWidth] = useState(400);
  const [containerHeight, setContainerHeight] = useState(300);
  const [animationDuration, setAnimationDuration] = useState(300);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-center space-y-2"
        >
          <h1>Responsive Text Container</h1>
          <p className="text-slate-300">
            Resize the container and watch the text scale automatically
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4"
        >
          <div className="space-y-2">
            <label className="text-white flex items-center justify-between">
              <span>Width: {containerWidth}px</span>
            </label>
            <input
              type="range"
              min="200"
              max="800"
              value={containerWidth}
              onChange={(e) => setContainerWidth(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white flex items-center justify-between">
              <span>Height: {containerHeight}px</span>
            </label>
            <input
              type="range"
              min="100"
              max="600"
              value={containerHeight}
              onChange={(e) => setContainerHeight(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white flex items-center justify-between">
              <span>Animation Speed: {animationDuration}ms</span>
            </label>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={animationDuration}
              onChange={(e) => setAnimationDuration(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Demo Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            style={{
              width: `${containerWidth}px`,
              height: `${containerHeight}px`,
            }}
            className="transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <ResponsiveTextContainer
              minFontSize={12}
              maxFontSize={72}
              scaleFactor={0.05}
              animationDuration={animationDuration}
              animateScale={true}
              animateOpacity={true}
              className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shadow-2xl flex items-center justify-center text-center p-6 text-white h-full hover:shadow-cyan-500/50"
            >
              <motion.div
                animate={{
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div>Responsive Text</div>
                <div className="opacity-80">Scales with container</div>
              </motion.div>
            </ResponsiveTextContainer>
          </motion.div>
        </motion.div>

        {/* Additional Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <ResponsiveTextContainer
              minFontSize={10}
              maxFontSize={32}
              scaleFactor={0.04}
              animationDuration={animationDuration}
              className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg p-8 text-white text-center aspect-square flex items-center justify-center hover:shadow-xl hover:shadow-rose-500/50 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Small Scale Factor
              </motion.div>
            </ResponsiveTextContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -8 }}
          >
            <ResponsiveTextContainer
              minFontSize={14}
              maxFontSize={48}
              scaleFactor={0.06}
              animationDuration={animationDuration}
              className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg p-8 text-white text-center aspect-square flex items-center justify-center hover:shadow-xl hover:shadow-amber-500/50 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Medium Scale
              </motion.div>
            </ResponsiveTextContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <ResponsiveTextContainer
              minFontSize={16}
              maxFontSize={64}
              scaleFactor={0.08}
              animationDuration={animationDuration}
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg p-8 text-white text-center aspect-square flex items-center justify-center hover:shadow-xl hover:shadow-emerald-500/50 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Large Scale
              </motion.div>
            </ResponsiveTextContainer>
          </motion.div>
        </div>

        {/* Info Card */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white space-y-4"
        >
          <h2>How it works</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Uses ResizeObserver to monitor container size changes</li>
            <li>• Calculates font size based on container dimensions</li>
            <li>• Responds to parent container changes automatically</li>
            <li>• Customizable min/max font sizes and scale factor</li>
            <li>• Smooth animations with configurable duration</li>
            <li>• Hover effects and entrance animations</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}