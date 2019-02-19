// so the reason behind moving it up there is because, we want to keep the pages .js files as simple as we can
import React from 'react'
import Rental from '../components/page/Rental/index';

export default (params) => <Rental {...params} />


// So we are modularizing the rental components so the logic corresponding to it remain in a particular page