import React from 'react';

function GenderCheckbox({ onCheckBoxChange, selectedGender }) {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span className='label-text font-bold text-orange-600'>Male</span>
          <input 
            type="checkbox" 
            name="gender"  
            className='checkbox border-slate-900'
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className='form-control'>
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className='label-text text-pink-600 font-bold'>Female</span>
          <input 
            type="checkbox" 
            name="gender"  
            className='checkbox border-slate-900'
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
