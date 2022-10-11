export const circlesAnimation = {
  hidden: { opacity: 0 },
  show: {
    scale: [1, 2, 2, 3, 1],
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
    borderRadius: ['20%', '20%', '50%', '80%', '20%'],
    transition: { duration: 2.5 },
  },
};

export const aboutImageAnimation = {
  hidden: { opacity: 0, x: -200 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};
