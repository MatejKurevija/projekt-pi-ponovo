<template v-if="loaded">
<h1>Welcome to the store!</h1>
  <div class="app" >
    <cards 
    v-for="podatak in podatci"
    :key="podatak.doc.id"
    :title="podatak.title"
    :createdat="podatak.createdat"
    :adress="podatak.adress"
    :country="podatak.country"
    :desc="podatak.desc"
    :region="podatak.region"
    :renttime="podatak.renttime"
    :city="podatak.city"
    :value="podatak.value"
    :renter="podatak.renter"
    :zip="podatak.zip"
    :imageURL="podatak.imageURL"
    :doc="podatak.doc"
    >
    </cards>
</div>


</template>
<script>
import store from "@/store"
import {getDocs, collection , db} from "@/firebase"
import cards from '@/components/cards'



export default {
components: { cards },
name: cards,
        data() {
            return {
            loaded: false,
            store,
            podatci: [],
            
            
		};
        },


    async mounted() {
        
            await this.dohvatitema();
            this.loaded = true;
            
    },
    

 methods: {
        async dohvatitema(){
                            const querySnapshot = await getDocs(collection(db, "products"));

                            let      trenutnipodatci = []

                            querySnapshot.forEach((doc) => {   

                               

                            trenutnipodatci = {"createdat": `${doc.data(Date).Createdat}`, 
                                                "title": `${doc.data(String).title}`,
                                                "adress": `${doc.data(String).adress}`,
                                                "country": `${doc.data(String).country}`,
                                                "desc": `${doc.data(String).desc}`,
                                                "zip": `${doc.data(String).zip}`,
                                                "region": `${doc.data(String).region}`,
                                                "renttime": `${doc.data(String).renttime}`,
                                                "value": `${doc.data(String).value}`,
                                                "renter": `${doc.data(String).renter}`,
                                                "isrented": `${doc.data(Boolean).isrented}`,
                                                "city": `${doc.data(Boolean).city}`,
                                                "imageURL": `${doc.data(String).imageURL}`,
                                                "doc": doc.id,
                                                
                                                };
                                
                                this.podatci.push(trenutnipodatci);
                                
                                trenutnipodatci = []; 
                                
                                
                                },
                            
                            ); 
                           
                            
                    },

                  
                    
                }

};


</script>

