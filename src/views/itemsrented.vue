<template v-if="loaded">
<div class="razmak">
<h1> Here you can see the items you bought!!</h1>
</div>

  <div class="app" >
    <itemsrented 
    
    v-for="podatak in podatci "
    :key="podatak.title"
    :title="podatak.title"
    :createdat="podatak.createdat"
    :adress="podatak.adress"
    :country="podatak.country"
    :desc="podatak.desc"
    :region="podatak.region"
    :renttime="podatak.renttime"
    :value="podatak.value"
    :renter="podatak.renter"
    >
    </itemsrented>
</div>


</template>
<script>
import store from "@/store"
import {getDocs, collection , db} from "@/firebase"
import itemsrented from '@/components/itemsrented'



export default {
components: { itemsrented },
name: itemsrented,
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
                            const querySnapshot = await getDocs(collection(db, "rented"));

                            let      trenutnipodatci = []

                            querySnapshot.forEach((doc) => {   
                                if(store.courentuser  == `${doc.data().buyer}`){
                            trenutnipodatci = {"createdat": `${doc.data().Createdat}`, 
                                                "title": `${doc.data().title}`,
                                                "adress": `${doc.data().adress}`,
                                                "country": `${doc.data().country}`,
                                                "desc": `${doc.data().desc}`,
                                                "region": `${doc.data().region}`,
                                                "renttime": `${doc.data().renttime}`,
                                                "value": `${doc.data().value}`,
                                                "buyer": `${doc.data().buyer}`,
                                                "renter": `${doc.data().renter}`,
                                                };
                                
                                this.podatci.push(trenutnipodatci);
                                
                                trenutnipodatci = []; 
                                
                                }
                                },
                            
                            ); 
                           
                            
                    }
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
