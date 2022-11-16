const app = {
    data(){
        return {
            count: 0
        }
    },
    methods:{
        teste(){
            console.log('teste');
        }
    }
}

Vue.createApp(app).mount('#app');