<template>
  <div class="signup">
    <h1>Sign up</h1>
    <div class = "container">
      <div class = "row">
          <div class = "col-sm"></div>
          <div class = "col-sm">
            <form>
              <div class = "form-group">
                <label for = "exampleInputfirstname">First Name</label>
                <input type = "firstname" class = "form-control" v-model= "firstname" id = "exampleInputfirstname"  
                placeholder = "First Name" required />
              </div>
              <div class = "form group">
                <label for = "exampleInputlastname">Last Name</label>
                <input type = "lastname" class = "form-control" v-model="lastname" id = "exampleInputlastname"
                placeholder = "Last Name" required/>
              </div>
                <div class = "form group">
                <label for = "exampleInputemail">Email</label>
                <input type = "Email" class = "form-control" v-model="email" id = "exampleInputEmail" aria-describedby="emailHelp" placeholder = "Enter email" required />
              </div>
                <div class = "form group">
                <label for = "exampleInputPassword">Password</label>
                <input type = "password" class = "form-control" v-model="password" id = "exampleInputPassword"
                placeholder = "Password" required />
              </div>
                <div class = "form group">
                <label for = "exampleInputCPassword">Confirm password</label>
                <input type = "password"  class = "form-control" v-model="cpassword" id = "exampleInputCPassword"
                placeholder = "Confirm your password" required />
              </div>
                <div class = "form group">
                <label for = "exampleInputCountry">Country</label>
                <input type = "Country" class = "form-control" v-model="country" id = "exampleInputCountry"
                placeholder = "Country" required />
                  <div class = "form group">
                <label for = "exampleInputCity">City</label>
                <input type = "City" class = "form-control" v-model="city" id = "exampleInputCity"
                placeholder = "City" required />
              </div>
              <div class = "form group">
                <label for = "exampleInputCity">Adress</label>
                <input type = "text" class = "form-control" v-model="adress" id = "exampleInputadress"
                placeholder = "Adress" required />
              </div>
                <div class = "form group">
                <label for = "exampleInputState/prov">State/Provinance</label>
                <input type = "State/prov" class = "form-control" v-model="state" id = "exampleInputState/prov"
                placeholder = "State/Provinance" required />
              </div>
                <div class = "form group">
                <label for = "exampleInputDate">Date of birth</label>
                <input type = "Date" class = "form-control" min="1900-01-01" max="2010-01-01" v-model="dateofb" id = "exampleInputDate"
                placeholder = "Date Of birth" required />
              </div>
                <div class = "form group">
                <label for = "exampleInputabout_">About</label>
                <input type = "about_" class = "form-control" v-model="about" id = "exampleInputabout_"
                placeholder = "About you" required />
              </div>
              </div>
              <button type= "button" @click="signup" class = " btn btn-primary">Sign up</button>
            </form>
          </div>
          <div class =" col-sm"></div>
      </div>
    </div>
  </div>
</template>


<script>
import {
   auth,
   createUserWithEmailAndPassword,
   collection,
   setDoc,
   doc,
   db,
} from '@/firebase';



  export default {
    name: "sign up",
    data (){
        return {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          cpassword: "",
          country: "",
          city: "",
          state: "",
          dateofb: "",
          uid: "",
          about: "",
          avgR: "",
          adress: "",
        };
    },

    methods: {
        async signup() {
        if (this.password !== this.cpassword)
        alert("Passwords dont match!") ;
      else {
         try {
            const res = await createUserWithEmailAndPassword(
               auth,
               this.email,
               this.password
            );
            
        const userProfileData = {
               firstName: this.firstname,
               lastName: this.lastname,
               age: new Date(this.dateofb),
               country: this.country,
               city: this.city,
               state: this.state,
               uid: res.user.uid,
               about: this.about,
               avgR: this.avgR,
               email: this.email,
               adress: this.adress,
            };
       await setDoc(
               doc(db, 'users', res.user.uid),
               userProfileData
            );
     


         } catch (error) {
            console.log(error);
         }
         alert("Signed up succesfull");
         this.$router.replace({name: "home"});
      }
    },
  }
}
</script>
