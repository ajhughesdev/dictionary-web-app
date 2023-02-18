import { useState } from 'react'

import SelectOption from './SelectOption'

import styles from './fontSelector.module.css'

const FontSelector = ({
  options,
  selectRef,
  handleSelect,
  showDropdown,
  setShowDropdown,
  handleClickOutside,
}) => {
  const [selectedOption, setSelectedOption] = useState('Serif')

  return (
    <div className={styles['custom-select']} ref={selectRef}>
      <div
        className={styles['select-selected']}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedOption}
      </div>
      {showDropdown && (
        <div className={styles['select-items']}>
          {options.map((option) => (
            <SelectOption
              key={option.id}
              option={option}
              setSelectedOption={setSelectedOption}
              handleSelect={handleSelect}
              setShowDropdown={setShowDropdown}
              handleClickOutside={handleClickOutside}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default FontSelector
