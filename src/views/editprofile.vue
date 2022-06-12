<template>
    <div class="container space-between">
        <button class="px-5 me-4 btn btn-sm btn-primary" @click="resetPassword()">Reset password</button>
        <button align="left" class="px-5 btn btn-sm btn-primary">Delete my profile</button>

    </div>
  <div class="container mt-3">
    <div class="card p-3 text-center">
        <div class="d-flex flex-row justify-content-center mb-3">
            <div class="image"> <img height="100" width="100" contain src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" class="rounded-circle"> <span><i class='bx bxs-camera-plus'></i></span> </div>
            <div class="d-flex flex-column ms-3 user-details">
                <h4 class="mb-0">Welcome {{firstName}} {{lastName}}</h4>
                <div class="ratings"> <span>4.5</span> <i class='bx bx-star ms-1'></i> </div>
            </div>
        </div>
        <h4>Edit Profile</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="inputs"> <label>Name</label> <input class="form-control" type="text" placeholder="Name"> </div>
            </div>
            <div class="col-md-6">
                <div class="inputs"> <label>Email</label> <input class="form-control" type="text" placeholder="Email"> </div>
            </div>
            <div class="col-md-6">
                <div class="inputs"> <label>City</label> <input class="form-control" type="text" placeholder="City"> </div>
            </div>
            <div class="col-md-6">
                <div class="inputs"> <label>Country</label> <input class="form-control" type="text" placeholder="Country"> </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="about-inputs"> <label>About</label> <textarea class="form-control" type="text" placeholder="{{about}}"> </textarea> </div>
            </div>
        </div>
        <div class="mt-3 gap-2 d-flex justify-content-end"> <button class="px-3 btn btn-sm btn-outline-primary"><a href="/">Cancel</a></button> <button @click="save()" class="px-3 btn btn-sm btn-primary">Save</button> </div>
    </div>
</div>
</template>


<script>
import { collection, getDocs, db,  auth, sendPasswordResetEmail } from "@/firebase";
import store from '@/store'

export default {
    	name: "EditProfile",
	data() {
		return {
            store,
			name: "EditProfile",
			firstName: "",
			lastName: "",
			about: "",
			adressLine: "",
			country: "",
			city: "",
			state: "",
			alertMessage: "",
			alertType: "",
			greska: "false",
			sent: "false",
			email: "",  
		};
	},
    mounted() {
    this.fetchCurrentUserData();
	},
    

 methods: {
     async fetchCurrentUserData() {
			 const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
            if (store.courentuser === `${doc.data().uid}`) {
            this.firstName = `${doc.data().firstName}`;
            this.lastName = `${doc.data().lastName}`;
            this.city = `${doc.data().city}`;
            this.state = `${doc.data().state}`;
            this.email = `${doc.data().email}`;
            this.about = `${doc.data().about}`;
            
        }
      });
		},
         async resetPassword() {
      try {
        await sendPasswordResetEmail(auth, this.email)
          alert("Succesfuly sent the password reset email");
          this.sent = true;
      }
      catch (error) {
            console.log(error);
         }
    },
    save(){

    }
 }
}
</script>
 


<style>
.card {
    border: none
}

.image {
    position: relative
}

.image span {
    background-color: lightgreen;
    color: #fff;
    padding: 6px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    font-size: 13px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -0px;
    right: 0px
}

.user-details h4 {
    color: black
}

.ratings {
    font-size: 30px;
    font-weight: 600;
    display: flex;
    justify-content: left;
    align-items: center;
    color: #f9b43a
}

.user-details span {
    text-align: left
}

.inputs label {
    display: flex;
    margin-left: 3px;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 4px
}

.inputs input {
    font-size: 14px;
    height: 40px;
    border: 2px solid #ced4da
}

.inputs input:focus {
    box-shadow: none;
    border: 2px solid grey
}

.about-inputs label {
    display: flex;
    margin-left: 3px;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 4px
}

.about-inputs textarea {
    font-size: 14px;
    height: 100px;
    border: 2px solid #ced4da;
    resize: none
}

.about-inputs textarea:focus {
    box-shadow: none
}

.btn {
    font-weight: 600
}

.btn:focus {
    box-shadow: none
}
</style>
