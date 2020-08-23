import React from 'react';
import html2canvas from 'html2canvas';
import { connect } from 'react-redux';
import styles from './style.less';

const dataURLtoBlob = (dataurl) => {
    const arr = dataurl.split(',');
     //注意base64的最后面中括号和引号是不转译的   
    const _arr = arr[1].substring(0,arr[1].length-2);
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(_arr);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
     while (n--) {
         u8arr[n] = bstr.charCodeAt(n);
     }
     return new Blob([u8arr], {
         type: mime
     });
 };

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};

class SingleEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verticalPadding: 30,
            horizontalPadding: 20,
        };
    }
    download() {
        const $img = document.getElementById('J-img');
        if ($img) {
            html2canvas($img, {useCORS: true}).then((canvas) => {
                const imgUri = canvas.toDataURL();
                const blob = dataURLtoBlob(imgUri); // base64转blob
                const form = new FormData();
                form.append('filedata', blob);
                fetch('/api/upload', {
                    method: "POST",
                    body: form,
                }).then((response) => response.json()).then((res) => {
                    const { url, name } = res;
                    const eleLink = document.createElement('a');
                    eleLink.download = name;
                    eleLink.style.display = 'none';
                    eleLink.href = url;
                    document.body.appendChild(eleLink);
                    eleLink.click();
                    document.body.removeChild(eleLink);
                });
            });
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
