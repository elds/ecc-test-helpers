import React from 'react';

const Alert = React.createClass({

    // define property types
    propTypes: {
        children: React.PropTypes.node.isRequired,
        className: React.PropTypes.string,
        handlerDismiss: React.PropTypes.func,
        labelDismiss: React.PropTypes.string,
        type: React.PropTypes.string,
        border: React.PropTypes.bool,
        vertSpacing: React.PropTypes.bool,
    },

    // template rendering
    render() {
        const {
            className,
            border,
            handlerDismiss,
            labelDismiss,
            type,
            vertSpacing,
            children,
            ...otherProps} = this.props;

        const classes =  'mdl-alert mdl-alert--border mdl-alert--spacing mdl-alert--dismissable';

        // TODO: add onclick event to remove alert
        let dismiss = false;
        if (handlerDismiss) {
            dismiss = (
                <div className="mdl-alert__dismiss">
                    <button><i>icon</i></button>
                </div>
            );
        }

        return (
            <div className={classes} {...otherProps}>
                <div className="mdl-alert__content">
                    {this.props.children}
                </div>
                {dismiss}
            </div>
        );

    },
});

export default Alert;
