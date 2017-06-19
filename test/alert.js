import React from 'react';

class Alert extends React.Component {
    // template rendering
    render() {
        const {
            border,
            handlerDismiss,
            vertSpacing,
            ...otherProps
        } = this.props;

        const classes = 'mdl-alert mdl-alert--border mdl-alert--spacing mdl-alert--dismissable';

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

    }
}

export default Alert;
