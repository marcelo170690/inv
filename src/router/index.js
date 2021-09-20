import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/invitation/:uuid',
    name: 'invitation',
    component: () => import('../views/InvitationGuest.vue'),
    props: true,
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
