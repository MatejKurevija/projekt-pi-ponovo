<template>
  <div class="app">
    <cards/>
</div>
<h1>  {{title}} </h1>

</template>
<script>
import store from "@/store"
import {getDocs, collection , db} from "@/firebase"
import cards from '@/components/cards.vue';



export default {
  components: { cards },
    
        data() {
            return {
            store,
            Createdat: "",
            adress: "", 
            country: "",  
            desc: "", 
            region: "", 
            renttime: "", 
            title: "", 
            value: "", 
            zip: "", 
		};
        },

    
        

        mounted(){
            
            this.dohvatitema();

        },


        methods: {
                   async dohvatitema(){
                            const querySnapshot = await getDocs(collection(db, "products"));
                            querySnapshot.forEach((doc) => {
                            if (doc.id === `${doc.data().renter}`) {
                            this.Createdat = `${doc.data().Createdat}`;
                            this.adress = `${doc.data().adress}`;
                            this.country = `${doc.data().country}`;
                            this.desc = `${doc.data().desc}`;
                            this.region = `${doc.data().region}`;
                            this.renttime = `${doc.data().renttime}`;
                            this.title = `${doc.data().title}`;
                            this.value = `${doc.data().value}`;
                            this.zip = `${doc.data().zip}`;
                                }
                            });
                          
                            
                    }

      }
};

</script>

