import React from 'react';

function Checkbox({ checked, onChange }) {
  return (
    <div>
      <input type='checkbox' checked={checked} onChange={onChange} />
    </div>
  );
}

export default Checkbox;