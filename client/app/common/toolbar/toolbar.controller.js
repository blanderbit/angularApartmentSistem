class ToolbarController {
  constructor($mdSidenav){
      'ngInject';
      this.$mdSidenav = $mdSidenav
  }
    open(Id) {
       this.$mdSidenav(Id).open()
    }
    close(id){
      if(event.target.tagName == 'MD-BACKDROP')
      this.$mdSidenav(id).close()
    }
}

export default ToolbarController;
// ToolbarController.$inject = ['$mdSidenav'];
