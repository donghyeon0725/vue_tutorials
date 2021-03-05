const swichers = {
    created: true,
    beforeMount: true,
    mounted: true,
    destroyed: true
};
export default {
    install (Vue, options) { // Vue 는 확장기능으로 사용할 수 있고, options는 플러그인을 구성하기 위해 사용할 수 있다.
        Object.assign(swichers, options); // 객체를 병합함 => 받은 인스턴스의 위 옵션들을 전부 켜겠다는 말임. options 과 병합해서 일부 값을 부분적으로 비활성화 할 수도 있음
        Vue.mixin({ // 뷰를 확장해서 mixin 을 사용하겠다는 뜻.
            created() {
                //swichers 를 사용해, 기본적으로 전역에서 값을 활성화 함.
                if (swichers.created) {
                    console.log(`${this.$options.name} created`);
                }
            },
            beforeMount() {
                if (swichers.beforeMount) {
                    console.log(`${this.$options.name} beforeMount`);
                }
            },
            mounted() {
                if (swichers.mounted) {
                    console.log(`${this.$options.name} created`);
                }
            },
            destroyed() {
                if (swichers.destroyed) {
                    console.log(`${this.$options.name} created`);
                }
            }
        })
    }
}