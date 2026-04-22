document.addEventListener("DOMContentLoaded", () => {

  const projects = [
    ["Ambrela Money App","Secure payment system","amberla.webp"],
    ["Rosec Jewels","A robust and secure eCommerce platform for every type of jewelry requirement.","rosec.webp"],
    ["Dhava","Dhava – Your Smart Fitness Companion.","dhava.jpg"],
    ["MooRakshak","Smart dairy system","moorakshak-mobile-app.png"],
    ["Education App","Offline learning platform","ar-education.webp"],
    ["Play Sports","Training platform","play-sports.webp"],
    ["KTPL","Dairy system","kptl-mobile-app.png"],
    ["Enertrak","Live energy analytics","enerket.webp"],
    ["Great11","Real-time scoring system","jeckpot11.webp"],
    ["RosterUp","League platform","rosterup.webp"],
    ["Smart-Boss","Building a robust platform to manage construction workers and machinery.","smartboss.webp"]
  ];

  const grid = document.getElementById("grid");

  if (!grid) {
    console.error("GRID NOT FOUND ❌");
    return;
  }

  grid.innerHTML = projects.map(p => `
    <div class="project">
      <img src="images/${p[2]}" alt="${p[0]}">
      <div class="pbody">
        <div class="ptitle">${p[0]}</div>
        <div class="pdesc">${p[1]}</div>
      </div>
    </div>
  `).join("");

});
