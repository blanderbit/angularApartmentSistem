'use strict'
var wDelta = 120;
// function scrollDoc(e) {
//     if (!e) e = event;
//     if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
//     var __delta = e.wheelDelta || -e.detail;
//     __delta /= Math.abs(__delta);
//     document.documentElement.scrollLeft -= __delta * wDelta; // FF, Opera, IE
//     if (this.attachEvent) return false;
//     document.body.scrollLeft -= __delta * wDelta; // Chrome
// }
// window.onload = function() {
//     var html = document.documentElement;
//     if (html.attachEvent) {
//         html.attachEvent("onmousewheel", scrollDoc); // IE and Opera
//     } else {
//         html.addEventListener("DOMMouseScroll", scrollDoc, false); // FF
//         html.addEventListener("mousewheel", scrollDoc, false); // Chrome
//     }
// }

class HomeController {
    constructor($http,$timeout,$location,$state) {
        'ngInject';
        this.$state = $state;
        this.$http = $http;
        this.posts_arr = null;
        this.loading = false;
        this.getPosts();
    }
    getPosts(){
        this.$http.get('http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/posts')
            .then(response => {
                this.posts_arr= response.data.reverse()
            })
            .catch(response => {
                console.log(response)
            })
     }
    showUrlPhoto(value){
        let arr = value.split('.')
        if(arr.length == 5){
            return value
        } else {
            return 'http://japanalytic.com/wp-content/uploads/2017/10/No-Underlined.jpg'
        }
    }


    to(){
      console.log(this.$state.go('login'))
    }
}

export default HomeController;

