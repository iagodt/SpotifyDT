class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            clientID: '0ddea5cff2e24789a34fa32ad94bd329',
            scope: 'app-remote-control streaming user-read-currently-playing user-modify-playback-state user-read-playback-state playlist-read-private playlist-read-collaborative user-library-read user-follow-modify user-follow-read',
            uri: 'http://localhost:17280/home'

        }
    }
    render() {
        return (
            <div id='login'>
                <img id='logo' src="src/login/img/SpotifyDT.svg"></img>
                <button id='login_btn' onClick={()=>location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.state.clientID}&scope=${this.state.scope}&redirect_uri=${this.state.uri}`}>LOGIN</button>
            </div>
            
        )
    }
}
const login = ReactDOM.createRoot(document.getElementById('root'))
login.render(<Login />)
