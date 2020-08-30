import React, { memo } from 'react';

import styles from './LoaderScreen.module.scss';

const LoaderScreen = () => (
  <div className={styles.bg} />
);

export default memo(LoaderScreen);
