import { useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Camera, Dumbbell, Cpu, Mountain, Linkedin, Github, Mail, ExternalLink } from 'lucide-react'


import DoodleJumpGame from './DoodleJumpGame';

function App() {
  const [activeTab, setActiveTab] = useState('profile'); // getters and setters (bydefault it puts profile) when it starts active tab is set to profile
  const [isVisible, setIsVisible] = useState(true); // bydefault itVisible is false

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  const skills = {
    "Languages": ["Java", "Python", "C", "C++", "SQL", "HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "Bash", "Git", "Linux"],
    "Frameworks": ["Spring Boot", "Node.js", "J2EE", "JPA Hibernate (ORM)", "Tomcat", "REST APIs", "JSP", "Express", "RAG"],
    "Testing": ["JUnit", "Pytest", "Selenium", "Robot Framework", "Postman"],
    "Networking & Protocols": ["TCP/IP", "DNS", "TLS", "HTTP/2", "HTTP/3", "QUIC", "gRPC", "MQTT", "HTTP", "HTTPS"],
    "Collaboration & Delivery": ["GitLab", "Azure DevOps", "Azure Pipelines", "Jenkins", "Jira", "Agile/Scrum", "Confluence", "Maven"],
    "Databases & Data": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "Apache Pulsar", "Elasticsearch", "Typesense", "Qdrant"],
    "Monitoring & Observability": ["Prometheus", "Grafana", "AWS CloudWatch", "ELK Stack", "Alerting", "Incident Response"],
    "Cloud & Infrastructure": ["AWS (EC2, S3, Lambda, RDS, VPC, IAM, CloudFront)", "CDN", "GCP", "Azure", "Terraform", "Kubernetes (EKS, GKE)", "Docker", "Nginx"],
    "Architectural Patterns": ["Monolith", "Microservices", "RESTful APIs", "MVC", "Event-Driven", "Serverless"]
  };
const projects = [
  {
    id: 1,
    title: "Ecovate - A Sustainable City Management Platform",
    description: "Designed and implemented Node.js (Express) backend routes and REST APIs for core platform services, enabling secure and scalable data access. Deployed cloud-native microservices on GCP VM (Self Managed K3s Cluster with nginx), leveraging CI/CD pipelines, Helm, Redis, and Postgres for high availability, scalability, and reliability.",
    diagram: "/src/assets/SustainabilityCityManagement.png", // placeholder for your architecture diagram
    isVideo: false,
    tech: ["Node.js", "Express", "GCP", "K3s", "nginx", "Helm", "Redis", "Postgres", "CI/CD"],
    learnings: [
      "Implemented scalable backend microservices",
      "Managed cloud deployments with Helm and GCP",
      "Ensured high availability and reliability"
    ]
  },
  {
    id: 2,
    title: "WebTransport Pulsar Streaming Platform",
    description: "Developed a high-performance real-time backend streaming architecture using Kubernetes (minikube, metal-lb), Python (Aioquic), WebTransport (QUIC/HTTP3), and Apache Pulsar.",
    diagram: "/src/assets//Webtransport_Thesis.png", // placeholder for architecture diagram
    isVideo: false,
    tech: ["Python", "Aioquic", "WebTransport", "Kubernetes", "Apache Pulsar"],
    learnings: [
      "Built low-latency streaming backend",
      "Managed Kubernetes deployment for real-time services",
      "Optimized WebTransport (QUIC/HTTP3) pipelines"
    ]
  },
  {
    id: 3,
    title: "Bookinfo on Azure AKS with Istio: Terraform Deployment",
    description: "Deployed scalable Bookinfo app on Azure AKS with Istio service mesh, managing traffic, security, monitoring, and remote state file management.",
    diagram: "/src/assets/Bookinfo.png", // placeholder for architecture diagram
    isVideo: false,
    tech: ["Azure", "AKS", "Istio", "Terraform", "Monitoring", "Security"],
    learnings: [
      "Managed Kubernetes deployments on AKS",
      "Configured Istio for traffic routing and security",
      "Implemented Terraform for infrastructure-as-code"
    ]
  },
  {
    id: 4,
    title: "Autonomous Music System Using Hand Gesture Recognition",
    description: "IoT ukulele system using ESP32, flex sensors, and servo motors, controlled via React Native app with Firebase for real-time synchronization.",
    diagram: "/src/assets/IOT-ukulele.mp4", // placeholder for your video or diagram
    isVideo: true,
    tech: ["ESP32", "React Native", "Firebase", "IoT", "Servo Motors"],
    learnings: [
      "Integrated hardware sensors with mobile app",
      "Implemented real-time synchronization with Firebase",
      "Built a user-friendly React Native interface"
    ]
  }
];


  const renderProfile = () => (
    <div className="content-section">
      <div className="profile-hero">
        <div className="avatar-container">
          {/* <div className="avatar">
            <div className="avatar-gradient"></div>
            <span className="avatar-text">SG</span>
          </div> */}
        </div>
        <h1 className="hero-title">Sibin George</h1>
        <p className="hero-subtitle">Full-Stack Software Engineer</p>
        <p className="hero-description">
          Passionate about building scalable systems and solving complex problems. 
          Experienced in cloud architecture, microservices, and modern web technologies.
          Constantly learning and exploring new technologies to deliver innovative solutions.
        </p>
      </div>

      {/* First Big Image with Quote */}
    <div className="hero-image-section">
      <img
        src="/src/assets/lighthouse_sibin.jpeg"
        alt="Inspiration 1"
        className="hero-image"
      />
      <blockquote className="hero-quote">
        "The best way to predict the future is to invent it." – Alan Kay
      </blockquote>
    </div>

    {/* Second Big Image with Quote */}
    <div className="hero-image-section">
      <img
        src="/src/assets/cross_sibin.jpeg"
        alt="Inspiration 2"
        className="hero-image"
      />
      <blockquote className="hero-quote">
        "Simplicity is the soul of efficiency." – Austin Freeman
      </blockquote>
    </div>
    </div>
  );


//   onst renderProfile = () => (
//   <div className="content-section">

//     {/* First Section: Left Image, Right Content */}
//     <div className="hero-section zig-zag-left">
//       <div className="hero-image-column">
//         <img
//           src="/src/assets/lighthouse_sibin.jpeg"
//           alt="Inspiration 1"
//           className="hero-image"
//         />
//       </div>
//       <div className="hero-content-column">
//         <h1 className="hero-title">Sibin George</h1>
//         <p className="hero-subtitle">Full-Stack Software Engineer</p>
//         <p className="hero-description">
//           Passionate about building scalable systems and solving complex problems. 
//           Experienced in cloud architecture, microservices, and modern web technologies.
//           Constantly learning and exploring new technologies to deliver innovative solutions.
//         </p>
//         <blockquote className="hero-quote">
//           "The best way to predict the future is to invent it." – Alan Kay
//         </blockquote>
//       </div>
//     </div>

//     {/* Second Section: Right Image, Left Content */}
//     <div className="hero-section zig-zag-right">
//       <div className="hero-content-column">
//         <h2 className="hero-title">My Philosophy</h2>
//         <p className="hero-description">
//           I believe simplicity and efficiency are key to great software. Balancing creativity with discipline drives results and innovation.
//         </p>
//         <blockquote className="hero-quote">
//           "Simplicity is the soul of efficiency." – Austin Freeman
//         </blockquote>
//       </div>
//       <div className="hero-image-column">
//         <img
//           src="/src/assets/cross_sibin.jpeg"
//           alt="Inspiration 2"
//           className="hero-image"
//         />
//       </div>
//     </div>

//   </div>
// );


  // const renderPhotos = () => (
  //   <div className="content-section">
      
  //   <DoodleJumpGame />
  //   </div>
  // );

  const renderInterests = () => (
    <div className="content-section">
      <h2 className="section-title">Interests & Hobbies</h2>
      <div className="interests-container">
        <div className="interest-card featured">
          <div className="interest-icon">
            <Dumbbell size={64} strokeWidth={1.5} />
          </div>
          <h3>Gym</h3>
          <p>
            Lifting weights and pushing limits. A strong body is a strong mind. The gym is my sanctuary for focus and growth, where I challenge myself to become stronger every day.
          </p>
          <div className="interest-tags">
            <span className="tag">Bench Press</span>
            <span className="tag">Deadlifts</span>
            <span className="tag">Squats</span>
          </div>
        </div>
        <div className="interest-card featured">
          <div className="interest-icon">
            <Mountain size={64} strokeWidth={1.5} />
          </div>
          <h3>Hiking & Outdoor Adventures</h3>
          <p>
            Exploring trails and conquering peaks. There's nothing like the perspective you gain 
            from reaching a summit after a challenging climb. Nature provides the perfect balance 
            to the digital world.
          </p>
          <div className="interest-tags">
            <span className="tag">Mountain Hiking</span>
            <span className="tag">Trail Running</span>
            <span className="tag">Camping</span>
          </div>
        </div>
        <div className="interest-card featured">
          <div className="interest-icon">
            <Cpu size={64} strokeWidth={1.5} />
          </div>
          <h3>Technology & Innovation</h3>
          <p>Staying current with emerging tech trends, contributing to open source, and experimenting with new frameworks.</p>
          <div className="interest-tags">
            <span className="tag">Web Development</span>
            <span className="tag">Cloud Computing</span>
            <span className="tag">AI & Machine Learning</span>
          </div>
        </div>
        <div className="interest-card featured">
          <div className="interest-icon">
            <Camera size={64} strokeWidth={1.5} />
          </div>
          <h3>Photography</h3>
          <p>Capturing landscapes and urban scenes. Always looking for the perfect light and composition.</p>
          <div className="interest-tags">
            <span className="tag">Landscape Photography</span>
            <span className="tag">Urban Exploration</span>
            <span className="tag">Portraits</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="content-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={category} className="skill-category" style={{ animationDelay: `${idx * 0.05}s` }}>
            <h3 className="category-title">{category}</h3>
            <div className="skill-tags">
              {items.map((skill, skillIdx) => (
                <span 
                  key={skill} 
                  className="skill-tag"
                  style={{ animationDelay: `${idx * 0.05 + skillIdx * 0.02}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );


const renderProjects = () => (
  <div className="content-section">
    <h2 className="section-title">Featured Projects</h2>
    <div className="projects-container">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          className="project-row"
          style={{
            display: 'flex',
            flexDirection: 'row', // left-right layout
            alignItems: 'flex-start',
            gap: '40px',           // space between text and media
            marginBottom: '60px',  // spacing between rows
            animationDelay: `${idx * 0.1}s`
          }}
        >
          {/* Left: Project Details */}
          <div style={{ flex: 1 }}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-learnings">
              <h4>Key Learnings</h4>
              <ul>
                {project.learnings.map(learning => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Image or Video */}
          <div style={{ flex: 1 }}>
            {project.isVideo ? (
              <video
                src={project.diagram}
                controls
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <img
                src={project.diagram}
                alt={`${project.title} Diagram`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);



  const renderConnect = () => (
    <div className="content-section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="connect-container">
        <p className="connect-intro">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out through any of these channels.
        </p>
        <div className="connect-cards">
          <a href="https://linkedin.com/in/sibingeorge19" className="connect-card" target="_blank" rel="noopener noreferrer">
            <Linkedin size={48} strokeWidth={1.5} />
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
            <span className="connect-link">View Profile <ExternalLink size={16} /></span>
          </a>
          <a href="https://github.com/sbnm007" className="connect-card" target="_blank" rel="noopener noreferrer">
            <Github size={48} strokeWidth={1.5} />
            <h3>GitHub</h3>
            <p>Check out my code</p>
            <span className="connect-link">View Repos <ExternalLink size={16} /></span>
          </a>
          <a href="mailto:georgesibin2000@gmail.com" className="connect-card">
            <Mail size={48} strokeWidth={1.5} />
            <h3>Email</h3>
            <p>Send me a message</p>
            <span className="connect-link">Get in Touch <ExternalLink size={16} /></span>
          </a>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'interests', label: 'Interests' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'game', label: 'Game' },
    { id: 'connect', label: 'Connect' }
  ];

  return (
    <div className={`portfolio-container ${isVisible ? 'visible' : ''}`}>
      <nav>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      {activeTab === 'profile' && renderProfile()}
      {activeTab === 'game' && <DoodleJumpGame />}
      {activeTab === 'interests' && renderInterests()}
      {activeTab === 'skills' && renderSkills()}
      {activeTab === 'projects' && renderProjects()}
      {activeTab === 'connect' && renderConnect()}
    </div>
  );
}

export default App;