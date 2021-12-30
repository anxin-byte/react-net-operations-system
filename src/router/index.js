import SpectrumSetting from "../views/modulation-control/SpectrumSetting";
import VideoSetting from "../views/modulation-control/VideoSetting";
import VoiceSetting from "../views/modulation-control/VoiceSetting";
import EquipmentStatus from "../views/operations-manage/EquipmentStatus";
import PersonnelScheduling from "../views/operations-manage/PersonnelScheduling";
import UserManage from "../views/operations-manage/UserManage";
import StationInfo from "../views/station-manage/StationInfo";
import LoginRegister from "../views/LoginRegister";
import Layout from "../views/Layout";
export const operations_manage= [
    {
        path: '/layout/operations_manage/EquipmentStatus',
        name: "EquipmentStatus",
        meta: {
            title: '设备状态',
        },
        component: EquipmentStatus
    },
    {
        path: '/layout/operations_manage/PersonnelScheduling',
        name: "PersonnelScheduling",
        meta: {
            title: '人员排班',
            // icon: 'mdi-calendar-multiple',
        },
        component: () => import('../views/operations-manage/PersonnelScheduling'),
    },
    {
        path: '/layout/operations_manage/UserManage',
        name: "UserManage",
        meta: {
            title: '用户管理',
            // icon: 'mdi-account-circle',
        },
        component: UserManage
    },
];
export const modulation_control = [
    {
        path: '/layout/modulation_control/SpectrumSetting',
        // name: "SpectrumSetting",
        meta: {
            title: '频谱配置',
            // icon: 'mdi-chart-timeline-variant-shimmer',
        },
        component:SpectrumSetting
    },
    {
        path: '/layout/modulation_control/VideoSetting',
        // name: "VideoSetting",
        meta: {
            title: '视频配置',
            // icon: 'mdi-youtube',
        },
        component:VideoSetting
    },
    {
        path: '/layout/modulation_control/VoiceSetting',
        // name: "VoiceSetting",
        meta: {
            title: '声音配置',
            // icon: 'mdi-volume-vibrate',
        },
        component: VoiceSetting
    },
];
export const station_manage= [
    {
        path: '/layout/station_manage/StationSituational',
        // name: "StationSituational",
        meta: {
            title: '站点态势',
            // icon: 'mdi-desktop-mac-dashboard',
        },
        component:StationInfo
    },
    {
        path: '/layout/station_manage/StationCenter',
        meta: {
            title: '中心站',
            icon: 'mdi-desktop-classic',
        },
        // component: () => import('../views/station-manage/StationInfo.vue'),
    },
    // {
    //     path: '/station_manage/StationFar',
    //     meta: {
    //         title: '远端站',
    //         icon: 'mdi-desktop-classic',
    //     },
    //     component: () => import('../views/station-manage/StationInfo.vue'),
    // },
    // {
    //     path: '/station_manage/StationServer',
    //     meta: {
    //         title: '服务器',
    //         icon: 'mdi-desktop-classic',
    //     },
    //     component: () => import('../views/station-manage/StationInfo.vue'),
    // },
    // {
    //     path: '/station_manage/StationSwitch',
    //     meta: {
    //         title: '交换器',
    //         icon: 'mdi-desktop-classic',
    //     },
    //     component: () => import('../views/station-manage/StationInfo.vue'),
    // },
];
export const layoutChildren = [
    {
        path: '/operations_manage',
        // name: "Layout",
        meta: {
            redirect: '/operations_manage/EquipmentStatus',
            title: '运维管理',
            // on: operationOn,
            // off: operationOff,
        },
        children: operations_manage,
    },
    {
        path: '/modulation_control',
        // name: "Layout",
        meta: {
            redirect: '/modulation_control/SpectrumSetting',
            title: '调制控制',
            // on: modulationOn,
            // off: modulationOff,
        },
        children: modulation_control,
    },
    {
        path: '/station_manage',
        // name: "station_manage",
        meta: {
            redirect: '/station_manage/StationSituational',
            title: '站点管理',
            // on: stationOn,
            // off: stationOff,
        },
        children: station_manage,
    },
];
const components = []
const files = require.context("../views",true,/\.jsx|\.js$/) // (目录，是否查找子集，指定文件)
files.keys().map(key => {
    // 过滤文件
    if(key.includes('./Layout')  || key.includes("./LoginRegister")) return false
    // 生产需要字段
    const route = {
        path:`/layout${key.split('.')[1]}`,
        component:files(key).default
    }
    return  components.push(route)
})
export {
    components
}
// export const routes = [
//     {
//         path: '/',
//         name: 'Login',
//         component: LoginRegister,
//     },
//     // {
//     //     path: '/',
//     //     redirect: '/login',
//     // },
//     {
//         path: '/layout',
//         name: 'Layout',
//         component:Layout,
//         children: layoutChildren,
//     },
// ];