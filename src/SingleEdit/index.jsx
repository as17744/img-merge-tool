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
        this.state = {
            verticalPadding: 80,
            horizontalPadding: 50,
        };
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
                        <div className={styles.operationPanel} style={{padding: `${horizontalPadding}px ${verticalPadding}px`}}>
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
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(SingleEdit);
