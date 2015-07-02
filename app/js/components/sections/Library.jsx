'use strict';

var React = require('react');
var LibraryActions = require('../../actions/Library');
var FolderLibraryStore = require('../../store/FolderLibrary');
var EmptyLibrary = require('../library/EmptyLibrary.jsx');
var Library = require('../library/index.jsx');


var LibraryWidget = React.createClass({

	componentDidMount: function () {
        window.addEventListener('focus', LibraryActions.fetchLibrary);
        LibraryActions.fetchLibrary();
	},

    componentDidUnmount: function () {
        $(document).off('show.bs.modal', '.modal');
        window.removeEventListener('focus', LibraryActions.fetchLibrary);
    },

	render: function () {

		return (
			<div className="custom-hud-component">
                <div className="TableRowZero">
                    <h1>My Bookmarks</h1>
                </div>
                <Library className="TableRow" store={FolderLibraryStore} emptyView={EmptyLibrary} />
                { this.props.children }
            </div>
        );
	}
});

module.exports = LibraryWidget;