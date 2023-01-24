import React from 'react';

class ImageClass extends React.Component {
    render() {
        const { source, alternativeText, ...rest } = this.props;
        return <img src={source} alt={alternativeText} {...rest} />;
    }
}

const ImageFunction = ({ source, alternativeText, ...rest }) => {
    return (
        <img src={source} alt={alternativeText} {...rest} />
    );
}

export { ImageClass, ImageFunction }