import React from 'react';
import './index.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const WhiteLinearProgress = withStyles((theme) => ({
    root: {
      height: 5,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#fff',
    },
}))(LinearProgress);

export default class slideItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            progress:15
        };
    }

    render() {
        const { itemIndex, nowKey, config, play } = this.props;
        const { isPlay,progress } = this.state;
        return (
            <div className={itemIndex === nowKey ? "silder_content my_swiper_zoom" : "silder_content my_swiper_boom"}>
                <div className="content_body">
                    <img className="content_img" src={!!config['pic']?config['pic']:'../audio/pic/no.jpg'} alt="" />

                    <div className="item_info">

                        <div className="item_name">{config['name']}</div>
                        <div className="item_art">{config['artist']}</div>

                        {itemIndex === nowKey?(<WhiteLinearProgress className="progress_line" variant="determinate" value={progress} />):''}
                        
                        <button className="play_btn" onClick={() => {
                            this.setState({
                                isPlay: !isPlay
                            })
                            let s = !isPlay
                            if (s) {
                                play(config['id'])
                            } else {
                                play()
                            }
                        }}>
                            {itemIndex === nowKey ? (<PauseIcon fontSize="large"/>) : (<PlayArrowIcon fontSize="large" />)}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}