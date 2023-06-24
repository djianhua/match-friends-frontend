// 自定义路由
import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import User from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User},
    { path: '/search', component: SearchPage},
    { path: '/user/list', component: SearchResultPage},
    { path: '/user/edit', component: UserEditPage},
    { path: '/user/login', component: UserLoginPage},
    { path: '/team/add', component: TeamAddPage},
    { path: '/team/update', component: TeamUpdatePage}
]

export default routes;