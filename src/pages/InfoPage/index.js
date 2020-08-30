import React, {Suspense} from 'react';

import {LoadModule} from '../../utils/helpers/loadModule';
import {LoaderScreen} from "../../components";

const ArtistInfo = LoadModule('ArtistInfo');

const InfoPage = () => {
    return (
        <Suspense fallback={<LoaderScreen/>}>
            <ArtistInfo/>
        </Suspense>
    );
};

export default InfoPage;
