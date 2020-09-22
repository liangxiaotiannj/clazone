import React from 'react';
import './index.scss';
import MusicPlay from './index';
import Sound from 'react-sound';

export default class audioOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playSrc:'',
            pPlay:'PLAYING'
        };
    }
    // PLAYING: 'PLAYING',
    // STOPPED: 'STOPPED',
    // PAUSED: 'PAUSED'

    componentDidMount() {
        
    }

    playAudio = (s) =>{
        if(!!s){
            this.setState({
                playSrc: s,
                pPlay:'PLAYING'
            })
        }else{
            this.setState({
                pPlay:'PAUSED'
            })
        }
    }
    render() {
        const {playSrc,pPlay} = this.state;
        return (
            <div>
                <Sound url={playSrc} playStatus={Sound.status[pPlay]}/>
                <MusicPlay playAudio={this.playAudio}/>
            </div>
        );
    }
}