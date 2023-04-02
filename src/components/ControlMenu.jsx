const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      { optionList.map((it, idx) => (
        <option value={it.value} key={idx}>{it.name}</option>
      ))}
    </select>
  )
}

export default ControlMenu;