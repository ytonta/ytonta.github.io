import posed from 'react-pose';

const itemProps = {
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
};

const Item = posed.span(itemProps);

export default Item;
