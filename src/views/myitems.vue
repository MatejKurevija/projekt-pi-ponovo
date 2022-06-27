<template v-if="loaded">
<div class="razmak">
<h1> Here you can see the items you put to the store!!</h1>
</div>

  <div class="app" >    
    <myitems 
    v-for="podatak in podatci "
    :key="podatak.doc.id"
    :title="podatak.title"
    :createdat="podatak.createdat"
    :adress="podatak.adress"
    :country="podatak.country"
    :desc="podatak.desc"
    :region="podatak.region"
    :renttime="podatak.renttime"
    :value="podatak.value"
    :zip="podatak.zip"
    :city="podatak.city"
    >
    </myitems>
</div>


</template>
<script>
import store from "@/store"
import {getDocs, collection , db, doc, getDoc} from "@/firebase"
import myitems from '@/components/myitems'
import { documentId } from '@firebase/firestore';



export default {
components: { myitems },
name: myitems,
        data() {
            return {
            loaded: false,
            store,
            podatci: [],

            
		};
        },

    async mounted() {
        
            await this.dohvatproizvoda();
            this.loaded = true;
            
    },
    

 methods: {
        async dohvatproizvoda(){
                            const querySnapshot = await getDocs(collection(db, "products"));
               

                            let      trenutnipodatci = []

                            querySnapshot.forEach((doc) => {   
                             
                                if(store.courentuser  == `${doc.data().renter}`) {
                            trenutnipodatci = {"createdat": `${doc.data(String).Createdat}`, 
                                                "title": `${doc.data(String).title}`,
                                                "adress": `${doc.data(String).adress}`,
                                                "isrented": `${doc.data(String).isrented}`,
                                                "country": `${doc.data(String).country}`,
                                                "desc": `${doc.data(String).desc}`,
                                                "region": `${doc.data(String).region}`,
                                                "value": `${doc.data(String).value}`,
                                                "renter": `${doc.data(String).renter}`,
                                                "zip": `${doc.data(String).zip}`,
                                                "city": `${doc.data(String).city}`,
                                                "doc": doc.id,
                                                };
                                
                                this.podatci.push(trenutnipodatci);
                                
                                trenutnipodatci = []; 
                                
                                }
                                },
                                
                            ); 

                    },
            
            
            
    }

};


</script>

<style scoped>
.razmak {
    
    
    text-align: center;
    font-size: 15px;
    color: black;
    border-radius: 25px;
    margin-top: 25px;
    margin-bottom: 35px;
    
}
</style>
