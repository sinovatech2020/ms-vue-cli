<template>
    <div class="about">
        <h1>This is an test page</h1>
        <button @click="showToast">显示toast</button>
        <button @click="showLoading">loading</button>
        <!-- 调用Vuex State 里面的变量 -->
        {{homePage}}
    </div>
</template>
<script>
// 引用vuex公用api
import { mapState , mapMutations} from "vuex";
export default {
    computed:{
        // 引入vuex State 变量
        ...mapState([
                "homePage"
            ]
        )
    },
    methods: {
        // 引入vuex Mutations里面的方法
        ...mapMutations([
            `amend`
        ]),
        showToast() {
            this.$ltToast("你好");
        },
        showLoading() {
            this.$ltLoading({ isShow: true });
            setTimeout(() => {
                this.$ltLoading({ isShow: false });
            }, 1000);
        }
    },
    mounted(){
        // 3秒之后调用vuex Mutations里面的方法
        setTimeout(()=>{
            this.amend({
                homePage:"欢迎使用"
            })
        },3000)
    }
};
</script>