fetch("/api/hello")
  .then(r => r.json())
  .then(d => document.getElementById("msg").innerText = d.message);
