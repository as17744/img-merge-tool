import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Back from '@components/Back';
import { setDoubleImages } from '@redux/action';
import styles from './style.less';

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDouble: (list) => {
            dispatch(setDoubleImages(list));
        }
    };
};

class DoubleUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
        this.$upload = React.createRef();
    }
    fileUpload() {
        const reader = new FileReader();
        const $cur = this.$upload.current;
        const {
            files,
        } = $cur;

        reader.addEventListener("load", () => {
            const { list } = this.state;
            list.push(reader.result)
            this.setState({
                list,
            });
        }, false);
        if (files && files.length > 0) {
            const target = files[0];
            reader.readAsDataURL(target);
        }
    }
    fileSelect() {
        this.$upload.current.click();
    }
    deletePic(index) {
        const { list } = this.state;
        list.splice(index, 1);
        this.setState({
            list,
        });
    }
    confirmImg() {
        const { setDouble } = this.props;
        const { list } = this.state;
        setDouble(list);
    }
    render() {
        const { list } = this.state;
        return (
            <div className={styles.wrapper}>
                <div className={styles.uploadedShowWrapper}>
                    {list.map((item, index) => (
                        <div key={index} className={styles.uploadedItem}>
                            <img src={item} className={styles.snapshot} />
                            <i onClick={() => { this.deletePic(index) }} className={classNames('iconfont', 'icon-close', styles.closeIcon)} />
                        </div>
                    ))}
                </div>
                {list.length < 2 ? (
                    <>
                        <img src="/static/imgs/upload.jpg" className={styles.upload} onClick={() => { this.fileSelect() } } />
                        <div className={styles.picNumWrapper}>图片数量：{list.length}/2</div>
                    </>
                ) : <div className={styles.confirm} onClick={() => { this.confirmImg() }}>确认</div>}
                <input
                    onChange={() => { this.fileUpload() }}
                    ref={this.$upload}
                    accept="image/png, image/jpeg"
                    type="file"
                    className={styles.uploadUnput}
                />
                <Back history={this.props.history} />
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DoubleUpload);
