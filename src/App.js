import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const data = [
    'Item 1', 'Item 2', 'Item 3',
    'Item 1', 'Item 2', 'Item 3',
    'Item 1', 'Item 2', 'Item 3',
    'Item 1', 'Item 2', 'Item 3',
    'Item 1', 'Item 2', 'Item 3',
    'Item 1', 'Item 2', 'Item 3'
  ];

  return (
    <div>
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            margin: '10px 0',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default App;
