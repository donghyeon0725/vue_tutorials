//import lifecycleLogger from '../mixins/lifecycle-logger.mixin.js';
export default {
    name: 'MessageListItem',
    //mixins: [lifecycleLogger],
    template: `<li :value="value">{{ item.text }} - {{  item.createdAt }}
                <button @click="deleteClicked" :disabled="itemCount">X</button></li>`,
    props: {
        item: {
            type: Object,
            required: true
        },
        itemCount: {
            type: Boolean,
            required: true
        },
        value: {
            type: String,
            required: true
        }
        //['item', 'itemCount', 'value'] => required false 일 때
    },
    methods: {
        deleteClicked() {
            this.$emit('delete');
        }
    }
}