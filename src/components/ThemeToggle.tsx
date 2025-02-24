import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500"
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={false}
      animate={{
        rotate: isDarkMode ? 360 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {isDarkMode ? (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            🌞
          </motion.span>
        ) : (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            🌙
          </motion.span>
        )}
      </div>
    </motion.button>
  );
}; 