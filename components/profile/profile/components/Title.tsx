import React from 'react';

interface BoxProps {
  textColor: string;
  backgroundColor: string;
  fontSize: number;
  text:string;
}

const Box: React.FC<BoxProps> = ({ textColor, backgroundColor, fontSize, text }) => {
  const boxStyle: React.CSSProperties = {
    color: textColor,
    backgroundColor: backgroundColor,
    fontSize: `${fontSize}px`,
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div style={boxStyle}>
      {text}
    </div>
  );
}

export default Box;
