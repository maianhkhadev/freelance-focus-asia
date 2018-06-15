import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import People from '@/pages/people'
import Projects from '@/pages/projects'
import Project from '@/pages/project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/people',
      name: 'People',
      component: People
    }, {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }, {
      path: '/project/:id',
      name: 'Project',
      component: Project
    }
  ]
})
