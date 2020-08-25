import React from 'react';
import { connect } from 'react-redux';
import { setImage } from '@redux/action';
import Back from '@components/Back';
import styles from './style.less';

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setImage: (url) => {
            dispatch(setImage(url));
        }
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaded: '',
        };
        this.myRef = React.createRef();
    }
    confirmImg() {
        const {
            setImage,
            history,
        } = this.props;
        const { uploaded } = this.state;
        setImage(uploaded);
        history.push('/single/edit');
    }
    fileSelect() {
        this.myRef.current.click();
    }
    fileUpload() {
        const reader = new FileReader();
        const $cur = this.myRef.current;
        const {
            files,
        } = $cur;

        reader.addEventListener("load", () => {
            this.setState({
                uploaded: reader.result,
            });
          }, false);

        if (files && files.length > 0) {
            const target = files[0];
            reader.readAsDataURL(target);
        }
    }
    render () {
        const { uploaded } = this.state;
        return (
            <div className={styles.wrapper}>
                {
                    uploaded ? (
                        <div>
                            <img src={uploaded} className={styles.uploadedImg} />
                            <div className={styles.checkButtons}>
                                <div className={styles.confirm} onClick={() => { this.confirmImg() }}>确认</div>
                                <div className={styles.cancel} onClick={() => { this.setState({ uploaded: '' }) }}>取消</div>
                            </div>
                        </div>
                    ) : (<img src="/static/imgs/upload.jpg" className={styles.upload} onClick={() => { this.fileSelect() }} />)
                }
                <input
                    onChange={() => { this.fileUpload() }}
                    ref={this.myRef}
                    accept="image/png, image/jpeg"
                    type="file"
                    className={styles.uploadUnput}
                />
                <Back history={this.props.history} />
            </div>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
