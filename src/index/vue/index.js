const player = {
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

    }
}

Vue.createApp(player).mount('#player');