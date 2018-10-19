class ToolbarController {
  constructor($mdSidenav){
      this.$mdSidenav = $mdSidenav
  }
    open(componentId) {
       this.$mdSidenav('closeEventsDisabled').open()
    }
    close(){
      if(event.target.tagName == 'MD-BACKDROP')
      this.$mdSidenav('closeEventsDisabled').close()
    }
}

export default ToolbarController;
ToolbarController.$inject = ['$mdSidenav'];
