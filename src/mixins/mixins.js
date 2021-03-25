import { mapMutations, mapState } from "vuex";
export default {
    computed: {
        ...mapState([
            "HomePageData",
            "view",
        ]),
    },
    methods: {
        ...mapMutations([
            "amend",
        ]),
        closeView() {
            this.amend({
                'view': null
            })
        },
        throttle(time) {
            let throttle = document.createElement(`div`);
            throttle.style.position = "fixed";
            throttle.style.top = "0";
            throttle.style.left = "0";
            throttle.style.zIndex = "10000";
            throttle.style.width = "100%";
            throttle.style.height = "100%";
            document.getElementsByTagName('body')[0].appendChild(throttle);
            setTimeout(() => {
                document.getElementsByTagName('body')[0].removeChild(throttle);
            }, time || 0)
        }
    }
};