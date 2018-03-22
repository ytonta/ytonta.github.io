import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

const Icon = props => {
  const { className, iconName, size, color } = props;
  const icon = React.createElement(FontAwesome[iconName]);

  return (
    <span className={className} style={{ fontSize: size, color: color }}>
      {icon}
    </span>
  );
};

export default Icon;
