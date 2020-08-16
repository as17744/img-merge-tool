import React from 'react';
import styles from './style.less';

class App extends React.Component {
    render () {
        return (
            <div className={styles.wrapper}>
                <img src="/imgs/upload.jpg" className={styles.upload} />
            </div>
        );
    };
};

export default App;
