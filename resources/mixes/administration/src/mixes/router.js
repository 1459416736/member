import Ban from '../pages/Ban.vue';
import BanIp from '../pages/BanIp.vue';
import BanIpCreate from '../pages/BanIpCreate.vue';
import Dashboard from '../pages/Dashboard.vue';
import Group from '../pages/Group.vue';
import GroupCombine from '../pages/GroupCombine.vue';
import GroupCreate from '../pages/GroupCreate.vue';
import GroupEdit from '../pages/GroupEdit.vue';
import GroupPermission from '../pages/GroupPermission.vue';
import Information from '../pages/Information.vue';
import InformationCreate from '../pages/InformationCreate.vue';
import InformationEdit from '../pages/InformationEdit.vue';
import InformationGroup from '../pages/InformationGroup.vue';
import InformationGroupCreate from '../pages/InformationGroupCreate.vue';
import InformationGroupEdit from '../pages/InformationGroupEdit.vue';
import Layout from '../layouts/Layout.vue';
import Notification from '../pages/Notification.vue';
import NotificationCreate from '../pages/NotificationCreate.vue';
import Tag from '../pages/Tag.vue';
import TagCreate from '../pages/TagCreate.vue';
import TagNotify from '../pages/TagNotify.vue';
import User from '../pages/User.vue';
import UserBan from '../pages/UserBan.vue';
import UserCreate from '../pages/UserCreate.vue';
import UserEdit from '../pages/UserEdit.vue';
import UserGroup from '../pages/UserGroup.vue';
import UserIntegral from '../pages/UserIntegral.vue';
import UserTag from '../pages/UserTag.vue';
import Organization from '../pages/Organization.vue';
import UserManager from '../pages/UserManager.vue';
import UserManagerCreate from '../pages/UserManagerCreate.vue';

export default function (injection) {
    injection.routers = [
        ...injection.routers,
        {
            children: [
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Dashboard,
                    path: '/',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Ban,
                    path: 'ban',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: BanIp,
                    path: 'ban/ip',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: BanIpCreate,
                    path: 'ban/ip/create',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Group,
                    path: 'group',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GroupCreate,
                    path: 'group/create',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GroupCombine,
                    path: 'group/:id/combine',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GroupEdit,
                    path: 'group/:id/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GroupPermission,
                    path: 'group/permission',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Information,
                    path: 'information',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: InformationCreate,
                    path: 'information/create',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: InformationEdit,
                    path: 'information/:id/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: InformationGroup,
                    path: 'information/group',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: InformationGroupCreate,
                    path: 'information/group/create',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: InformationGroupEdit,
                    path: 'information/group/:id/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Notification,
                    path: 'notification',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: NotificationCreate,
                    path: 'notification/create',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Tag,
                    path: 'tag',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: TagCreate,
                    path: 'tag/create',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: TagNotify,
                    path: 'tag/:tag/notify',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: User,
                    path: 'user',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: UserBan,
                    path: 'user/:id/ban',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: UserCreate,
                    path: 'user/create',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: UserEdit,
                    path: 'user/:id/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: UserGroup,
                    path: 'user/:id/group',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: UserIntegral,
                    path: 'user/:id/integral',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: UserTag,
                    path: 'user/:id/tag',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Organization,
                    path: 'organization',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: UserManager,
                    path: 'user/manager',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: UserManagerCreate,
                    path: 'user/manager/create',
                },
            ],
            component: Layout,
            path: '/member',
        },
    ];
}