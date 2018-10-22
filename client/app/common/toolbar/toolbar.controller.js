class ToolbarController {
  constructor($mdSidenav,$state){
      'ngInject';
      this.$mdSidenav = $mdSidenav;
      this.$state = $state;
      this.lists = ['Air tickts', 'Railway tickets', 'Bus', 'Office', 'Hotel','Transport', 'Tour'];
  }
    open(Id) {
       this.$mdSidenav(Id).open()
    }
    close(id){
      if(event.target.tagName == 'MD-BACKDROP')
      this.$mdSidenav(id).close()
    }
    to(value){
        this.$state.go(value)
    }
}

export default ToolbarController;
// ToolbarController.$inject = ['$mdSidenav'];
