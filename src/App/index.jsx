import React from 'react';
import styles from './style.less';

class App extends React.Component {
    goUpload() {
        console.log(123);
    }
    render () {
        return (
            <div className={styles.wrapper}>
                <div className={styles.title}>英雄所图片自动化加工</div>
                <div className={styles.buttonWrap}>
                    <div className={styles.button} onClick={() => { this.goUpload() }}>单图</div>
                    <div className={styles.button}>双图</div>
                </div>
            </div>
        );
    };
};

export default App;
