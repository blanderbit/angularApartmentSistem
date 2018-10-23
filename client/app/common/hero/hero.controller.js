class HeroController {
  constructor(dataService, $mdDialog, $stateParams) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.mainArr = [];
    this.$mdDialog = $mdDialog;
    this.dataService = dataService;
    this.apartment = [
      {
        name: 'Green',
        color: 'green',
        inf: 'Before 5 person',
        time: data.timeBefore13.concat(data.timeAftere13)
      },
      {
        name: 'Red',
        color: 'red',
        inf: 'Before 10 person',
        time: data.timeBefore13.concat(data.timeAftere13)
      },
      {
        name: 'Blue',
        color: 'blue',
        inf: 'Before 15 person',
        time: data.timeBefore13.concat(data.timeAftere13)
      },
      {
        name: 'Orange',
        color: 'orange',
        inf: 'Before 20 person',
        time: data.timeBefore13.concat(data.timeAftere13)
      }, {
        name: 'Purple',
        color: 'rebeccapurple',
        inf: 'Before 25 person',
        time: data.timeBefore13.concat(data.timeAftere13)
      },

    ];
    this.date = null;
    this.idOrder = this.$stateParams.id
    this.created()
  }

  created() {
    this.mainArr = JSON.parse(localStorage.getItem('arrOrders'));
    if (this.mainArr == null) {
      this.mainArr = [];
    }
  }

  infOrder(time, name) {
    this.created()
    let sentData = this.dates(time)
    if (this.mainArr != null) {
      for (let i = 0; i < this.mainArr.length; i++) {
        if (this.mainArr[i].data == sentData
          && this.mainArr[i].name == name
          && this.mainArr[i].user == sessionStorage.getItem('idUser')
          && this.mainArr[i].order == this.idOrder) {

          return true;
        }
      }
    }
  }

  sent(time,obj,active) {
    if(active == undefined){
      return
    }
    if (active == true) {
      let position = this.remove(obj, time)
      this.mainArr.splice(position, 1)
      localStorage.setItem('arrOrders', JSON.stringify(this.mainArr));
    } else {
      this.mainArr.push(obj)
      localStorage.setItem('arrOrders', JSON.stringify(this.mainArr))
    }
  }

  remove(value) {
    for (let i = 0; i < this.mainArr.length; i++) {
      if (this.mainArr[i].data == value.data
        && this.mainArr[i].name == value.name
        && this.mainArr[i].user == sessionStorage.getItem('idUser')
        && this.mainArr[i].order == this.idOrder) {
        return i;
      }
    }
  }

  dates(time) {
      let date = String(this.dataService.data)
      let hour = Number(time.substr(0, 2))
      let dataClick = date.split(' ')
      for (let i = 0; i < data.nameMonth.length; i++) {
          if (data.nameMonth[i].month == dataClick[1]) {
            return new Date(dataClick[3], data.nameMonth[i].number - 1, dataClick[2], hour)
          }
      }
  }

  showConfirm(ev,time,name) {
      let sentData = this.dates(time)
      let obj = {
          data: String(sentData),
          name: name,
          order: this.idOrder,
          user: sessionStorage.getItem('idUser')
      }
      let active = event.currentTarget.classList.contains('active')

      let comfirm;
      if (active == true) {
          comfirm = this.comfirm('Do you want remove your order?',JSON.stringify(obj),ev)
      } else {
          comfirm =  this.comfirm('Do you want confirm your order?',JSON.stringify(obj),ev)
      }

      this.$mdDialog.show(comfirm).then(() => {
          this.sent(time, obj, active)
      })
    }
    comfirm(title, data,ev){
        return this.$mdDialog.confirm()
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('True')
          .cancel('Cancel')
          .title(title)
          .textContent('This is your data' + data)
    }
}

export default HeroController;
