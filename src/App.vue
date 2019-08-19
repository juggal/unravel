<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Login</router-link> |
    <router-link to="/rules1">Rules1</router-link> |
    <router-link to="/round1">Round1</router-link> |
    <router-link to="/rules2">Rules2</router-link> |
    <router-link to="/round2">Round2</router-link> 
  </div>
  <router-view />
</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
#app {
    font-family: 'Acme','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
