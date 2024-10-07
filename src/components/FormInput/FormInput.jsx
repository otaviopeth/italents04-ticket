import './FormInput.css'

const FormInput = ({ label, ...props }) => (
  <div className="form-input">
    <label>{label}</label>
    <input {...props} />
  </div>
);
export default FormInput;