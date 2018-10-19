class RegistrationController {
  constructor(asdf,$http,$timeout,$location) {
      'ngInject';
      this.resultService = asdf;
      this.$http = $http,
      this.$timeout = $timeout,
      this.emails = '';
      this.password = '',
      this.name='',
      this.error = [],
      this.allEroors = 0,
      this.ok = 0,
      this.$location = $location,
      this.passwordRequire = 0,
      this.emailRequire=0,
      this.nameRequire = 0,
      this.button = 0,
      this.loading = false
  }
  create(value){
      this.error = []
      this.valids(!this.password, 'password', "Password required");
      this.valids(!this.emails, 'email', "Email required");
      this.valids(!this.name, 'login', "login required");
      if (this.error.length> 0){
        this.allEroors = 1;
        this.button = 1;
      } else {
        this.sent()
      }
      //service
      // this.resultService.getResults();
      this.setTime()
  }
  sent(){
      this.$http.post('http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/register',{
          username: this.name,
          email: this.emails,
          password: this.password
      }).
      then((response)=>  {
        console.log(this, response)
          if(response.status == 200) {
              let email = response.data.email
              if (email != null && Array.isArray(email)) {
                  for (let i = 0; i < email.length; i++) {
                      this.error.push(email[i])
                      this.allEroors = 1;
                      this.emailRequire = 1;
                      this.button = 1;
                  }
              }
              else {
                  this.created = 1;
                  let it = this;
                  this.loading = false;
                  setTimeout(function () {
                      it.created = 0
                      it.$router.push({name: 'login'})
                  }, 2000)
              }
              this.loading = false;
          }
          else{
              console.log(response.status)
              this.loading = false;
          }
      })
      .catch((response)=> {
          console.log(response.response.data)
          this.loading = false
      });
  }
  valids(valid, name, textEror){
      if (valid) {
            this.error.push(textEror);
            name == 'password'?this.passwordRequire = 1 : this.emailRequire = 1
            name == 'login'?this.nameRequire = 1: this.nameRequire = 0
      }
  }
  setTime(){
      let it = this
      this.$timeout(function () {
          it.allEroors = 0;
          it.ok = 0;
          it.passwordRequire = 0;
          it.emailRequire=0;
          it.nameRequire=0;
          it.button = 0;
      }, 2000);
  }
}

export default RegistrationController;
