const fs = require('fs');

fetch('http://localhost:8080/weddings')
  .then(res => res.text())
  .then(html => {
    fs.writeFileSync('scratch/weddings_output.html', html);
    console.log('Saved scratch/weddings_output.html, length:', html.length);
    // Find all occurrences of script or link
    const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
    console.log('Found scripts:', scripts.length);
    scripts.forEach((s, idx) => console.log(`Script ${idx}:`, s.substring(0, 150)));
  })
  .catch(err => console.error(err));
