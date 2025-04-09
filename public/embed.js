(function() {
  // Step 1: Load React script
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/react@17/umd/react.production.min.js'; // React CDN link
  script.onload = function() {
    
    // Step 2: Load ReactDOM script
    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js'; // ReactDOM CDN link
    script2.onload = function() {
      
      // Step 3: Load widget script
      const widgetScript = document.createElement('script');
      widgetScript.src = 'https://your-cdn-link/widget-bundle.js'; // Replace with actual widget CDN URL
      widgetScript.onload = function() {
        
        // Step 4: Create a div for widget rendering
        const widgetElement = document.createElement('div');
        widgetElement.id = 'react-widget';  // This div's id is 'react-widget'
        
        // Optionally, append to a specific place in the DOM
        document.body.appendChild(widgetElement);  // Or use document.getElementById('your-target-div')

        // Step 5: Render widget using ReactDOM
        const root = ReactDOM.createRoot(widgetElement);
        root.render(React.createElement(Widget));  // 'Widget' should be the React component you want to render

      };
      // Handle widget script error
      widgetScript.onerror = function() {
        console.error("Widget script failed to load.");
      };
      document.head.appendChild(widgetScript); // Add widget script to the head
    };
    
    // Handle ReactDOM script error
    script2.onerror = function() {
      console.error("ReactDOM script failed to load.");
    };
    document.head.appendChild(script2);  // Add ReactDOM script to the head
  };

  // Handle React script error
  script.onerror = function() {
    console.error("React script failed to load.");
  };
  document.head.appendChild(script);  // Add React script to the head
})();
