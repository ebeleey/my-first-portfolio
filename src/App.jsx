import './App.css';

import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { motion } from 'motion/react';

function App() {

  const variants = {
    hidden: { opacity: 0, y: 50 }, // 초기 상태: 투명하고 아래에서 시작
    visible: { opacity: 1, y: 0 }, // 보이는 상태: 완전히 보이고 제자리
  };

  return (
    <div>
      <motion.div
        className='section'
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <Profile />
      </motion.div>

      <motion.div
        className='section'
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <Education />
      </motion.div>

      <motion.div
        className='section'
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        className='section'
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        className='section'
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;