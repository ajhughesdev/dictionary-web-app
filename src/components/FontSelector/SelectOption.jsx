const SelectOption = ({ option, handleSelect, setSelectedOption, setShowDropdown, }) => {
  const { id, value, fontFamily } = option

  const handleClick = () => {
    handleSelect(fontFamily)
    setShowDropdown(false)
    setSelectedOption(value)
  }

  return (
    <div className='select-item' style={{ fontFamily }} onClick={handleClick}>
      {value}
    </div>
  )
}

export default SelectOption