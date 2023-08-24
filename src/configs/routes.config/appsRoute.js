import React from "react";
import { APP_PREFIX_PATH } from "constants/route.constant";
import { ADMIN, USER, TEACHER } from "constants/roles.constant";

const appsRoute = [
  // QuestionChat route
  {
    key: "appsProject.QuestionChat",
    path: "/QuestionChat",
    component: React.lazy(() => import("views/questionChat")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.kycForm",
    path: `/savebook`,
    component: React.lazy(() => import("views/saveBook")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.analytics",
    path: `/analytics`,
    component: React.lazy(() => import("views/analytics")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.textHighlight",
    path: `/textHighlight`,
    component: React.lazy(() => import("views/textHighlight")),
    authority: [ADMIN],
  },
  // ///////////////////
  {
    key: "appsProject.dashboard",
    path: `/dashboard`,
    component: React.lazy(() => import("views/project/ProjectDashboard")),
    authority: [ADMIN, USER, TEACHER],
  },

  {
    key: "appsProject.institution",
    path: `/institutions/all`,
    component: React.lazy(() => import("views/institution")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.classess",
    path: `/classess/`,
    component: React.lazy(() => import("views/classess")),
    authority: [ADMIN],
  },
  {
    key: "appsProject.reports",
    path: `/reports/`,
    component: React.lazy(() => import("views/reports")),
    authority: [ADMIN],
  },
  {
    key: "appsProject.reports",
    path: `/zendesk-summary/`,
    component: React.lazy(() => import("views/zendesk-ticket")),
    authority: [ADMIN],
  },
  {
    key: "appsProject.reports",
    path: `/zendesk-details/`,
    component: React.lazy(() => import("views/zendesk-ticket/single")),
    authority: [ADMIN],
  },
  {
    key: "appsProject.books",
    path: `/books/`,
    component: React.lazy(() => import("views/books")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.booksprofile",
    path: `/book/:id`,
    component: React.lazy(() => import("views/books/single")),
    authority: [ADMIN, USER, TEACHER],
  },

  {
    key: "appsProject.grade",
    path: `/grade/ist`,
    component: React.lazy(() => import("views/student/")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.classSingle",
    path: `/KG-101`,
    component: React.lazy(() => import("views/classess/single")),
    authority: [USER, TEACHER],
  },

  {
    key: "appsProject.classSingle",
    path: `/KG-102`,
    component: React.lazy(() => import("views/classess/single")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.classSingle",
    path: `/Ist-202`,
    component: React.lazy(() => import("views/classess/single")),
    authority: [USER, TEACHER],
  },

  {
    key: "appsProject.addInstitute",
    path: `/add-institution`,
    component: React.lazy(() => import("views/institution/AddInstitute")),
    authority: [USER, TEACHER],
  },
  {
    key: "appsProject.addteacher",
    path: `/add-teacher`,
    component: React.lazy(() => import("views/teacher/AddTeacher")),
    authority: [USER, TEACHER],
  },
  {
    key: "appsProject.addteacher",
    path: `/add-student`,
    component: React.lazy(() => import("views/student/AddStudent")),
    authority: [USER, TEACHER],
  },
  {
    key: "appsProject.addbook",
    path: `/add-book`,
    component: React.lazy(() => import("views/books/AddBook")),
    authority: [USER, TEACHER],
  },

  {
    key: "appsProject.resetpassword",
    path: `/Home/ResetPassword`,
    component: React.lazy(() => import("views/auth/ResetPassword/index")),
    authority: [USER, TEACHER],
  },

  {
    key: "appsProject.grade",
    path: `/grade/4th`,
    component: React.lazy(() => import("views/student/")),
    authority: [USER, TEACHER],
  },
  {
    key: "appsProject.profile",
    path: `/institution/:id`,
    component: React.lazy(() => import("views/institution/single")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.library",
    path: `/libaray/`,
    component: React.lazy(() => import("views/institution/")),
    authority: [USER, TEACHER],
  },
  {
    key: "appsProject.support",
    path: `/support/`,
    component: React.lazy(() => import("views/institution/")),
    authority: [USER, TEACHER],
  },

  {
    key: "appsProject.faq",
    path: `/faq/`,
    component: React.lazy(() => import("views/institution/")),
    authority: [USER, TEACHER],
  },

  {
    key: "appsProject.teacher",
    path: `/teachers/all`,
    component: React.lazy(() => import("views/teacher")),
    authority: [USER, TEACHER],
  },
  {
    key: "appsProject.teacher",
    path: `/teacher/:id`,
    component: React.lazy(() => import("views/teacher/single")),
    authority: [ADMIN, USER, TEACHER],
  },

  {
    key: "appsProject.student",
    path: `/students/all`,
    component: React.lazy(() => import("views/student")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.student",
    path: `/student/:id`,
    component: React.lazy(() => import("views/student/single")),
    authority: [ADMIN, USER, TEACHER],
  },

  {
    key: "appsProject.profile",
    path: `${APP_PREFIX_PATH}/profile`,
    component: React.lazy(() => import("views/profile")),
    authority: [ADMIN, USER, TEACHER],
  },
  {
    key: "appsProject.student",
    path: `${APP_PREFIX_PATH}/student`,
    component: React.lazy(() => import("views/student")),
    authority: [ADMIN, TEACHER],
  },

  {
    key: "appsAccount.settings",
    path: `${APP_PREFIX_PATH}/account/settings/:tab`,
    component: React.lazy(() => import("views/account/Settings")),
    authority: [ADMIN, USER, TEACHER],
    meta: {
      header: "Settings",
      headerContainer: true,
    },
  },
];

export default appsRoute;
