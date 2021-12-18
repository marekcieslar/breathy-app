import React, { MouseEventHandler } from 'react';
import { ButtonTypes } from 'enums';

type ButtonType = {
  addClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type: ButtonTypes;
};

function Button({ addClass, onClick, text, type }: ButtonType) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`
mx-2
mt-5
active:bg-gray-300
hover:text-white
p-3
hover:bg-gray-400
bg-gray-200
${addClass || ''}
`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
