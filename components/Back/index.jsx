import React from 'react';
import styles from './style.less';


export default (props) => {
    const { history } = props;
    const goBack = () => {
        history.goBack();
    };
    return <div className={styles.return} onClick={goBack}>返回</div>
};
