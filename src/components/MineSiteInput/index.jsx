import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

function MineSiteInput() {
  const [names, setNames] = useState(['']);
  const history = useHistory();

  const showOres = () => {
    setNames([...names, '']);
  };

  const showOverview = () => {
    // Chuyen sang trang /overview
    // Pass bien names vao trang /overview
    history.push({
      pathname: '/overview',
      state: names,
    });
  };

  const handleChangeInput = (evt, index) => {
    const value = evt.target.value;
    console.log('handleChangeInput', index, value);
    // Thay doi phan tu thu index trong mang names
    setNames([...names.slice(0, index), value, ...names.slice(index + 1)]);
  };

  // ['a1', 'a2', 'a3']
  // index = 1, value = 'b2' => ['a1', 'b2', 'a3']

  return (
    <div className="mine-site-input">
      Mine Site Input
      {names.map((val, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            id={`ore${index + 1}`}
            value={val}
            onChange={(evt) => handleChangeInput(evt, index)}
          />
        </div>
      ))}
      <button id="addMoreButton" onClick={showOres}>
        Add More
      </button>
      <button id="doneButton" onClick={showOverview}>
        Done Button
      </button>
    </div>
  );
}

export default MineSiteInput;
