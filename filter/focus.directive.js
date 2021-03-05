Vue.directive('focus', {
    bind() {
        alert('바인딩 되었습니다.')
    },
    inserted(el) {
        //부모 노드에 삽입이 된 후
        el.focus();
    },
    update(el) {
        el.value = el.value + el.value;
    },
    componentUpdated(el) {
        el.value = `componentUpdated${el.value}`;
    },
    unbind() {
        alert('사라짐')
    }
})