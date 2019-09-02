<template lang="html">
<div>
  <b-container class="container"><b-row><b-col>
    <b-card
      title="Login"
      class="card"
    >
      <b-form @submit="onSubmit">

          <!-- <b-form-input
            id="input-1"
            v-model="form.id"
            type="text"
            required
            placeholder="Enter ID"
          ></b-form-input> -->

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

        <b-button class="btn" variant="outline-success" @click="onSubmit">Login</b-button>

      </b-form>
    </b-card></b-col></b-row>
  </b-container>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        pno: ''
      },
      users: [],
      config: {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
      },
      db: null
    }
  },
  methods: {
    onSubmit: function() {

      //getting databse instance
      const unravel = this.db.collection('unravel');
      const unravelScore = this.db.collection('unravel-score');
      const attendedProtovision = this.db.collection('Attended Protovision');
      const attendedUnravel = this.db.collection('Attended Unravel');

      //validation
      attendedUnravel.get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data())
        //iterating over documents to check for user
        for(let item of documents) {
          if(item.data.name == this.form.name && item.data.email === this.form.email && item.data.number === this.form.pno) {
            console.log("User found");
            this.$router.push('rules1');
            break;
          }else {
              this.$bvToast.toast(`Please enter your details correctly`, {
              title: 'Login Failed',
              autoHideDelay: 4000,
              variant: 'warning',
              appendToast: true
            })
          }
        }
      });
    }
  },
  mounted: function () {
    //creating firebase instance
      this.db = firebase.initializeApp(this.config).firestore();

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
