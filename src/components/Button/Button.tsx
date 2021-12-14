import React from 'react';

function Button({ text }: { text: string }) {
  return (
    <button type="button" className="p-3 bg-pink-50 hover:bg-pink-200 mx-2">
      {text}
    </button>
  );
}

export default Button;
