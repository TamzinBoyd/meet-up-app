- Create card styling wrapper then use this to wrap other components
- Also create a layout component which wraps the main content and routing, allocating a card styling to each using props.children inbuilt feature
- So App just focuses on rendering the routing
- Create Meet Up form and render this in New Meet Up page (wrap in Card)
- Get user input from form. Prevent default on form submitting as this would send a HTML request, want to do this later ourselves. UseRef feature to access the input DOM element and access the value entered
