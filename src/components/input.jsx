import { ListInput } from 'framework7-react';

export const Input = ({
  name,
  label,
  formik,
  placeholder,
  type = 'text',
}) => {
  const { values, setFieldValue, isSubmitting } = formik

  const changeInput = (e) => {
    setFieldValue(name, e.target.value)
  }

  return (
      <ListInput label={label} type={type} placeholder={placeholder} onChange={changeInput} value={values[name]} disabled={isSubmitting} name={name} style={{listStyleType: "none"}}/>
  )
}
