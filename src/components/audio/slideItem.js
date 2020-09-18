import React from 'react';
import './index.scss';

export default class slideItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        const { itemIndex,nowKey,config } = this.props;
        console.log(config)
        return (
            <div className={itemIndex === nowKey ? "silder_content my_swiper_zoom" : "silder_content"}>
                <div className="content_body">
                    <img className="content_img" src={config['pic']}/>
                </div>
            </div>
        );
    }
}

// <SwiperSlide className="my_swiper_silder">
//                                 <div className={itemIndex === 1 ? "silder_content my_swiper_zoom" : "silder_content"} onClick={() => { this.fullMaxShow(1) }}></div>
//                             </SwiperSlide>
//                             <SwiperSlide className="my_swiper_silder">
//                                 <div className={itemIndex === 2 ? "silder_content my_swiper_zoom" : "silder_content"} onClick={() => { this.fullMaxShow(2) }}></div>
//                             </SwiperSlide>
//                             <SwiperSlide className="my_swiper_silder">
//                                 <div className={itemIndex === 3 ? "silder_content my_swiper_zoom" : "silder_content"} onClick={() => { this.fullMaxShow(3) }}></div>
//                             </SwiperSlide>
//                             <SwiperSlide className="my_swiper_silder">
//                                 <div className={itemIndex === 4 ? "silder_content my_swiper_zoom" : "silder_content"} onClick={() => { this.fullMaxShow(4) }}></div>
//                             </SwiperSlide>