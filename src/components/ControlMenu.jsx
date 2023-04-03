import React from "react";
import MenuSelect from "../styles/MenuSelect";
const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <MenuSelect 
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      { optionList.map((it, idx) => (
        <option value={it.value} key={idx}>{it.name}</option>
      ))}
    </MenuSelect>
  )
}

export default React.memo(ControlMenu);