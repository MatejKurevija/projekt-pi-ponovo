<template>
    <div class="container" align="center">
      <div  class="row">
        <div class="col">
 
 <h1> Rent out your item </h1>
  
<div class="input-group mb-3" >
  <span class="input-group-text" id="basic-addon3" >Title</span>
  <input type="text" class="form-control" v-model="title" id="basic-url" aria-describedby="basic-addon3" >
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">Description</span>
  <textarea class="form-control" v-model="desc" type="text"></textarea>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">Country</span>
  <input type="text" class="form-control" v-model="country" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">City</span>
  <input type="text" class="form-control" v-model="city" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">Region</span>
  <input type="text" class="form-control" v-model="region" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">Zip</span>
  <input type="number" class="form-control" v-model="zip" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">Adress</span>
  <input type="text" class="form-control" v-model="adress" id="basic-url" aria-describedby="basic-addon3">
</div>


<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input placeholder="Value of your product" v-model="value" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
  
</div>



 <file-input v-model="imageRef"  is-image  ></file-input>
  


<!-- <div class="input-group mb-3">
  <span class="input-group-text">Available rent time</span>
  <input placeholder="Type hours days months or years!" type="text" v-model="renttime" class="form-control" aria-label="renttime" disabled>
 
</div> -->

<input class="btn btn-primary" @click="rentout()"  type="Rent out" value="Rent out">


 </div>
    </div>
    </div>
</template>

<script>
import store from "@/store";
import {
   collection,
   addDoc,
   db,
   ref,
   updateDoc,
   
} from '@/firebase';
import { uploadBytes, getStorage, getDownloadURL, } from '@firebase/storage';
import FileInput from 'vue3-simple-file-input';


export default {
  components: { FileInput },
  name: "rentout",
	data() {
		return {
      store,
			title: "",
			desc: "",
			country: "",
			city: "",
			region: "",
			zip: "",
			adress: "",
      image: null,
      value: "",
      createdAt: Date.now(),
      renter: "",
      isrented: false,
			imageRef: null,
     
		};
	},
 
  methods: {
    async rentout(){
        const rentout = {
            title: this.title,
            desc: this.desc,
            country: this.country,
            city: this.city,
            region: this.region,
            zip: this.zip,
            adress: this.adress,
            value: this.value,
            renter: this.store.courentuser,
            Createdat: this.createdAt,
            isrented: this.isrented,
            

        };
        if(store.courentuser == ""){
          alert("You can not rent without being loged in!");
          this.$router.replace({name: "login"});
        }
        else{
            if(this.title == "" 
            || this.desc == ""
            || this.country == "" 
            || this.city == ""
            || this.region == ""
            || this.zip == ""
            || this.adress == ""
            || this.value == ""
            ){
              alert("Please insert all your product information!");
            }
            else{
                   
                    const imageName = "storepics/" + Date.now() + store.courentuser  + ".png";
                    const storage = getStorage();
                    const storageRef = ref(storage, imageName);
                   
                    
                    uploadBytes(storageRef, this.imageRef.file).then((snapshot) => {
                      
                      getDownloadURL(ref(storage, storageRef, imageName))
                    .then((url) => {
                      updateDoc(docRef, {
                      imageURL: url,
                    });
                      
                    })
                    
                      
                    });
                    
                    

                const docRef= await addDoc(collection(db, "products"), rentout);
                this.$router.replace({name: "Store"});
            }
        }
          
     },
  }
}
</script>


