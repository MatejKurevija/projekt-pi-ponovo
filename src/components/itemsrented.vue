<template>
    <table class="table">
     
  <tbody>
    <tr>
      <td><h2>-</h2></td>
      <td><h2>Title:</h2> {{title}}</td>
      <td><h2>Price for rent:</h2> {{value}}</td>
      <td><h2>Description:</h2> {{desc}}</td>
      <td><h2>Country:</h2> {{country}}</td>

    </tr>
  </tbody>
</table>


</template>

<script>
import store from '@/store'
import { doc, getDoc } from "firebase/firestore";





export default {
 	  	props: ["createdat", "title", "adress", "value", "desc", "country", "region"],
    
    name: "cards",
    data () {
      return{
        store,
        firstName: "",
			  lastName: "",
        
        
      }
    },
   
}
</script>
