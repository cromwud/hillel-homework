import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary спіймав помилку:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <h2>Ой! Щось пішло не так.</h2>
          <button onClick={() => window.location.reload()}>Перезавантажити сторінку</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;