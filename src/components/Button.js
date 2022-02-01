import React from 'react';

function Button(props) {
  const { onClick, title } = props;

  return (
    <button onClick={onClick} className="control-button">
      {title}
    </button>
  );
}

export default Button;
