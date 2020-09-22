import React from 'react';
import './index.scss';
import bg from '../../image/20200909155617.jpg';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScroll: false
        };
    }

    componentDidMount() {

    }

    zoomOutMask = () => {
        const { fullScroll } = this.state;
        this.setState({
            fullScroll: !fullScroll
        })
    }

    render() {
        const { fullScroll } = this.state;
        let optionBtn;
        if (fullScroll) {
            optionBtn = (
                <FullscreenExitIcon className="zoom_btn" onClick={this.zoomOutMask} />
            )
        } else {
            optionBtn = (
                <FullscreenIcon className="zoom_btn" onClick={this.zoomOutMask} />
            )
        }
        return (
            <div className="background">
                <img className="background_img" src={bg} />
                <div className="content">Personal</div>
                <div className={fullScroll ? 'mask_open mask_box' : 'mask_normal mask_box'}>
                <audio src={'../audio/songs/Touch It （Feat. Ariana Grande）_志国夜总会.mp3'} className="audio_play" controls></audio>
                    <div className="mask_content">
                        Miranda Jones
                        {optionBtn}
                    </div>
                </div>
            </div>
        );
    }
}