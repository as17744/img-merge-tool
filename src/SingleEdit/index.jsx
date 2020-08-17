import React from 'react';
import { connect } from 'react-redux';
import styles from './style.less';

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};

class SingleEdit extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        const {
            img,
        } = this.props;
        return (
            <div className={styles.wrapper}>
                <div className={styles.showArea}>
                    {img && (
                        <div className={styles.operationPanel}>
                            <img src={img} className={styles.showImg} />
                        </div>
                    )}
                </div>
                <div className={styles.editArea}></div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(SingleEdit);
