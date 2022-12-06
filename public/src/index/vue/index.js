const home = {
    data:() => { 
        return{

        }
    },
    methods:{
        
        shuffle(){
            console.log('shuffle');
        },
        previous(){
            console.log('previous');
        },
        play_pause(){
            console.log('play_pause');
        },
        next(){
            console.log('next');
        },
        repeat(){
            console.log('repeat');
        }

    },
    mounted:() => {
        let params = new URLSearchParams(document.location.search)
        let code = params.get('code');
        let redirect_uri = 'http://localhost:17280/home'
        let client_id = '0ddea5cff2e24789a34fa32ad94bd329'
        let client_secret = '3685e95e569f448381ac3bab920e0a0c'
        let body = {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirect_uri
        }
        axios({
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            data: new URLSearchParams(Object.entries(body)).toString(),
            headers: {
                "Authorization": `Basic ${btoa(client_id + ':' + client_secret)}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
    })
    }
}



Vue.createApp(home).mount('#player');
