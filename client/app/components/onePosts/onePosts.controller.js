class OnePostsController {
  constructor($stateParams,dataService) {
      "ngInject";
      this.id_post = null;
      this.street_post = null;
      this.photo_post = null;
      this.$stateParams = $stateParams;
      this.name = this.$stateParams;
      this.startDate = null;
      this.endDate = null;
      this.dataService = dataService;
      this.lists=['specific question about the required information;',
    'ayment guarantee;',
    'signature of the head of the organization;',
    'contact phone number responsible for receiving information;',
    'details of the organization for registration of the contract.']
      this.created();
      // this.initMap();
  }
  created(){
      this.id_post = localStorage.getItem('id_post'),
      this.street_post = localStorage.getItem('street_post'),
      this.photo_post = localStorage.getItem('photo_post')
      this.startDate = new Date();
      this.endDate = new Date();
      this.endDate.setDate(this.endDate.getDate() + 5);
      this.dataService.data = this.startDate;
  }
  showUrlPhoto(value){
      let arr = value.split('.')
      if(arr.length == 5){
        return value
      } else {
        return 'http://japanalytic.com/wp-content/uploads/2017/10/No-Underlined.jpg'
      }
  }
  changeData(value){
      this.dataService.data = this.startDate
  }
}

export default OnePostsController;
