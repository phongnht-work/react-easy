import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './styles.scss';

function MineSiteOverview() {
  const location = useLocation();
  // Lay state tu trong history.push
  const { state } = location;
  console.log({ state });
  const sortedNames = state.sort();
  console.log({ sortedNames });

  return (
    <div className="mine-site-input">
      <ul>
        {sortedNames.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MineSiteOverview;
