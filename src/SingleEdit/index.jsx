import React from 'react';
import html2canvas from 'html2canvas';
import { connect } from 'react-redux';
import domtoimage from 'dom-to-image';
import styles from './style.less';

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};

class SingleEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verticalPadding: 80,
            horizontalPadding: 50,
        };
    }
    download() {
        const $img = document.getElementById('J-img');
        if ($img) {
            html2canvas($img, {useCORS: true}).then((canvas) => {
                const imgUri = canvas.toDataURL();
                console.log(imgUri);
            });
            // domtoimage.toBlob($img, {
            //     quality: 1,
            // }).then(function (blob) {
            //     const form = new FormData();
            //     form.append('filedata', blob);
            //     fetch('/api/upload', {
            //         method: "POST",
            //         body: form,
            //     }).then((response) => response.json()).then((res) => {
            //         const { url, name } = res;
            //         const eleLink = document.createElement('a');
            //         eleLink.download = name;
            //         eleLink.style.display = 'none';
            //         eleLink.href = url;
            //         document.body.appendChild(eleLink);
            //         eleLink.click();
            //         document.body.removeChild(eleLink);
            //     });
            //     // FileSaver.saveAs(blob, 'my-node.jpeg');
            // });
        }
    }
    changePadding(e, type) {
        if (type === 'vertical') {
            this.setState({
                verticalPadding: e.target.value,
            });
        }
        if (type === 'horizontal') {
            this.setState({
                horizontalPadding: e.target.value,
            });
        }
    }
    render() {
        const {
            img,
        } = this.props;
        const {
            verticalPadding,
            horizontalPadding,
        } = this.state;
        return (
            <div className={styles.wrapper}>
                <div className={styles.showArea}>
                    {img && (
                        <div id='J-img' className={styles.operationPanel} style={{padding: `${horizontalPadding}px ${verticalPadding}px`}}>
                            <img src={img} className={styles.showImg} />
                        </div>
                    )}
                </div>
                <div className={styles.editArea}>
                    <div className={styles.setColumn}>
                        <span>水平边距：</span>
                        <input type="number" value={verticalPadding} className={styles.setInput} onChange={(e) => { this.changePadding(e, 'vertical') }} />
                        <span>px</span>
                    </div>
                    <div className={styles.setColumn}>
                        <span>垂直边距：</span>
                        <input type="number" value={horizontalPadding} className={styles.setInput} onChange={(e) => { this.changePadding(e, 'horizontal') }} />
                        <span>px</span>
                    </div>
                    <div className={styles.buttonWrap}>
                        <div className={styles.downloadButton} onClick={() => { this.download() }}>
                            <i className="iconfont icon-xiazai" style={{marginRight: '4px'}} />
                            <span>下载</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(SingleEdit);
