function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        placeholder="مثال: 091211111111"
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}
export default TextField;
