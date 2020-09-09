import React from 'react';
import './index.scss';

export default class musicPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScroll: false
        };
    }
    
    zoomWidget=(status)=>{
        this.setState({
            fullScroll:status
        })
    }

    openWidget=()=>{
        this.zoomWidget(true)
    }
    closeWidget=()=>{
        this.zoomWidget(false)
    }
    render() {
        const { fullScroll } = this.state;
        let content;
        if(fullScroll){
            content = ('33313');
        }else{
            content = (
                <div className="spectrum">
                    <div className="spectrum_item spectrum_item1"></div>
                    <div className="spectrum_item spectrum_item2"></div>
                    <div className="spectrum_item spectrum_item3"></div>
                    <div className="spectrum_item spectrum_item4"></div>
                    <div className="spectrum_item spectrum_item5"></div>
                </div>
            );
        }
        return (
            <div className={fullScroll ? "audio_widget_open" : "audio_widget"} onClick={this.openWidget}>
                {content}
            </div>
        );
    }
}