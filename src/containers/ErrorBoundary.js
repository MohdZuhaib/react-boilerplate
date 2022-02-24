import { node } from 'prop-types';
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return children;
    }
}

ErrorBoundary.propTypes = {
    children: node
};

ErrorBoundary.defaultProps = {
    children: {}
};

export default ErrorBoundary;