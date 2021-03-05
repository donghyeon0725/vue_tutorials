Vue.filter('datetime', function () {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
});
Vue.filter('addText', function (value, count) {
    if(!value) return '';
    var newVal = '';
    for(let i=0; i<count; i++) {
        newVal += value;
    }
    return newVal;
});