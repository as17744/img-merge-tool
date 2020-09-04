import React from 'react';
import styles from './style.less';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    goUpload(path) {
        this.props.history.push(path);
    }
    render () {
        return (
            <div className={styles.wrapper}>
                <div className={styles.title}>英雄所图片自动化加工</div>
                <div className={styles.buttonWrap}>
                    <div className={styles.button} onClick={() => { this.goUpload('/single/upload') }}>单图</div>
                    <div className={styles.button} onClick={() => { this.goUpload('/double/upload') }}>双图</div>
                </div>
            </div>
        );
    };
};

export default App;
