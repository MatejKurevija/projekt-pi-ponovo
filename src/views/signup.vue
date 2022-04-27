<template>
  <div class="signup">
    <h1>This is an signup page</h1>
    <div class = "container">
      <div class = "row">
          <div class = "col-sm"></div>
          <div class = "col-sm">
            <form>
              <div class = "form-group">
                <label for = "exampleInputfirstname">First Name</label>
                <input type = "firstname" class = "form-control" id = "exampleInputfirstname"  
                placeholder = "First Name" />
              </div>
              <div class = "form group">
                <label for = "exampleInputlastname">Last Name</label>
                <input type = "lastname" class = "form-control" id = "exampleInputlastname"
                placeholder = "Last Name"/>
              </div>
                <div class = "form group">
                <label for = "exampleInputemail">Email</label>
                <input type = "Email" class = "form-control" id = "exampleInputEmail" aria-describedby="emailHelp" placeholder = "Enter email" />
              </div>
                <div class = "form group">
                <label for = "exampleInputPassword">Password</label>
                <input type = "password" class = "form-control" id = "exampleInputPassword"
                placeholder = "Password"/>
              </div>
                <div class = "form group">
                <label for = "exampleInputCPassword">Password</label>
                <input type = "Cpassword" class = "form-control" id = "exampleInputCPassword"
                placeholder = "Confirm your password"/>
              </div>
                <div class = "form group">
                <label for = "exampleInputCountry">Country</label>
                <input type = "Country" class = "form-control" id = "exampleInputCountry"
                placeholder = "Country"/>
                  <div class = "form group">
                <label for = "exampleInputCity">City</label>
                <input type = "City" class = "form-control" id = "exampleInputCity"
                placeholder = "City"/>
              </div>
                <div class = "form group">
                <label for = "exampleInputState/prov">State/Provinance</label>
                <input type = "State/prov" class = "form-control" id = "exampleInputState/prov"
                placeholder = "State/Provinance"/>
              </div>
                <div class = "form group">
                <label for = "exampleInputDate">Date of birth</label>
                <input type = "Date" class = "form-control" id = "exampleInputDate"
                placeholder = "Date Of birth"/>
              </div>
              </div>
              <button type= "submit" class = " btn btn-primary">Submit</button>
            </form>
          </div>
          <div class =" col-sm"></div>
      </div>
    </div>
  </div>
</template>
