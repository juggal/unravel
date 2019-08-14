<template lang="html">
<div>
  <b-card
    title="Login"
  >
    <b-form @submit="onSubmit" @reset="onReset">

        <b-form-input
          id="input-1"
          v-model="form.id"
          type="text"
          required
          placeholder="Enter ID"
        ></b-form-input>

        <b-form-input
          id="input-2"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>

        <b-form-input
        id="input-3"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
        ></b-form-input>

      <b-button class="btn" type="submit" variant="primary">Login</b-button>
      <b-button class="btn" type="reset" variant="danger">Reset</b-button>

    </b-form>
  </b-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
        email: '',
        pno: '',
        status: false
      }
    }
  }
}
</script>

<style lang="css" scoped>
  #input-1, #input-2, #input-3 {
    width: 18%;
    margin: 2% 0% 0% 25%;
  }

  .btn {
    margin: 1% 0% 0% 1%;
  }
</style>
