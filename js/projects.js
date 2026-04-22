const projects = [
  ["Ambrela Money App","Secure payment system","amberla.webp"],
  ["Rosec Jewels","Ecommerce jewelry platform","rosec.webp"],
  ["Education App","Offline learning platform","ar-education.webp"],
  ["MooRakshak","Smart dairy system","moorakshak-mobile-app.png"]
];

const grid = document.getElementById("grid");

if (grid) {
  grid.innerHTML = projects.map(p=>`
    <div class="project">
      <img src="images/${p[2]}">
      <div class="pbody">
        <div class="ptitle">${p[0]}</div>
        <div class="pdesc">${p[1]}</div>
      </div>
    </div>
  `).join("");
}