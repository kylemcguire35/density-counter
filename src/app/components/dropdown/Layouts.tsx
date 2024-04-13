interface DropdownProps {
  layouts: any[];
  handleChange: (e: number) => void;
}

export default function LayoutDropdown({
  layouts,
  handleChange,
}: DropdownProps) {
  const handleOptionChange = (e: any) => {
    const layoutId = Number(e.target.value);
    handleChange(layoutId);
  };
  return (
    <div className="relative inline-block text-left">
      <select onChange={handleOptionChange}>
        <option value="⬇️ Select a layout ⬇️"> -- Select a layout -- </option>
        {layouts.map((layout) => (
          <option value={layout.id}>{layout.name}</option>
        ))}
      </select>
    </div>
  );
}
