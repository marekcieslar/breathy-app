import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';

function Menu() {
  return (
    <nav>
      <ul className="flex justify-center border-b-2 mb-2">
        <li>
          <Link to="/">
            <Button text="Home" />
          </Link>
        </li>
        <li>
          <Link to="breath">
            <Button text="Breath" />
          </Link>
        </li>
        <li>
          <Link to="results">
            <Button text="Results" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
