const login = {
    data: () => {
        return {
            clientID: '0ddea5cff2e24789a34fa32ad94bd329',
            scope: 'app-remote-control streaming user-read-currently-playing user-modify-playback-state user-read-playback-state playlist-read-private playlist-read-collaborative user-library-read user-follow-modify user-follow-read',
            uri: 'http://localhost:25565/index.html',
        }
    },
    methods:{
        login(){
            location.href =`https://accounts.spotify.com/authorize?response_type=code&client_id=${this.clientID}&scope=${this.scope}&redirect_uri=${this.uri}`;
        }
    }
}


Vue.createApp(login).mount('.login');