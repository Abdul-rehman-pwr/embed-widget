(function() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/react@17/umd/react.production.min.js';
    script.onload = function() {
      const script2 = document.createElement('script');
      script2.src = 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js';
      script2.onload = function() {
        const widgetScript = document.createElement('script');
        widgetScript.src = 'https://your-cdn-link/widget-bundle.js';
        widgetScript.onload = function() {
          const widgetElement = document.createElement('div');
          widgetElement.id = 'react-widget';
          document.body.appendChild(widgetElement);
          
          ReactDOM.render(React.createElement(Widget), widgetElement);
        };
        document.head.appendChild(widgetScript);
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script);
  })();
  