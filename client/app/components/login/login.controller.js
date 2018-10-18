class LoginController {
  constructor(asdf,$http,$timeout,$route) {
      'ngInject';
      this.resultService = asdf;
      this.emails = '';
      this.password = '',
      this.$http = $http,
      this.$timeout = $timeout,
      this.error = [],
      this.allEroors = 0,
      this.ok = 0,
        this.$route = $route,
      this.passwordRequire = 0,
      this.emailRequire=0,
      this.button = 0,
      this.loading = false
  }
  signIn(value){
    this.error = []
    this.valids(!this.password, 'password', "Password required");
    this.valids(!this.emails, 'email', "Email required");
    if (this.error.length> 0){
        this.allEroors = 1;
        this.button = 1;
    } else {
        this.sent()
    }
    console.log(this.$route)
    //service
    // this.resultService.getResults();
    this.setTime()
  }
  sent(){
    this.$http.post('http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/login',{
        email: this.emails,
        password: this.password
    }).
    then((response)=>  {
        this.loading = false
        sessionStorage.setItem('token',response.data.token);
        this.ok = 1;
        let it = this;
        this.$timeout(function () {
            // it.$router.push({name:'catalogs'})
        },2000)
    })
    .catch((response)=> {
        this.loading = false;
        let email = response.response.data.email;
        if(email != null && Array.isArray(email)){
            for(let i = 0; i < email.length;i++){
              this.error.push(email[i])
              this.allEroors = 1;
              this.emailRequire = 1;
              this.button = 1;
            }
        }
        if (response.response.data.error != undefined){
            this.error.push(response.response.data.error)
            this.allEroors = 1;
            this.button = 1;
        }
        this.button = 1;
    });
  }
  valids(valid, name, textEror){
    if (valid) {
        this.error.push(textEror);
        name == 'password'?this.passwordRequire = 1 : this.emailRequire = 1
    }
  }
  setTime(){
    let it = this
    this.$timeout(function () {
        it.allEroors = 0;
        it.ok = 0;
        it.passwordRequire = 0;
        it.emailRequire=0;
        it.button = 0;
    }, 2000);
  }
}

export default LoginController;
