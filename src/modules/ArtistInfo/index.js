import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import actions from './effects/actions';
import {useDispatch, useSelector} from 'react-redux';

import styles from './index.module.scss';
import {LoaderScreen} from "../../components";

const Index = () => {
    const dispatch = useDispatch();
    const {pathname} = useSelector((state) => state.router.location);
    const {bio, isLoading} = useSelector((state) => state.ArtistInfo);
    const {content = ''} = bio || {};
    const artist = pathname ? pathname.slice(1) : '';

    useEffect(() => {
        dispatch(actions.getArtistInfoRequest(artist));
        return () => dispatch(actions.clearArtistInfoResults());
    }, []);

    return (
        <div className={styles.info}>
            <span className={styles.header}>
                <Link className={styles.link} to="/">Back</Link><span className={styles.title}>{artist}</span>
            </span>
            {isLoading ? <LoaderScreen/> : <div>{content}</div>}
        </div>
    );
};

export default Index;
