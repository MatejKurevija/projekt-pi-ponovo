<template>
    <table class="table">
     
  <tbody>
    <tr>
      <td><h2>-</h2></td>
      <td><h2>Title:</h2> {{title}}</td>
      <td><h2>Price for rent:</h2> {{value}}</td>
      <td><h2>Description:</h2> {{desc}}</td>
      <td><h2>Country:</h2> {{country}}</td>
      <td><h2>State:</h2> {{region}}</td>
      <td><h2>Adress:</h2> {{adress}}</td>
      <td><h2>Zip:</h2> {{zip}}</td>
      <td><h2>First name:</h2> {{firstName}}</td>
      <td><h2>Last name:</h2> {{lastName}}</td>
      <td><h2>Contact email:</h2> {{email}}</td>
      
      
  


  
  </tr>
  </tbody>
</table>


</template>

<script>
import store from '@/store'
import { getDocs, collection, db } from "@/firebase";





export default {
 	  	props: ["createdat", "title", "adress", "zip", "value", "buyer", "desc", "country", "region"],
    
    name: "cards",
    data () {
      return{
       firstName: "",
			lastName: "",
            click: true,
            email: "",
            firstName: "",
            lastName: "",
      }
    },

    mounted(){
        this.fetchCurrentUserData();
    },

   methods: {
     async fetchCurrentUserData() {
			  const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
            if ( this.buyer === doc.id ) {
            this.firstName = `${doc.data().firstName}`;
            this.lastName = `${doc.data().lastName}`;
            this.city = `${doc.data().city}`;
            this.avgR = `${doc.data().avgR}`;
            this.state = `${doc.data().state}`;
            this.email = `${doc.data().email}`;
            this.about = `${doc.data().about}`;
            this.imageURL = `${doc.data().imageURL}`;
            
        }
      });
		},
        
   }
}
</script>
