import React from 'react';
import PropTypes from 'prop-types';

import RibbonStore from '../data/RibbonStore';
import BlockDispatcher from '../event/BlockDispatcher';
import ActionType from '../event/ActionType';

class Block extends React.Component {

  render() {
    const {goid} = this.props;
    var slimitem = RibbonStore.getSlimItem(goid);
    if (slimitem.separator === undefined) {
      const tileHoverString = (slimitem.uniqueAssocs.length > 0) ?
        slimitem.uniqueAssocs.length + ' associations ' : //uniqueHits.join('\n') :
        'No associations to ' + slimitem.golabel;
      const blockTitleClass = (slimitem.uniqueAssocs.length > 0) ?
        'blockTitle bold' :
        'blockTitle';
      return(
        <div className="ribbonBlock" onClick={this.handleOnClick}>
          <div className={blockTitleClass}>{slimitem.golabel}</div>
          <div className="blockTile"
            title={tileHoverString}
            style={{backgroundColor:slimitem.color}}>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ribbonBlock">
          <div className="tileSeparator"></div>
        </div>
      );
    }
  }

  handleOnClick = (evt) => {
    const {onTermSelect, goid} = this.props;
    onTermSelect(goid);
  }
}

Block.propTypes = {
  goid: PropTypes.string.isRequired,
  onTermSelect: PropTypes.func.isRequired
};

export default Block;
