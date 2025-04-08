// assets/js/katexClientside.js
document.addEventListener('DOMContentLoaded', function() 
{
  // Render math in the entire body
  renderMathInElement(document.body, 
  {
    // Standard delimiters
    delimiters: 
    [
      // $$ ... $$ display math
      {left: '$$', right: '$$', display: true},  
      
      // $ ... $ inline math
      {left: '$', right: '$', display: false},   
      
    ],
    throwOnError: false
  });
});