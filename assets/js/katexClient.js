// assets/js/katexClientside.js
document.addEventListener('DOMContentLoaded', function() 
{
  // Render math in the entire body
  renderMathInElement(document.body, 
  {
    // Standard delimiters
    delimiters: 
    [
      {left: '$$', right: '$$', display: true},  // $$ ... $$ display math
      {left: '$', right: '$', display: false},   // $ ... $ inline math
      
    ],
    throwOnError: false // Don't stop rendering on errors
  });
});