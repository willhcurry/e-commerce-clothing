import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollectionsforPreview } from '../../redux/shop/shop.selectors';


import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div  className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={ id } {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsforPreview
});

export default connect(mapStateToProps)(CollectionsOverview);