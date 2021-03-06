import React, { Children } from 'react';
import './index.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Virtual } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';

import SlideItem from './slideItem';

// 安装 Virtual 模块
SwiperCore.use([Virtual]);

export default class musicPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScroll: false,
            itemIndex: '',
            audioConfig: [],
            playSrc: ''
        };
    }


    componentDidMount() {
        let config = [{
            id: 0,
            pic: '../audio/pic/The Ocean_Mike Perry.png',
            name: 'The Ocean',
            artist: 'Mike Perry',
            src: '../audio/songs/The Ocean_Mike Perry.mp3'
        }, {
            id: 1,
            pic: '../audio/pic/云烟成雨-房东的猫.png',
            name: '云烟成雨',
            artist: '房东的猫',
            src: '../audio/songs/云烟成雨-房东的猫.mp3'
        }, {
            id: 2,
            pic: '../audio/pic/张韶涵 - 阿刁.png',
            name: '阿刁',
            artist: '张韶涵',
            src: '../audio/songs/张韶涵 - 阿刁.mp3'
        }, {
            id: 3,
            pic: '',
            name: 'Touch It',
            artist: 'Feat. Ariana Grande',
            src: '../audio/songs/Touch It （Feat. Ariana Grande）_志国夜总会.mp3'
        }, {
            id: 4,
            pic: '../audio/pic/Trouble Maker_Trouble Maker.png',
            name: 'Trouble Maker',
            artist: 'Trouble Maker',
            src: '../audio/songs/Trouble Maker_Trouble Maker.mp3'
        }, {
            id: 5,
            pic: '../audio/pic/Victory_Two Steps From Hell.png',
            name: 'Victory',
            artist: 'Two Steps From Hell',
            src: '../audio/songs/Victory_Two Steps From Hell.mp3'
        },]
        this.setState({
            audioConfig: [...config]
        })
    }

    zoomWidget = (status) => {
        this.setState({
            fullScroll: status
        })
    }

    openWidget = () => {
        this.zoomWidget(true)
    }

    fullMaxShow = (index) => {
        this.setState({
            itemIndex: index
        })
    }

    closeWidget = (e) => {
        //阻止事件冒泡
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.zoomWidget(false)
    }

    playAudio = (index) => {
        this.setState({
            itemIndex: index
        })
        const { playAudio } = this.props;
        let s = '';
        if(!!this.state.audioConfig[index]){
            s = this.state.audioConfig[index]['src']
        }else{
            s = ''
        }
        playAudio(s);
    }
    render() {
        const { fullScroll, itemIndex, audioConfig } = this.state;
        let content;
        if (fullScroll) {
            //展开状态
            let slides = [];
            for (let i = 0; i < audioConfig.length; i++) {
                slides.push(
                    <SwiperSlide className="my_swiper_silder" key={'swiper-slide-' + i}>
                        <SlideItem config={audioConfig[i]} itemIndex={itemIndex} nowKey={i} play={this.playAudio}/>
                    </SwiperSlide>
                )
            }
            content = (
                <div className="widget_content">
                    <span className="widget_name">Player</span>
                    <KeyboardArrowDownIcon onClick={this.closeWidget} className="close_icon" />
                    <div className="swiper_out">
                        <Swiper
                            virtual
                            slidesPerView={1}
                            spaceBetween={50}
                            initialSlide={!!itemIndex ? itemIndex : 0}
                            className="my_swiper"
                            onSlideChange={() => ''}
                            onSwiper={(swiper) => ''}
                        >
                            {slides}
                        </Swiper>
                    </div>
                </div>
            );
        } else {
            //正常状态
            content = (
                <div className="spectrum" onClick={this.openWidget}>
                    <div className="spectrum_item spectrum_item1"></div>
                    <div className="spectrum_item spectrum_item2"></div>
                    <div className="spectrum_item spectrum_item3"></div>
                    <div className="spectrum_item spectrum_item4"></div>
                    <div className="spectrum_item spectrum_item5"></div>
                </div>
            );
        }
        return (
            <div className={fullScroll ? "audio_widget_open" : "audio_widget"} >
                {content}
            </div>
        );
    }
}