import posed from 'react-pose';

const timelineProps = {
  open: {
    y: '0%',
    opacity: 1,
    delayChildren: 100,
    staggerChildren: 250,
  },
  closed: {
    y: '-100%',
    opacity: 0,
    delay: 500,
    staggerChildren: 20,
  },
};

const Timeline = posed.ul(timelineProps);

export default Timeline;
