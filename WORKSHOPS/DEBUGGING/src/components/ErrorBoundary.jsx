import React from 'react'

// Based on: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
export default class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line
  componentDidCatch(error, info) {

    console.log(error);
    // console.log(error.message);
    // console.log(info.componentStack);

    // console.log(
    //   "React.captureOwnerStack(): ", React.captureOwnerStack(),
    // );

  }

  render() {

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;

  }

}