const login = {
    data(){
        return {
            count: 0
        }
    },
    methods:{
        teste(){
            console.log('teste - login');
        }
    }
}

Vue.createApp(login).mount('#login');