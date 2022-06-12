<template>
  <div class="login">
    <h1>Login</h1>
    <div class = "container">
      <div class = "row">
          <div class = "col-sm"></div>
          <div class = "col-sm">
            <form>
              <div class = "form-group">
                <label for = "exampleInputEmail">Email adress</label>
                <input type = "email" class = "form-control" v-model="email" id = "exampleInputEmail" aria-describedby="emailHelp" placeholder = "Enter email" />
                
              </div>
              <div class = "form group">
                <label for = "exampleInputPassword">Password</label>
                <input type = "password" class = "form-control" v-model="password" id = "exampleInputPassword"
                placeholder = "Password"/>
              </div>
              <button type= "button" @click="login" class = " btn btn-primary">Log in</button>
            </form>
            <div class = "text"><p>Dont have an account?<a href = "/signup"> Sign up TODAY!</a></p>
            </div>
            <div class = "text"><p>Forgot your password?<a href = "/passwordresset">Reset your password</a></p>
            </div>
          </div>
          
          <div class =" col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from "@/firebase";

export default {
	name: "login",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		async login() {
			try {
				await signInWithEmailAndPassword(auth, this.email, this.password)
       
			} catch (error) {
				console.log(error.message);
				console.log(error.code);
			}
      this.$router.replace({name: "home"});
		},
	},
};
</script>
