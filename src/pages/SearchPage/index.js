import React, {Suspense} from 'react';

import {LoadModule} from '../../utils/helpers/loadModule';
import {LoaderScreen} from "../../components";

const ArtistSearch = LoadModule('ArtistSearch');

const Index = () => {
    return (
        <Suspense fallback={<LoaderScreen/>}>
            <ArtistSearch/>
        </Suspense>
    );
};

export default Index;
