export default {
    created() {
        // $options 는 Vue 인스턴스의 프로퍼티이다. 따라서 this.$options.name 으로 현재 랜더링한 인스턴스의 name 프로퍼티에 접근이 가능해지는 것이다.
        console.log(`${this.$options.name} created`);
    },
    beforeMount() {
        console.log(`${this.$options.name} beforeMount`);
    },
    mounted() {
        console.log(`${this.$options.name} mounted`);
    },
    destroyed() {
        console.log(`${this.$options.name} destroyed`);
    }
}