import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import * as PropTypes from 'prop-types';

import NoResultsComponent from '../../../../components/NoResults';

import styles from './index.module.scss';

const ArtistList = ({list, query}) => {
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
            {!list.length && query && <NoResultsComponent />}
        </div>
    );
};

ArtistList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({})),
    query: PropTypes.string,
};

ArtistList.defaultProps = {
    list: [],
    query: '',
};

export default ArtistList;
