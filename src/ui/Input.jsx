function Input({ label, state, setState, type = "text" }) {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
        id="floatingInput"
        placeholder={label}
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
}

export default Input;
