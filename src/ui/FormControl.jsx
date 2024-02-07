/* eslint-disable react/prop-types */

function FormControl({ children }) {
  return (
    <div className="form-control flex flex-col gap-y-[6px]">{children}</div>
  );
}

export default FormControl;
