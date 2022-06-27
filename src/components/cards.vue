<template>
    
<div class="nesto" style="width: 18rem;">
  <img class="card-img-top" :src="imageURL" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" > {{title}}</h5>
    <p class="card-text" >Description: <small>{{desc}}</small></p>
    <p class="card-text">Country: <small>{{country}}</small></p>
    
      <p class="card-text"><small class="text-muted">Rent price: {{value}}$</small></p>
      <button class="px-5  btn btn-sm btn-primary"  @click="provjera()">Rent out</button>
      
  </div>
</div>


</template>

<script>
import store from "@/store"
import {getDocs, addDoc, collection, db, query,  where} from '@/firebase'
import { deleteDoc, doc} from '@firebase/firestore'


export default {
  	props: ["createdat", "title", "zip", "city", "adress", "value", "desc", "country", "region", "renter", "imageURL", "doc"],
    
    name: "cards",
    data () {
      return{
        store,
        buyer: store.courentuser,

      }
    },

mounted(){

this.proizvod();
this.g();
},


methods: {

  

  async provjera() {
     if(store.courentuser == ""){
          alert("You can not rent out without being loged in!");
        }
        else{
          if(store.courentuser != this.renter){
        const  rented = {
            buyer: this.buyer,
            renter: this.renter, 
            adress: this.adress,
            desc: this.desc,
            country: this.country,
            region: this.region,
            city: this.city,
            value: this.value,
            title: this.title,
            zip: this.zip,
                      
        };
        
         

        await addDoc(collection(db, "rented"), rented);
        await addDoc(collection(db, "sendout"), rented);
  
          const q = query(collection(db, "products"), where("title", "==", this.title));

              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((dok) => {
                   deleteDoc(doc(db, 'products', dok.id));
               
              });
            
            window.location.reload();
          }
          else {
            alert("You cant rent your own product!");
            
          }
            
        }
  },
   g(){
    console.log(store.courentuser);
  }

}


}
</script>

<style >
.nesto {
    
    width: calc(50% - 100px);
    padding: 15px;
    text-align: center;
    font-size: 15px;
    color: black;
    display: block;
    border: 1px solid black;
    border-radius: 25px;
    margin-left: 25px;
    margin-top: 25px;
    
}

@media (min-width: 102px) {
    .nesto {
        float: left;
    }
}
</style>
