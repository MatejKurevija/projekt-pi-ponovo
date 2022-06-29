<template v-if="loaded">
<div class="razmak">
<h1> Here you can see the items you need to send out!!</h1>
</div>

  <div class="app" >
    <sendout 
    
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
    :renter="podatak.renter"
    :zip="podatak.zip"
    :buyer="podatak.buyer"
    >
    </sendout>
</div>


</template>
<script>
import store from "@/store"
import {getDocs, collection , db} from "@/firebase"
import sendout from '@/components/sendout'



export default {
components: { sendout },
name: sendout,
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
                            const querySnapshot = await getDocs(collection(db, "sendout"));

                            let      trenutnipodatci = []

                            querySnapshot.forEach((doc) => {   
                                if(store.courentuser  === `${doc.data(String).renter}`){
                            trenutnipodatci = {"createdat": `${doc.data(Date).Createdat}`, 
                                                "title": `${doc.data(String).title}`,
                                                "adress": `${doc.data(String).adress}`,
                                                "country": `${doc.data(String).country}`,
                                                "desc": `${doc.data(String).desc}`,
                                                "region": `${doc.data(String).region}`,
                                                "renttime": `${doc.data(String).renttime}`,
                                                "value": `${doc.data(String).value}`,
                                                "buyer": `${doc.data(String).buyer}`,
                                                "renter": `${doc.data(String).renter}`,
                                                "zip": `${doc.data(String).zip}`,
                                                "doc": doc.id,
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
