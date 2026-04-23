document.addEventListener("DOMContentLoaded", () => {

  const projects = [
    ["Ambrela Money App","All your fintech solutions in a single application","amberla.webp"],
    ["Rosec Jewels","A robust and secure eCommerce platform for every type of jewelry requirement.","rosec.webp"],
    ["Dhava","Dhava – Your Smart Fitness Companion.","dhava.jpg"],
    ["Timeout","Time Out is an application that allows you to track your workouts and manage your health.","time-out.webp"],
    ["Recommend You","Recommend You is an amazing social media app with lots of cool features.","recommend-u.webp"],
    ["MooRakshak","Protecting cows, empowering farmers and nurturing a planet-positive dairy future","moorakshak-mobile-app.png"],
    ["AR Education App","AR Education is an excellent application for every student to level up their studies","ar-education.webp"],
    ["Play Sports","Sports event and training","play-sports.webp"],
    ["KTPL","KTPL India: Pioneering Dairy Equipment for a Smarter Tomorrow","kptl-mobile-app.png"],
    ["Enertrak","Live energy analytics","enerket.webp"],
    ["Great11","Fantasy Sporst mobile application","great11.webp"],
    ["RosterUp","eSporst fantasy league platform","rosterup.webp"],
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
