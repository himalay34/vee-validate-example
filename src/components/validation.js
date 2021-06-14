import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend("min", min);
extend("custom", {
  computesRequired: true,
  validate: value => !!value,
  message: "This is custom required message"
});

export const rules = {
  custom: {
    custom: true
  },

  email: {
    required: true,
    email: true,
    min: 14
  }
};
