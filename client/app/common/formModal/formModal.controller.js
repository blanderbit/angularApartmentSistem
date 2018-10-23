class FormModalController {
  constructor($http,$timeout,dataService) {
      'ngInject';
    this.dataService = dataService
      this.name = 'formModal';
    this.$http = $http;
      this.$timeout = $timeout;
      this.street = '';
      this.star = 1;
      this.link = '';
      this.streetRequire = 0;
      this.linkRequire = 0;
      this.button = 0;
      this.oks = 0;
      this.objNumber = data.objNumber;
      this.token = sessionStorage.getItem('token');
      this.loading = false;
      this.nativeLink = '';
      this.objNumber = [{one:5, two:0}, {one:4, two:1}, {one:3, two:2}, {one:2, two:3}, {one:1,two:4},];
  }

  valids (valid, name, textEror) {
    if (valid) {
      name == 'street'?this.streetRequire = 1 : this.linkRequire = 1
    }
  }

  create(){
      this.valids(!this.street, 'street', "Street required");
      this.valids(!this.link, 'link', "Link required");
      if(this.streetRequire > 0 || this.linkRequire > 0){
      } else {
          this.loading = true
          let star = this.replaceStreetInNumber(this.star)
          let url ='http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/posts'
          let req = {
              method: 'POST',
              url: url,
              headers: {
                Authorization:sessionStorage.getItem('token'),
                  "X-Token-Auth":sessionStorage.getItem('token')
              },
              data: { street: this.street,
                star:star,
                photo:this.link,
                token:sessionStorage.getItem('token')
              }
          }
          this.$http(req).then(response => {
            let it = this
            it.ok = 1
            it.loading = false
            setTimeout(function () {
              it.ok = 0
              this.closes()
              // it.$emit('reloadPosts',true)
            },2000)
          })
          .catch(response => {
            console.log(response.response)
            this.button = 1
            this.loading = false
          })
      }
      let it = this
      this.closes()
      this.$timeout(function () {
          it.streetRequire = 0;
          it.linkRequire = 0;
          it.button = 0;
      },2000)
  }

  retu(value){
      let elem = event.currentTarget
      let arr = elem.value.split('\\')
      let index = arr.indexOf('fakepath') + 1
      let beforefinish = String(arr.splice(index))
      let length = beforefinish.length
      if(length < 20){
          this.nativeLink = beforefinish
      } else {
          this.nativeLink = beforefinish.substr(0,10) + '...' + beforefinish.substr(length - 10,length)
      }
  }

  replaceStreetInNumber(value){
      for(let i = 0;i < this.objNumber.length;i++){
          if(this.objNumber[i].number == value){
            return this.objNumber[i].name
          }
      }
  }

  closes(){
    this.dataService.scroll.visible()
    this.dataService.formmodal = false
  }
}

export default FormModalController;
