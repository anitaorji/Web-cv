// Mock API data
const profileData = {
  name: 'Anita Orji',
//   photo: 'https://i.pravatar.cc/150?img=32',
  summary: "I’m a developer passionate about turning ideas into functional and elegant software. Constantly learning, improving, and exploring new technologies to build impactful solutions."
}

const experienceData = [
  { id: 1, role: 'Frontend Intern', company: 'Tech Corp', start: 'Jan 2024', end: 'Jun 2024', description: 'Built UI components using Vue 3 and Tailwind CSS.' },
  { id: 2, role: 'Junior Developer', company: 'Web Solutions', start: 'Jul 2024', end: 'Dec 2024', description: 'Maintained internal tools and dashboards.' }
]

const projectsData = [
  { id: 1, title: 'Portfolio Website', description: 'Personal CV website with dark mode.', tech: 'Vue 3, Tailwind, Axios, TypeScript', link: '#' },
  { id: 2, title: 'Todo App', description: 'Simple todo app with API persistence.', tech: 'HTML, CSS3, React.js', link: '#' },
  { id: 3, title: 'Staff Directory System API', description: 'A RESTful Web API built with C# and ASP.NET Core that manages staff records with full CRUD functionality, following Clean Architecture principles for scalability and maintainability.', tech: 'C#, ASP.Net, Axios', link: '#' }
]

// Simulate async API calls
export const getProfile = async () => new Promise(resolve => setTimeout(() => resolve(profileData), 500))
// export const getExperience = async () => new Promise(resolve => setTimeout(() => resolve(experienceData), 500))
export const getProjects = async () => new Promise(resolve => setTimeout(() => resolve(projectsData), 500))



// import axios from 'axios'

// const API_BASE = 'https://your-api.com/api'

// export const getProfile = async () => {
//   const response = await axios.get(`${API_BASE}/profile`)
//   return response.data
// }

// export const getProjects = async () => {
//   const response = await axios.get(`${API_BASE}/projects`)
//   return response.data
// }
// export const getSkills = async () => {
//   const response = await axios.get(`${API_BASE}/skills`)
//   return response.data
// }