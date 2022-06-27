<template>
    <table class="table">
  <tbody>
    <tr>
      <td><h2>-</h2></td>
      <td><h2>Title:</h2> {{title}}</td>
      <td><h2>Item description:</h2>{{desc}}</td>
      <td><h2>Price for rent:</h2> {{value}}</td>
      
      <div>
      <input class="btn btn-primary" @click="deleteitem()"  type="button" value="Delete item">
      </div>
    </tr>

  </tbody>
</table>


</template>

<script>
import store from '@/store'
import { doc, deleteDoc, db, collection } from "firebase/firestore";





export default {
 	  	props: ["createdat", "title", "adress", "value", "city", "desc", "country", "region", "renter", "zip"],
    
    name: "cards",
    data () {
      return{
        store,
        id: this.$route.params.pid,
        
      }
    },



  methods: {
    
      async deleteitem() {
          const snapshot = await contentRef.where(this.title,'==', favoriteId)
  
          .get().then((querySnapshot)=>{
        // return query snapshot 
              return querySnapshot.docs
              // .map(doc => doc.data());

          })
          },

  }

}
</script>


<style scoped>
.table {
    
    
    text-align: center;
    font-size: 15px;
    color: black;
    border-radius: 25px;
    margin-top: 25px;
    margin-bottom: 35px;
    
}
</style>

try {
            var podatak = db.collection('products').where('doc.id','==', this.title).get();
            podatak.forEach((doc) => {
              doc.ref.delete();
            });
          } catch (error) {
            return res.json({
              status: 'error', msg: 'Error while deleting', data: error,
            });
          }