<template>
  <el-form ref="form" :model="form">
    <ValidationProvider :rules="rules.email" name="Email">
      <el-form-item
        slot-scope="{ errors }"
        :error="errors[0]"
        label="Email"
        :required="'required' in rules.email"
      >
        <el-input v-model="form.email"></el-input>
      </el-form-item>
    </ValidationProvider>

    <ValidationProvider :rules="rules.custom" name="Custom">
      <el-form-item
        slot-scope="{ errors }"
        :error="errors[0]"
        label="Custom message for required rule"
        :required="'required' in rules.custom"
      >
        <el-input v-model="form.custom"></el-input>
      </el-form-item>
    </ValidationProvider>

    <el-form-item>
      <el-button native-type="submit" type="primary">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { rules } from "./validation";
import { localize } from "vee-validate";
import en from "vee-validate/dist/locale/en.json";

localize({
  en
});

export default {
  name: "Form",
  data: () => {
    return {
      rules,
      form: {
        email: "",
        name: "",
        custom: ""
      }
    };
  },
  components: {
    ValidationProvider
  }
};
</script>

