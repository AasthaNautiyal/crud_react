export interface FormValue {
    [K: string | number]: string | number;
  }
  function isEmpty(value: any) {
    return value === 0 || value === null || value === 0;
  }
  type rules = Array<FormRules>;
interface FormRules {
  key: string | number;
  label: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  pattern?: RegExp;
}
  const validator = (
    formValue: FormValue,
    rules: rules,
    callback: (errors: any) => void
  ) => {
    rules.forEach(r => {
      let value = formValue[r.key];
      if (isEmpty(value)) {
        console.log("Too short");
      }
    });
  }
    export default validator;