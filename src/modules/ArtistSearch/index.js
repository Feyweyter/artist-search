import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import actions from './effects/actions';
import {useDispatch, useSelector} from 'react-redux';

const Index = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.value);
        dispatch(actions.getArtistsRequest(e.target.value));
    };

    return (
        <div>
            <Input autoFocus onChange={handleChange}/>
        </div>
    );
};

Index.propTypes = {};

export default Index;
