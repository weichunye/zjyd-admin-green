import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Enter from '@/page/teacher/Enter'
import ClassDetail from '@/page/teacher/class-detail'
import ResourceTeacher from '@/page/teacher/resource-list'
import ResourcePreview from '@/page/teacher/resource-preview'

//院校
import Collegesmant from '@/page/collegesmant/collegesmant'

//平台
import Platformmant from '@/page/\platformmant/platformmant'

//学生
import ResourcePreviewStudents from '@/page/students/resource-preview'
import ResourceTeacherStudents from '@/page/students/resource-list'
import Mycourse from '@/page/students/my-course'
import ClassDetailStudents from '@/page/students/class-detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Enter',
      meta:{Login:'登录'},
      component: Login
    },
    {
      path: '/enter',
      name: 'Enter',
      meta:{title:'课程列表'},
      component: Enter
    },
    {
      path: '/Class-detail',
      name: 'ClassDetail',
      meta:{title:'课程详情'},
      component: ClassDetail
    },
    {
      path: '/resource-teacher',
      name: 'ResourceTeacher',
      meta:{title:'我的资源'},
      component: ResourceTeacher
    },
    {
      path: '/resource-preview',
      name: 'ResourcePreview',
      meta:{title:'资源预览'},
      component: ResourcePreview
    },
    {
      path: '/resource-list-s',
      name: 'ResourceTeacherStudents',
      meta:{title:'我的资源'},
      component: ResourceTeacherStudents
    },
    {
      path: '/resource-preview-s',
      name: 'ResourcePreviewStudents',
      meta:{title:'资源预览学生'},
      component: ResourcePreviewStudents
    },
    {
      path: '/my-course',
      name: 'Mycourse',
      meta:{title:'我的课程-学生'},
      component: Mycourse
    },
    {
      path: '/class-detail-s',
      name: 'ClassDetailStudents',
      meta:{title:'课程详情-学生'},
      component: ClassDetailStudents
    },
    {
      path: '/collegesmant',
      name: 'Collegesmant',
      meta:{title:'院校资源审核'},
      component: Collegesmant
    },
    {
      path: '/platformmant',
      name: 'Platformmant',
      meta:{title:'平台审核'},
      component: Platformmant
    },





  ]
})
