(function() {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/react@17/umd/react.production.min.js'; // React کا سی ڈی این لنک
  script.onload = function() {
    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js'; // ReactDOM کا سی ڈی این لنک
    script2.onload = function() {
      const widgetScript = document.createElement('script');
      widgetScript.src = 'https://your-cdn-link/widget-bundle.js'; // آپ کے ویجیٹ کا سی ڈی این لنک
      widgetScript.onload = function() {
        // React اپلیکیشن کے لیے div بنائیں
        const widgetElement = document.createElement('div');
        widgetElement.id = 'react-widget';  // اس div کا id 'react-widget' ہوگا
        document.body.appendChild(widgetElement);  // اس div کو body میں شامل کریں
        
        // React 18 میں 'createRoot' کا استعمال کریں
        const root = ReactDOM.createRoot(widgetElement);
        root.render(React.createElement(Widget));  // یہاں 'Widget' وہ React کمپوننٹ ہے جو آپ رینڈر کرنا چاہتے ہیں
      };
      document.head.appendChild(widgetScript);  // ویجیٹ اسکرپٹ کو head میں شامل کریں
    };
    document.head.appendChild(script2);  // ReactDOM اسکرپٹ کو head میں شامل کریں
  };
  document.head.appendChild(script);  // React اسکرپٹ کو head میں شامل کریں
})();
