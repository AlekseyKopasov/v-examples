<template>
  <modal
      title="Modal with validate"
      @close="$emit('close')"
  >

    <div slot="body">
      <form @submit.prevent="formSubmit">
        <div class="form-item" :class="{ errorInput: $v.name.$error }">
        <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required">Fill is required!</p>
          <p class="errorText" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }}!</p>
          <input
              v-model="name"
              :class="{ error: $v.name.$error }"
              @change="$v.name.$touch() "
          >
        </div>
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Fill is required!</p>
          <p class="errorText" v-if="!$v.email.email">Email is not corrected!</p>
          <input
              v-model="email"
              :class="{ error: $v.email.$error }"
              @change="$v.email.$touch()"
          >
        </div>
        <button type="submit" class="btn btnPrimary">Submit!</button>
      </form>
    </div>

  </modal>
</template>

<script>

import { required, minLength, email } from 'vuelidate/lib/validators';
import modal from '../components/UI/Modal.vue';

export default {
  data: () => ({
    name: '',
    email: '',
  }),
  components: {
    modal
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email
    },
  },
  methods: {
    formSubmit() {
      this.$v.$touch()
      if (!this.$v.invalid) {
        const user = {
          name: this.name,
          email: this.email,
        };

        console.log(user);

        // IF done
        this.name = '';
        this.email = '';
        this.$v.$reset();
        this.$emit('close');
      }
    },
  },
};
</script>

<style lang="scss">
  .form-item .errorText {
    display: none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: #de4040;
  }

  .form-item {
    &.errorInput .errorText {
      display: block;
    }
  }

  input.error {
    border-color: #de4040;
  }
</style>
