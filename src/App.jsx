import "./App.css";
import { blogList } from "./blog-list.js";
import { motion } from "framer-motion";

const imageVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: [0, 20, 0],
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const textVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};
function Card({ image, h2, p, id }) {
  return (
    <motion.div
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.4 }}
      className="card"
      id={id}
    >
      <motion.div variants={imageVariants} className="image-container">
        {image}
      </motion.div>
      <motion.h2 variants={textVariants}>{h2}</motion.h2>
      <motion.p variants={textVariants}>{p}</motion.p>
    </motion.div>
  );
}

export default function App() {
  return blogList.map((item, index) => (
    <div className="card-wrapper" key={index}>
      <Card image={item.image} h2={item.h2} p={item.p} />
    </div>
  ));
}
