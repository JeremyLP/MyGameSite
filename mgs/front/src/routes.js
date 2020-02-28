import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Gameplay from './components/Gameplay.vue';
import Gallery from './components/Gallery.vue';
import About from './components/About.vue';
import RoadMap from './components/CBis.vue/RoadMap.vue';
import Admin from './components/admin/Admin.vue';




Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
        },
        {
            path: '/gameplay',
            component: Gameplay,
            name: 'Gameplay',
        },
        {
          path: '/gallery',
          component: Gallery,
          name: 'Gallery',  
        },
        {
            path: '/about',
            component: About,
            name: 'About',
            children: [
                {
                path: '/roadmap',
                component: RoadMap,
                name: 'RoadMap',
            }
        ]
        },
        {
            path: '/admin',
            component: Admin,
            name: 'Admin',
        },
        {
            path: '*',
            redirect: '/',
            name: 'Home',
        }
    ]
})