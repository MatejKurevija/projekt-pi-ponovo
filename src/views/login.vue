<template>
  <div class="login">
    <h1>This is an login page</h1>
    <div class = "container">
      <div class = "row">
          <div class = "col-sm"></div>
          <div class = "col-sm">
            <form>
              <div class = "form-group">
                <label for = "exampleInputEmail">Email adress</label>
                <input type = "email" class = "form-control" id = "exampleInputEmail" aria-describedby="emailHelp" placeholder = "Enter email" />
                
              </div>
              <div class = "form group">
                <label for = "exampleInputPassword">Password</label>
                <input type = "password" class = "form-control" id = "exampleInputPassword"
                placeholder = "Password"/>
              </div>
              <button type= "submit" class = " btn btn-primary">Submit</button>
            </form>
            <div class = "text"><p>Dont have an account?<a href = "/signup"> Sign up TODAY!</a></p>
            </div>
          </div>
          <div class =" col-sm"></div>
      </div>
    </div>
  </div>
</template>
