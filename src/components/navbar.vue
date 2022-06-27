<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Rentara</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Store">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="rentout">Rent out</a>
        </li>
        <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My profile
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="itemsrented">Items rented</a></li>
            <li><a class="dropdown-item" href="myitems">My Items</a></li>
            <li><a class="dropdown-item" href="sendout">Send out!</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="editprofile">Edit Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="logout()" href="login">Logout</a></li>
          </ul>
        </li>
          
      </ul>
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
           <a class="nav-link"  @click="login()" >Log in/Sign up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<script>
import  store  from "@/store";
import { auth, onAuthStateChanged,} from "@/firebase";
import { signOut, getAuth } from '@firebase/auth';


onAuthStateChanged(auth, (user) => {
  if (user) {
    
    store.courentuser = user.uid;
    store.loggedin = true;
    

  } else {
    store.courentuser == null;
    store.loggedin = false
    
  }
  

});



export default	{
  data (){
    return{
      store,

    }
  },


  methods: {
     logout() {
             const auth = getAuth();
                signOut(auth).then(() => {
            
                }).catch((error) => {
                // An error happened.
                });
                console.log(store.courentuser);
  },

    async login(){
            if(store.courentuser){
                alert("you are already signed in!");
            }
            else{
                this.$router.replace({name: "login"});
            }
    }

  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
