import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import MailIndex from './apps/mail/pages/MailIndex.js'
import KeepIndex from './apps/keep/pages/NoteIndex.js' 
import MailDetails from './apps/mail/pages/MailDetails.js' 

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutUs,
    },
    {
      path: '/mail',
      component: MailIndex,
      children: [
        {
            path: ':mailId',
            component: MailDetails
        },
      ]
    },
    {
      path: '/keep',
      component: KeepIndex,
    },
    
  ],
}

export const router = createRouter(routerOptions)
