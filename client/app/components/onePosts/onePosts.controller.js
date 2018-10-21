class OnePostsController {
  constructor($stateParams) {
      "ngInject";

    this.$stateParams = $stateParams
      this.name = this.$stateParams
      this.params()
  }
  params(){
    // console.log(this.$stateParams)
    //   this.name =  this.$stateParams
  }
}

export default OnePostsController;
