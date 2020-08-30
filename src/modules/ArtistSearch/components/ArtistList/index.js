import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import * as PropTypes from 'prop-types';

import styles from './index.module.scss';

const ArtistList = ({list}) => {
    const history = useHistory();

    const onClick = useCallback((e, name) => {
        e.preventDefault();
        e.stopPropagation();
        if (name) {
            history.push(encodeURIComponent(name));
        }
    }, [history]);

    return (
        <div>
            {list && list.map(item => (
                <div key={item.name} className={styles.listItem}
                     onClick={(e) => onClick(e, item.name)}>{item.name}</div>
            ))}
        </div>
    );
};

ArtistList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({})),
};

ArtistList.defaultProps = {
    list: [],
};

export default ArtistList;
