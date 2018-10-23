export default class ResultServices{
  constructor(){
    'ngInject';
    this.data = null,
    this.formmodal = false;
    this.scroll = {
      hide(){
        let scroll = document.querySelector('html')
        scroll.style.overflowY = 'hidden'
      },
      visible(){
        let scroll = document.querySelector('html')
        scroll.style.overflowY = 'scroll'
      }
    }
  };
}




