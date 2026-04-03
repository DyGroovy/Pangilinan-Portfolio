import { createRouter, createWebHistory } from 'vue-router'
import StudentProfile from '../components/StudentProfile.vue'
import CompanyProfile from '../components/CompanyProfile.vue'
import ExperiencePage from '../components/ExperiencePage.vue'
import SkillsPage from '../components/SkillsPage.vue'

const routes = [
  { path: '/', component: StudentProfile },
  { path: '/company', component: CompanyProfile },
  { path: '/experience', component: ExperiencePage },
  { path: '/skills', component: SkillsPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
