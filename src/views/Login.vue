<template lang="html">
<div>
  <b-container class="container"><b-row><b-col>
    <b-card
      title="Login"
      class="card"
    >
      <b-form @submit="onSubmit">

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
            placeholder="Enter Name"
          ></b-form-input>

          <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter Email"
          ></b-form-input>

          <b-form-input
          id="input-3"
          v-model="form.pno"
          type="number"
          required
          placeholder="Enter Phone number"
          ></b-form-input>

        <b-button class="btn" type="submit" variant="outline-success">Login</b-button>
        <b-button class="btn" type="reset" variant="outline-danger">Reset</b-button>

      </b-form>
    </b-card></b-col></b-row>
  </b-container>
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
      },
      users: []
    }
  },
  methods: {
    onSubmit: function() {
      // if(this.users.includes(this.form.id)) {
      //   console.log("Yes");
      // }else {
      //   console.log("False");
      // }
      this.$router.push('round1');
    }
  },
  mounted: function () {
    console.log("Mounted");
  }
}
</script>

<style lang="css" scoped>

   .card {
    background-color: #040404;
    border: 2px solid black;
    color: white;
  }

  #input-1, #input-2, #input-3 {
    margin: 8% 0% 0% 0%;
  }

  .btn {
    margin: 5% 0% 0% 5%;
  }

  @media (min-width: 992px) {
    .container {
      width: 25%;
    }
  }
</style>
