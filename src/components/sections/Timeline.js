import posed from 'react-pose';

const timelineProps = {
  open: {
    y: '0%',
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 500,
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
