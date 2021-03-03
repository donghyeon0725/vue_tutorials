import MessageListItem from "./MessageListItem.js";
export default {
    name: 'MessageList',
    template:   `<ol type="I">
                    <message-list-item :key="item.id" v-for="item in items" :item="item"
                    value="3" :itemCount="true"
                    @delete="deleteMessage(item)"></message-list-item>
                </ol>`,
    // 바인딩은 기본적으로 태그안에 속성값을 두는 것이고, 자식 모듈이 props를 통해 값을 가져가서 바인딩하는 경우 해당 속성을 가지게 됨
    props: {
        //고립된 모듈의 스코프 특성상, 부모 컴포넌트의 값을 전달 받을 수 있도록 해놓은 장치
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteMessage(message) {
            this.$emit('ondelete', message);
        }
    },
    components: {
        MessageListItem
    }
}