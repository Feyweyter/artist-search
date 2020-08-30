import React, {memo} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import styles from './LoaderScreen.module.scss';

const LoaderScreen = () => (
    <div className={styles.loading}>
        <ClipLoader
            size={150}
            color="#30ca89"
            loading
        />
    </div>
);

export default memo(LoaderScreen);
