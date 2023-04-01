import sortOptionList from "../data/sortOptionList";

const ControlMenu = ({ value, onChange }) => {
  return (
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      { sortOptionList.map((it, idx) => (
        <option value={it.value} key={idx}>{it.name}</option>
      ))}
    </select>
  )
}

export default ControlMenu;