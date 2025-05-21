const data = {
  about: {
    paragraphs: [
      "Krish Agrawal is a Computer Science and Engineering graduate from the Indian Institute of Technology Indore. Throughout his academic journey, he demonstrated a strong foundation in software development, systems programming, and applied research in areas such as artificial intelligence and embedded systems. His work often bridges the gap between deep technical implementation and practical application, evidenced by multiple successful internships, research publications, and competitive achievements during his time at IIT.",
      "Currently, Krish is working as a Software Developer Intern at GoQuant Technologies, Inc., where he is contributing to the development of high-performance market data infrastructure and trading systems. His responsibilities include building scalable tools, optimizing real-time data pipelines, and working with modern C++ and networking libraries to deliver efficient financial applications. His role at GoQuant builds upon his diverse technical background, further honing his ability to deliver reliable, low-latency software solutions in fast-paced environments.",
    ],
    education: [
      {
        title: "B.Tech - Computer Science and Engineering",
        institute: "Indian Institute of Technology Indore",
        score: "CPI: 9.51, Minor (Economics) CPI: 9.67",
        duration: "2021 - Present",
      },
    ],
  },
  experience: [
    {
      title: "C++ Developer Intern (Part-time Remote)",
      company: "GoQuant Technologies, Inc.",
      duration: "Dec 2024 - Present",
      points: [
        "Engineered a market data mining tool that aggregates public market data from major crypto exchanges (e.g., Deribit, Bybit, Binance, OKX), utilizing a NanoMsg-based Pub-Sub model to multiplex exchange connections across multiple clients.",
        "Built a consolidated order book system to aggregate and serve unified market depth across exchanges, based on configurable depth and precision parameters.",
        "Optimized the Exchange Gateway for Binance Coin-M and Binance USD-M, reducing hot-path latency by over 50% at the microsecond scale.",
        "Configured a hybrid GPU cluster system capable of toggling between local crypto mining and LLM inference servicing via REST API, dynamically optimizing compute resource usage.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Quadeye Securities LLP",
      duration: "May 2024 - Jul 2024",
      points: [
        "Built internal command-line utilities for analyzing and monitoring file system patterns, including summarization and anomaly detection.",
        "Optimized data processing workflows, handling large-scale logs with a focus on performance and responsiveness.",
        "Developed tools around task orchestration systems to improve reliability, efficiency, and resource management.",
        "Designed test environments to streamline deployment setups and configuration testing.s",
      ],
    },
    {
      title: "Undergraduate Researcher",
      company: "OPTIMAL Research Group, IIT Indore",
      duration: "Oct 2022 - Apr 2025",
      points: [
        "Developed a deep learning model to get features for the Random Vector Function Link (RVFL) model to predict pediatric bone age using the RSNA challenge dataset.",
        "Worked towards applying machine learning and signal processing techniques to Electroencephalography (EEG) data and designing and conducting experiments with human subjects towards emotion and lie detection.",
      ],
    },
    {
      title: "Research Intern",
      company: "University of Tartu",
      duration: "May 2023 - Apr 2024",
      points: [
        "Formulated MultiReflect, a multimodal self-reflective Retrieval Augmented Generation (RAG) pipeline for fact checking, utilizing advanced LLMs and RAG to enhance accuracy by 20%, as evaluated using VERITE benchmarks.",
        "Enhanced interpretability of black-box ML models trained with AutoML by developing metrics for transparency, accountability, correctness, simplicity, and trustworthiness, improving explainability by 15%.",
      ],
    },
    {
      title: "Full Stack Development Intern",
      company: "Reallos Technologies, LLC",
      duration: "Jun 2020 - Aug 2020",
      points: [
        "Designed and implemented a web ecosystem for the real estate industry, enabling collaboration between agents, streamlining property transactions with efficient document sharing, and cutting processing time by over 40%",
      ],
    },
  ],
  projects: [
    {
      title: "IITI Student Community Application",
      date: "Feb 2025 - Apr 2025",
      description:
        "Developed a mobile application for IIT Indore students to facilitate event management, club activities, and community engagement. The app features a user-friendly interface for event creation, registration, and notifications, along with a unique ride sharing feature to connect students for transportation. The application is built using Flutter and Dart, ensuring cross-platform compatibility.",
      links: [
        {
          href: "https://github.com/Krish2208/iit-student-community-app",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/1spJVK9yEHa-7uEV_QE5BhBHqp3Vsj9QF/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Software Requirements Specification",
        },
        {
          href: "https://drive.google.com/file/d/1ugW06doT01xrBQzUGExhcAAREemrCnr-/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Final Report",
        },
        {
          href: "https://drive.google.com/file/d/1zKdehnPW7uBW_kjyw1YePRjMqizqlR8y/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Final Presentation",
        },
      ],
    },
    {
      title: "Software Defined Vehicle Stack",
      date: "Jul 2024 - Dec 2024",
      description:
        "Built an end-to-end SDV stack including a vehicle simulator generating real-time sensor data, integrated with a Battery Management System (BMS) application running on Automotive Grade Linux (AGL). Implemented a digital twin system using Renode and Docker to simulate the ECU setup, enabling secure, pre-deployment OTA update verification and attestation.",
      links: [
        {
          href: "https://drive.google.com/file/d/1M0S6ZakiFidTbD5M94bYrrq4Lwo0omDq/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View PDF",
        },
      ],
    },
    {
      title: "2024 eCTF: Embedded Capture the Flag",
      date: "Jan 2024 - Apr 2024",
      description:
        "Developed a supply chain security solution using C and MSDK for micro-controllers (MAX78000FTHR) in medical devices to ensure chip authenticity, integrity, and data confidentiality using cryptographic techiques. Simulated a counterfeit scenario by conducting a Man-in-the-Middle Attack with Arduino UNO, intercepting I2C communication for vulnerability testing.",
      links: [
        {
          href: "https://github.com/nishkarshluthra/eCTF-2024-IITI",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/1l0H0YTQ5fCNC4dnYf2pmgIHea60fkPkA/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Design Document",
        },
      ],
    },
    {
      title: "Cart Guardian: Dark Pattern Buster Hackathon 23",
      date: "Dec 2023 - Mar 2024",
      description:
        "Developed Cart Guardian browser extension to counter 13 dark patterns, boosting trust in online marketplaces. Implemented policy summarization using BeautifulSoup and LLaMa-7B, enabling concise summaries of product policies for users, fostering transparency. Utilized InstructBlip VLM and LLaMa-7B to verify product images and descriptions.",
      links: [
        {
          href: "https://github.com/Krish2208/Cart-Guardian",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/14dT3aTk5kcmPIZm95VvUZi4ea4M9HZpG/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Poster",
        },
        {
          href: "https://drive.google.com/file/d/1viYXOKKqUp012TEiLcpJ50PaDbCJnfjm/view?usp=sharing",
          icon: "fas fa-video",
          title: "View Video",
        },
      ],
    },
    {
      title: "DevRev's AI Agent 007: Tooling up for Success",
      date: "Nov 2023 - Dec 2023",
      description:
        "Led a team of eight people to develop a pipeline for tool-usage LLMs that takes a user query and outputs the combination of tools and arguments in JSON format in less than 3 ¢ per query. Used GPT-4-turbo to generate answers by taking in Retrieved tools from GPT-3.5-turbo relevant to the user query and use few-shot examples retrieved by performing a similarity search of user query.",
      links: [
        {
          href: "https://github.com/CynapticsAI/DevRev_InterIIT_2024",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/1qGQPzxkvRrzEGjvqB7unzfzwLcU3xtCA/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Report",
        },
      ],
    },
    {
      title: "Algoninjas: Techfest 2024",
      date: "Nov 2024 - Dec 2024",
      description:
        "Developed infrastructure design for algorithmic trading system as a preliminary step for the hackathon. Implemented a high-performance, trading strategy using Backtesting and Paper Trading APIs using just the tick data.",
      links: [
        {
          href: "https://drive.google.com/file/d/1_VN-htlVBOzZCTFArelAcG1c4e65M-Xt/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Infrastructure Design",
        },
        {
          href: "https://drive.google.com/file/d/163MKx8W3UFtNUL20tk-tE2o154iRw29n/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Presentation",
        }
      ],
    },
    {
      title: "HashVote",
      date: "Feb 2023 - Apr 2023",
      description:
        "Designed a platform for college gymkhana (student body) elections that allows student affairs officials to create and monitor elections securely and transparently and students to vote for their candidates. Developed custom blockchain technology to ensure the integrity and anonymity of the votes, transparency, and security of the voting process.",
      links: [
        {
          href: "https://github.com/Krish2208/HashVote",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/1WPDZuYet_8csWhODbyCMkWWI0yFewxMz/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Documentation",
        },
      ],
    },
    {
      title: "DevRev's Expert Answers in a Flash: Improving Domain-Specific QA",
      date: "Dec 2022 - Feb 2023",
      description:
        "Implemented a pipeline that performs QA task from knowledge base with a mean inference time of 716ms on CPU. Finetuned cross-encoders to pick the best paragraphs from the knowledge base and benchmarked various QA models to ensure that they could fit under 1 second inference time on CPU. Used Electra-small to perform QA task and cross-encoder to pick the best paragraphs from the knowledge base.",
      links: [
        {
          href: "https://github.com/CynapticsAI/DevRev-InterIIT_2023",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/12S2q2M4sIyYnVRL0MfQI6jNsnBPshh1w/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Report",
        },
      ],
    },
    {
      title: "Marsh McLennan's API Generate-a-thon",
      date: "Sep 2022 - Dec 2022",
      description:
        "Implemented an ETL pipeline that extracts the most used queries from database query logs using SpaCy and back engineers the APIs using clustering techniques and vectorization. Implemented a solution that dynamically replaces the user-specified values with placeholders in the APIs using RegEx and Python. Designed a web application to analyze the CRUD operations using the queries and test the generated APIs.",
      links: [
        {
          href: "https://github.com/Krish2208/API-Generator",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://github.com/Rupal17shah/api-generator",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/1ZgQXyBk9Ie60Ug0eqIAdvu8Yo7Lxul6i/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View Report",
        },
      ],
    },
    {
      title: "DigitalAlpha's SaaS Metrics Analyser",
      date: "Dec 2021 - Mar 2022",
      description:
        "Created an ETL pipeline to scrape SEC 10-K & 10-Q filings of SaaS companies, compute metrics like LTV and ARR, and analyze them using ML models, achieving an F1 score of 0.933, 0.804, 0.794 for bad, neutral, and good. Deployed FinBERT to summarize filings and extract sentiment, enhancing financial report analysis for investors. Implemented a web app using Flask and React for user-friendly data visualization.",
      links: [
        {
          href: "https://github.com/Web-Team-IITI-Gymkhana/data-bot",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/1O70VOqQOjGbQ8A9hteGfo9X9fYMIu7CM/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View PDF",
        },
      ],
    },
    {
      title: "Image Denoising",
      date: "Jun 2022 - Aug 2022",
      description:
        "Trained ADNet Architecture from scratch, especially to De-noise CCTV images using PyTorch. Developed a Web Application to upload/capture image and test the model using React, Flask.",
      links: [
        {
          href: "https://github.com/Krish2208/IITISoC-Image-Denoising",
          icon: "fab fa-github",
          title: "GitHub",
        },
        {
          href: "https://drive.google.com/file/d/1LpnV8f2BKiT85lkBV3PYJyx4CBQwBUk1/view?usp=sharing",
          icon: "fas fa-file-pdf",
          title: "View PDF",
        },
      ],
    },
  ],
  publications: [
    {
      title:
        "MultiReflect: Multimodal Self-Reflective RAG-based Automated Fact-Checking",
      date: "Accepted, ACL 2025 Workshop MAGMaR",
      description:
        "MultiReflect is a multimodal self-reflective fact-checking system leveraging Large Language Models and Retrieval Augmented Generation. It combines text and image evidence from the internet to improve verification accuracy. Evaluated on VERITE benchmarks, MultiReflect outperforms baselines in binary classification using multimodal reasoning, addressing outdated information and limited human query capabilities.",
      link: "https://openreview.net/forum?id=euVYYIlanh",
    },
    {
      title:
        "An End-to-End Framework with Digital Twin Based Attestation for OTA Updates",
      date: "Published, IEEE 2025 COMSNETS Proceedings",
      description:
        "This work proposes a secure OTA update framework for Software-Defined Vehicles using digital twin technology. Software compatibility is verified on virtualized ECUs before real-world deployment. By simulating updates in a mirrored cloud environment, the framework ensures reliability and safety while enabling continual functional improvements in modern automotive systems.",
      link: "https://ieeexplore.ieee.org/document/10885560",
    },
    {
      title: "EviGenerate: Generative Evidence in Automated Fact-Checking",
      date: "Published, AAAI 2025 PDLM Poster Track",
      description:
        "EviGenerate is an automated fact-checking pipeline using large language models for dynamic evidence generation. It integrates prompting strategies like entity hints, relation explanation, and critical reflection to improve claim verification. Tested on a modified FEVER dataset, it achieves strong scores, enhancing adaptability and reliability in evolving misinformation landscapes.",
      link: "https://openreview.net/forum?id=pf7zhlETm5",
    },
    {
      title: "LSTMSE-Net: Long Short Term Speech Enhancement Network",
      date: "Published, 3rd COG-MHEAR Workshop",
      description:
        "LSTMSE-Net is a multimodal speech enhancement model combining audio and visual cues. Visual features from VFN and audio features are fused via a separator network for enhanced speech quality. It surpasses COG-MHEAR AVSE Challenge baselines in SISDR, STOI, and PESQ metrics, showcasing robust performance in noisy audio environments.",
      link: "https://arxiv.org/abs/2409.02266",
    },
  ],
  achievements: [
    {
      title: "Third Place, ADC 2025",
      subtitle: "Advanced Computing and Communications Society, Mar 2025",
      icon: "fas fa-trophy",
    },
    {
      title: "Best BTP Presentation",
      subtitle:
        "Department of Computer Science and Engineering, IIT Indore, Mar 2025",
      icon: "fas fa-award",
    },
    {
      title: "Best Undergraduate Paper Award",
      subtitle: "COMSNETS 2025, Jan 2025",
      icon: "fas fa-medal",
    },
    {
      title: "International Rank 8, 2024 eCTF",
      subtitle: "Embedded Capture the Flag, MITRE, USA, Apr 2024",
      icon: "fas fa-trophy",
    },
    {
      title: "National Finalist (Top 10)",
      subtitle:
        "Dark Pattern Buster Hackathon 2023, Government of India, Mar 2024",
      icon: "fas fa-star",
    },
    {
      title: "Silver Medalist, Inter IIT Tech Meet 12.0",
      subtitle: "Dec 2023",
      icon: "fas fa-medal",
    },
    {
      title: "Silver Medalist, Inter IIT Tech Meet 11.0",
      subtitle: "Feb 2023",
      icon: "fas fa-medal",
    },
    {
      title: "Second Position, API Generate-a-thon, Techfest, IIT Bombay",
      subtitle: "Dec 2022",
      icon: "fas fa-trophy",
    },
    {
      title: "Bronze Medalist, Inter IIT Tech Meet 10.0",
      subtitle: "Mar 2022",
      icon: "fas fa-medal",
    },
    {
      title: "KVPY Fellow, Indian Institute of Science, Bangalore",
      subtitle: "2021",
      icon: "fas fa-star",
    },
  ],
  skills: {
    languages: [
      "Python",
      "C/C++",
      "SQL",
      "Dart",
      "HTML",
      "CSS",
      "Javascript",
      "Verilog",
      "Go",
      "Rust",
    ],
    tools: [
      "Git",
      "Docker",
      "Flask",
      "Django",
      "FastAPI",
      "Flutter",
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Celery",
      "RabbitMQ",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "Conan",
      "Meson",
      "NanoMsg",
      "Libhv",
      "Google Tests",
      "Google Benchmark",
      "AWS C++ SDK",
      "Boost",
      "Protobuffer",
      "Firebase",
      "PyQt",
      "ScaPy",
      "ns3 Simulator",
      "Socket",
      "OpenGL",
      "Arduino IDE",
      "WolfSSL",
      "PyTorch",
      "TensorFlow",
      "BeautifulSoup",
      "GPIOD",
      "Mininet Simulator",
      "Ryu Controller",
      "QEMU",
      "Renode",
      "Intel Neural Compressor",
      "Qt",
      "Intel Quartus",
    ],
  },
};

function renderSection() {
  renderAbout();
  renderExperience();
  renderPublications();
  renderAchievements();
  renderSkills();
}

function renderAbout() {
  const section = document.getElementById("about");
  const html = `
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          ${data.about.paragraphs.map((p) => `<p>${p}</p>`).join("")}
        </div>
        <div class="education">
          ${data.about.education
            .map(
              (e) => `
            <div class="education-card">
              <h3>${e.title}</h3>
              <p>${e.institute}</p>
              <p class="score">${e.score}</p>
              <p>${e.duration}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  section.innerHTML = html;
}

function renderExperience() {
  const section = document.getElementById("experience");
  section.innerHTML = `
      <h2 class="section-title">Experience</h2>
      <div class="experience-timeline">
        ${data.experience
          .map(
            (exp, i) => `
          <div class="experience-container ${i % 2 === 0 ? "left" : "right"}">
            <div class="experience-content">
              <h3>${exp.title}</h3>
              <h4>${exp.company}</h4>
              <p class="date">${exp.duration}</p>
              <ul>${exp.points.map((p) => `<li>${p}</li>`).join("")}</ul>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
}

function renderPublications() {
  const section = document.getElementById("publications");
  section.innerHTML = `
      <h2 class="section-title">Publications</h2>
      <div class="publications-grid">
        ${data.publications
          .map(
            (pub) => `
          <div class="publication-card">
            <h3>${pub.title}</h3>
            <p class="publication-date">${pub.date}</p>
            <p>${pub.description}</p>
            <div class="publication-links">
              <a href="${pub.link}" title="View Publication"><i class="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
}

function renderAchievements() {
  const section = document.getElementById("achievements");
  section.innerHTML = `
      <h2 class="section-title">Achievements</h2>
      <div class="achievements-list">
        ${data.achievements
          .map(
            (ach) => `
          <div class="achievement-item">
            <div class="achievement-icon"><i class="${ach.icon}"></i></div>
            <div class="achievement-content">
              <h3>${ach.title}</h3>
              <p>${ach.subtitle}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
}

function renderSkills() {
  const section = document.getElementById("skills");
  section.innerHTML = `
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-container">
        ${Object.entries(data.skills)
          .map(
            ([category, skills]) => `
          <div class="skills-category">
            <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div class="skills-list">
              ${skills
                .map((skill) => `<div class="skill-tag">${skill}</div>`)
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
}

document.addEventListener("DOMContentLoaded", renderSection);

// Scroll handling for header
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollTop = document.getElementById("scrollTop");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (window.scrollY > 500) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }
});

// Scroll to top button
document.getElementById("scrollTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a, .hero-buttons a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: "smooth",
    });
  });
});
