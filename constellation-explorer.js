// Project Constellation Explorer
// This script transforms the projects section into an interactive constellation

function initConstellationExplorer() {
  // Get the projects data from your existing data object
  const projects = data.projects;

  // Define categories for constellations
  const categories = {
    "AI Research": ["DevRev's AI Agent", "DevRev's Expert Answers", "Image Denoising"],
    "System Architecture & Embedded": ["Software Defined Vehicle Stack", "2024 eCTF"],
    "Software": [
      "IITI Student Community Application",
      "DigitalAlpha's SaaS Metrics",
      "Marsh McLennan's API",
      "Cart Guardian",
      "HashVote"
    ],
  };

  // Categorize projects
  const categorizedProjects = {};
  projects.forEach((project) => {
    let assigned = false;
    for (const [category, keywords] of Object.entries(categories)) {
      for (const keyword of keywords) {
        if (project.title.includes(keyword)) {
          if (!categorizedProjects[category])
            categorizedProjects[category] = [];
          categorizedProjects[category].push(project);
          assigned = true;
          break;
        }
      }
      if (assigned) break;
    }

    // If project doesn't match any category, put in "Other Innovations"
    if (!assigned) {
      if (!categorizedProjects["Other Innovations"])
        categorizedProjects["Other Innovations"] = [];
      categorizedProjects["Other Innovations"].push(project);
    }
  });

  // Replace projects section content
  const projectsSection = document.getElementById("projects");
  projectsSection.innerHTML = `
    <h2 class="section-title">Project Constellation</h2>
    <div class="constellation-controls">
      <div class="category-legend"></div>
    </div>
    <div class="constellation-explorer">
      <div class="constellation-container expanded">
        <div class="night-sky"></div>
      </div>
      <div class="project-detail-panel">
        <div class="panel-header">
          <h3>Project Details</h3>
          <button class="close-panel-btn"><i class="fas fa-times"></i></button>
        </div>
        <div class="panel-content"></div>
      </div>
    </div>
  `;

  const nightSky = document.querySelector(".night-sky");
  const detailPanel = document.querySelector(".project-detail-panel");
  const constellationContainer = document.querySelector(".constellation-container");
  const panelContent = document.querySelector(".panel-content");
  const closeButton = document.querySelector(".close-panel-btn");
  const categoryLegend = document.querySelector(".category-legend");

  // Close button functionality
  closeButton.addEventListener("click", () => {
    detailPanel.classList.remove("visible");
    constellationContainer.classList.add("expanded");
    document
      .querySelectorAll(".star")
      .forEach((s) => s.classList.remove("selected"));
  });

  // Create category legend
  const categoryColors = {
    "AI Research": "#64ffda",
    "System Architecture & Embedded": "#ffb347",
    "Software": "#ff6b6b",
    "Other Innovations": "#cc8eff",
  };

  function starsOverlap(pos1, pos2, minDistance = 8) {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < minDistance;
  }

  // Function to find a valid non-overlapping position
  function findNonOverlappingPosition(
    positions,
    centerX,
    centerY,
    index,
    totalStars
  ) {
    const minDistance = 10; // Minimum distance between stars in percentage
    let attempts = 0;
    const maxAttempts = 20;

    // Calculate initial position in a rough circle around the constellation center
    const angle = (index / totalStars) * Math.PI * 2;
    const baseDistance = Math.random() * 15 + 5; // 5-20% distance from center

    let x, y;
    let valid = false;

    while (!valid && attempts < maxAttempts) {
      // Add increasing randomness with each attempt
      const variability = Math.min(5 + attempts * 2, 15);
      const distance = baseDistance + (Math.random() - 0.5) * variability;

      x = centerX + Math.cos(angle) * distance;
      y = centerY + Math.sin(angle) * distance;

      // Add some controlled randomness
      x += (Math.random() - 0.5) * variability;
      y += (Math.random() - 0.5) * variability;

      // Ensure positions are within bounds (5-95%)
      x = Math.min(Math.max(x, 5), 95);
      y = Math.min(Math.max(y, 5), 95);

      // Check if this position overlaps with any existing positions
      valid = true;
      for (const pos of positions) {
        if (starsOverlap({ x, y }, pos, minDistance)) {
          valid = false;
          break;
        }
      }

      attempts++;
    }

    if (!valid && attempts >= maxAttempts) {
      // If we couldn't find a non-overlapping position, place it at the edge
      const edgeAngle = Math.random() * Math.PI * 2;
      x = centerX + Math.cos(edgeAngle) * 25; // Place further away
      y = centerY + Math.sin(edgeAngle) * 25;

      // Keep within bounds
      x = Math.min(Math.max(x, 5), 95);
      y = Math.min(Math.max(y, 5), 95);
    }

    return { x, y };
  }

  Object.keys(categorizedProjects).forEach((category) => {
    const legendItem = document.createElement("div");
    legendItem.className = "legend-item";
    legendItem.innerHTML = `
      <span class="legend-color" style="background-color: ${categoryColors[category]}"></span>
      <span class="legend-text">${category}</span>
    `;
    legendItem.addEventListener("click", () => {
      // Toggle highlighting of this constellation
      const stars = document.querySelectorAll(
        `.star[data-category="${category}"]`
      );
      const isActive = legendItem.classList.contains("active");

      document
        .querySelectorAll(".legend-item")
        .forEach((item) => item.classList.remove("active"));
      document
        .querySelectorAll(".star")
        .forEach((star) => star.classList.remove("highlighted"));

      if (!isActive) {
        legendItem.classList.add("active");
        stars.forEach((star) => star.classList.add("highlighted"));
      }
    });
    categoryLegend.appendChild(legendItem);
  });

  // Generate stars for each project
  Object.entries(categorizedProjects).forEach(
    ([category, categoryProjects]) => {
      // Create a "constellation" group for this category
      const constellation = document.createElement("div");
      constellation.className = "constellation";
      constellation.dataset.category = category;
      nightSky.appendChild(constellation);

      // Determine the center of this constellation
      const centerX = Math.random() * 50 + 25; // 15-85% of width
      const centerY = Math.random() * 50 + 25; // 15-85% of height

      // Create connecting lines for constellation (before stars, so stars appear on top)
      if (categoryProjects.length > 1) {
        const constellationShape = document.createElement("div");
        constellationShape.className = "constellation-shape";
        constellation.appendChild(constellationShape);

        // Will add SVG lines after stars are positioned
        setTimeout(() => {
          const stars = Array.from(constellation.querySelectorAll(".star"));
          const svgNS = "http://www.w3.org/2000/svg";
          const svg = document.createElementNS(svgNS, "svg");
          svg.setAttribute("width", "100%");
          svg.setAttribute("height", "100%");

          // Create lines between stars in order
          for (let i = 0; i < stars.length - 1; i++) {
            const star1 = stars[i].getBoundingClientRect();
            const star2 = stars[i + 1].getBoundingClientRect();
            const skyRect = nightSky.getBoundingClientRect();

            // Calculate positions relative to the night sky
            const x1 = star1.left - skyRect.left + star1.width / 2;
            const y1 = star1.top - skyRect.top + star1.height / 2;
            const x2 = star2.left - skyRect.left + star2.width / 2;
            const y2 = star2.top - skyRect.top + star2.height / 2;

            const line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke", categoryColors[category]);
            line.setAttribute("stroke-width", "1");
            line.setAttribute("stroke-opacity", "0.3");
            svg.appendChild(line);
          }

          constellationShape.appendChild(svg);
        }, 100); // Small delay to ensure stars are positioned
      }

      // Create stars for each project
      categoryProjects.forEach((project, index) => {
        // Track all star positions to avoid overlap
        const allPositions = [];

        // Collect all existing star positions
        document.querySelectorAll(".star").forEach((existingStar) => {
          const left = parseFloat(existingStar.style.left);
          const top = parseFloat(existingStar.style.top);
          if (!isNaN(left) && !isNaN(top)) {
            allPositions.push({ x: left, y: top });
          }
        });

        // Find a non-overlapping position
        const { x: finalX, y: finalY } = findNonOverlappingPosition(
          allPositions,
          centerX,
          centerY,
          index,
          categoryProjects.length
        );

        // Create star element
        const star = document.createElement("div");
        star.className = "star";
        star.dataset.category = category;
        star.dataset.id = index;
        star.style.left = `${finalX}%`;
        star.style.top = `${finalY}%`;

        // Store the position for future stars
        allPositions.push({ x: finalX, y: finalY });

        // Rest of the star creation code remains the same
        // Vary star sizes slightly
        const size = 0.8 + Math.random() * 0.6; // 0.8-1.4x default size
        star.style.transform = `scale(${size})`;

        // Set star color based on category
        star.style.backgroundColor = categoryColors[category];
        star.style.boxShadow = `0 0 10px ${categoryColors[category]}, 0 0 20px ${categoryColors[category]}`;

        // Star interactions
        star.addEventListener("click", () => {
          // Show project details
          showProjectDetails(project);

          // Highlight this star
          document
            .querySelectorAll(".star")
            .forEach((s) => s.classList.remove("selected"));
          star.classList.add("selected");
        });

        constellation.appendChild(star);
      });
    }
  );

  // Add some random background stars
  for (let i = 0; i < 100; i++) {
    const bgStar = document.createElement("div");
    bgStar.className = "bg-star";
    bgStar.style.left = `${Math.random() * 100}%`;
    bgStar.style.top = `${Math.random() * 100}%`;

    // Vary opacity and size for depth effect
    const size = 0.5 + Math.random() * 1.5;
    const opacity = 0.2 + Math.random() * 0.8;
    bgStar.style.transform = `scale(${size})`;
    bgStar.style.opacity = opacity;

    // Add twinkling animation with random delay
    bgStar.style.animationDelay = `${Math.random() * 5}s`;

    nightSky.appendChild(bgStar);
  }

  // Function to display project details
  function showProjectDetails(project) {
    panelContent.innerHTML = `
      <div class="project-detail">
        <h3>${project.title}</h3>
        <p class="project-date">${project.date}</p>
        <p>${project.description}</p>
        <div class="project-links">
          ${project.links
            .map(
              (link) =>
                `<a href="${link.href}" title="${link.title}" target="_blank"><i class="${link.icon}"></i></a>`
            )
            .join("")}
        </div>
      </div>
    `;
    detailPanel.classList.add("visible");
    constellationContainer.classList.remove("expanded");
  }

  // Close detail panel when clicking outside
  nightSky.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("night-sky") ||
      e.target.classList.contains("bg-star")
    ) {
      detailPanel.classList.remove("visible");
      constellationContainer.classList.add("expanded");
      document
        .querySelectorAll(".star")
        .forEach((s) => s.classList.remove("selected"));
    }
  });

  // Show a default project (first one) to guide users
  setTimeout(() => {
    const firstStar = document.querySelector(".star");
    if (firstStar) firstStar.click();
  }, 1000);
}

// Initialize the constellation after the main data loads
document.addEventListener("DOMContentLoaded", function () {
  // Wait a bit to ensure the original renderSection has completed
  setTimeout(initConstellationExplorer, 100);
});