import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import actions from './effects/actions';
import {useDispatch, useSelector} from 'react-redux';

import styles from './index.module.scss';
import {LoaderScreen} from "../../components";
import {createSelector} from "reselect";

const selectAllData = createSelector(
    state => state.ArtistInfo,
    allData => allData
);

const Index = () => {
    const dispatch = useDispatch();
    const {pathname} = useSelector((state) => state.router.location);
    const {bio, isLoading, albums} = useSelector(selectAllData);
    const {content = ''} = bio || {};
    const artist = pathname ? pathname.slice(1) : '';

    useEffect(() => {
        dispatch(actions.getArtistInfoRequest(artist));
        return () => dispatch(actions.clearArtistInfoResults());
    }, []);

    const getData = () => {
        if (isLoading) {
            return <LoaderScreen/>
        }
        let component = <span/>;
        if (albums.length) {
            component = <span>
                <div className={styles.albums}>Albums</div>
                {albums.map(item =>
                    <div key={item.name}>"{item.name}" playcount:&nbsp;
                        {item.playcount}</div>)}
                </span>;
        }
        return <span>
                <div>{content}</div>
            {component}
            </span>
    };

    return (
        <div className={styles.info} key={artist}>
            <span className={styles.header}>
                <Link className={styles.link} to="/">Back</Link><span className={styles.title}>{artist}</span>
            </span>
            {getData()}
        </div>
    );
};

export default Index;
