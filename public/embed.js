(function() {
    // React اور ReactDOM کو لوڈ کرنے کے لیے اسکرپٹ
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/react@17/umd/react.production.min.js'; // React کے CDN لنک
    script.onload = function() {
      const script2 = document.createElement('script');
      script2.src = 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js'; // ReactDOM کے CDN لنک
      script2.onload = function() {
        // آپ کی ویجیٹ کی فائل کا لنک یہاں ڈالیں
        const widgetScript = document.createElement('script');
        widgetScript.src = 'https://embed-widget-bphfdglkz-abdul-rehmans-projects-cfaad9ee.vercel.app/static/js/main.chunk.js'; // Vercel URL سے فائل لوڈ کریں
        widgetScript.onload = function() {
          // آپ کا ویجیٹ یہاں رینڈر ہوگا
          const widgetElement = document.createElement('div');
          widgetElement.id = 'react-widget';
          document.body.appendChild(widgetElement);
  
          // React کو رینڈر کرنے کا عمل
          ReactDOM.render(React.createElement(Widget), widgetElement);
        };
        document.head.appendChild(widgetScript);
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script);
  })();
  