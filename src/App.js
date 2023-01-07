import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import {
  CorporateService1,
  CorporateService2,
  CorporateService3,
  CorporateService4,
  CorporateService5,
  CorporateService6,
  CorporateService7,
  CorporateService8,
} from "./routers";
import {
  CorporateServiceAr1,
  CorporateServiceAr2,
  CorporateServiceAr3,
  CorporateServiceAr4,
  CorporateServiceAr5,
  CorporateServiceAr6,
  CorporateServiceAr7,
  CorporateServiceAr8,
} from "./routers";
import {
  InstituteService1,
  InstituteService2,
  InstituteService3,
  InstituteService4,
  InstituteService5,
  InstituteService6,
  InstituteService7,
  InstituteService8,
} from "./routers";
import {
  InstituteServiceAr1,
  InstituteServiceAr2,
  InstituteServiceAr3,
  InstituteServiceAr4,
  InstituteServiceAr5,
  InstituteServiceAr6,
  InstituteServiceAr7,
  InstituteServiceAr8,
} from "./routers";
import {
  ScientificService1,
  ScientificService2,
  ScientificService3,
  ScientificService4,
  ScientificService5,
  ScientificService6,
  ScientificService7,
  ScientificService8,
} from "./routers";
import {
  ScientificServiceAr1,
  ScientificServiceAr2,
  ScientificServiceAr3,
  ScientificServiceAr4,
  ScientificServiceAr5,
  ScientificServiceAr6,
  ScientificServiceAr7,
  ScientificServiceAr8,
} from "./routers";
import {
  HandicraftService1,
  HandicraftService2,
  HandicraftService3,
  HandicraftService4,
  HandicraftService5,
  HandicraftService6,
  HandicraftService7,
  HandicraftService8,
} from "./routers";
import {
  HandicraftServiceAr1,
  HandicraftServiceAr2,
  HandicraftServiceAr3,
  HandicraftServiceAr4,
  HandicraftServiceAr5,
  HandicraftServiceAr6,
  HandicraftServiceAr7,
  HandicraftServiceAr8,
} from "./routers";
import {
  CareerService1,
  CareerService2,
  CareerService3,
  CareerService4,
  CareerService5,
  CareerService6,
} from "./routers";
import {
  CareerServiceAr1,
  CareerServiceAr2,
  CareerServiceAr3,
  CareerServiceAr4,
  CareerServiceAr5,
  CareerServiceAr6,
} from "./routers";
import {
  PersonalService1,
  PersonalService2,
  PersonalService3,
  PersonalService4,
  PersonalService5,
  PersonalService6,
  PersonalService7,
} from "./routers";
import {
  PersonalServiceAr1,
  PersonalServiceAr2,
  PersonalServiceAr3,
  PersonalServiceAr4,
  PersonalServiceAr5,
  PersonalServiceAr6,
  PersonalServiceAr7,
} from "./routers";

const Home = lazy(() => import("./Pages/Home/index"));
const Login = lazy(() => import("./Pages/Login/index.js"));
const Register = lazy(() => import("./Pages/Register/index.js"));
const RegisterIndividuals = lazy(() =>
  import("./Pages/RegisterIndividuals/index.js")
);
const ForgetPass = lazy(() => import("./Pages/ForgetPass/index.js"));
const ForgetPassAr = lazy(() => import("./Pages/ForgetPass/index-ar.js"));
const ResetPass = lazy(() => import("./Pages/ResetPass/index.js"));
const ResetPassAr = lazy(() => import("./Pages/ResetPass/index-ar.js"));
const RegisterCorporate = lazy(() =>
  import("./Pages/RegisterAsCorporate/index.js")
);
const RegisterInstitute = lazy(() =>
  import("./Pages/RegisterInstituse/index.js")
);
const RegisterScientific = lazy(() =>
  import("./Pages/RegisterScientific/index.js")
);
const RegisterHandicraft = lazy(() =>
  import("./Pages/RegisterHandicraft/index.js")
);
const Corporate = lazy(() => import("./Pages/Corporate/index.js"));
const CorporateAr = lazy(() => import("./Pages/Corporate/index-Ar.js"));
const Institute = lazy(() => import("./Pages/Institute/index.js"));
const InstituteAr = lazy(() => import("./Pages/Institute/index-Ar.js"));
const Scientific = lazy(() => import("./Pages/Scientific/index.js"));
const ScientificAr = lazy(() => import("./Pages/Scientific/index-Ar.js"));
const Handicraft = lazy(() => import("./Pages/Handicraft/index.js"));
const HandicraftAr = lazy(() => import("./Pages/Handicraft/index-Ar.js"));
const Individuals = lazy(() => import("./Pages/Individuals/index.js"));
const IndividualsAr = lazy(() => import("./Pages/Individuals/index-Ar.js"));
const Whyus = lazy(() => import("./Pages/WhyUs/index.js"));
const WhyusAr = lazy(() => import("./Pages/WhyUs/index-ar.js"));
const Goals = lazy(() => import("./Pages/Goals/index.js"));
const GoalsAr = lazy(() => import("./Pages/Goals/index-ar.js"));
const ContactUs = lazy(() => import("./Pages/ContactUs/index.js"));
const ContactUsAr = lazy(() => import("./Pages/ContactUs/index-ar.js"));
const News = lazy(() => import("./Pages/News/index.js"));
const NewsAr = lazy(() => import("./Pages/News/index-ar.js"));
const Ads = lazy(() => import("./Pages/Ads/index.js"));
const AdsAr = lazy(() => import("./Pages/Ads/index-ar.js"));
const Visitor = lazy(() => import("./Components/Visiter/Visiter.js"));
const VisitorAr = lazy(() => import("./Components/Visiter/Visitor-ar.js"));
const Notifications = lazy(() => import("./Pages/Notifications/index.js"));
const NotificationsAr = lazy(() => import("./Pages/Notifications/index-ar.js"));
const CareerServices = lazy(() => import("./Pages/CareerServices/index.js"));
const CareerServicesAr = lazy(() =>
  import("./Pages/CareerServices/index-ar.js")
);
const PersonalServices = lazy(() =>
  import("./Pages/PersonalServices/index.js")
);
const PersonalServicesAr = lazy(() =>
  import("./Pages/PersonalServices/index-ar.js")
);
const ProfileIndividual = lazy(() => import("./Pages/ProfileIndividual/index.js"));
const ProfileIndividualAr = lazy(() => import("./Pages/ProfileIndividual/index-ar.js"));
const ProfileHandicraft = lazy(() => import("./Pages/ProfileHandicraft/index.js"));
const ProfileHandicraftAr = lazy(() => import("./Pages/ProfileHandicraft/index-ar.js"));
const ProfileScientific = lazy(() => import("./Pages/ProfileScientific/index.js"));
const ProfileScientificAr = lazy(() => import("./Pages/ProfileScientific/index-ar.js"));
const ProfileInstitute = lazy(() => import("./Pages/ProfileInstitue/index.js"));
const ProfileInstituteAr = lazy(() => import("./Pages/ProfileInstitue/index-ar.js"));
const ProfileCorporate = lazy(() => import("./Pages/ProfileCorporate/index.js"));
const ProfileCorporateAr = lazy(() => import("./Pages/ProfileCorporate/index-ar.js"));
const ChangePassword = lazy(() =>
  import("./Components/ChangePassword/ChangePassword.js")
);
const ChangePasswordAr = lazy(() =>
  import("./Components/ChangePassword/ChangePasswordAr.js")
);
const HomeAr = lazy(() => import("./Pages/Home/index-Ar.js"));
const LoginAr = lazy(() => import("./Pages/Login/index-Ar.js"));
const RegisterAr = lazy(() => import("./Pages/Register/index-Ar.js"));
const RegisterIndividualsAr = lazy(() =>
  import("./Pages/RegisterIndividuals/index-Ar.js")
);
const RegisterHandicraftAr = lazy(() =>
  import("./Pages/RegisterHandicraft/index-Ar.js")
);
const RegisterScientificAr = lazy(() =>
  import("./Pages/RegisterScientific/index-ar.js")
);
const RegisterInstituteAr = lazy(() =>
  import("./Pages/RegisterInstituse/index-ar.js")
);
const RegisterCorporateAr = lazy(() =>
  import("./Pages/RegisterAsCorporate/index-ar.js")
);
const AddPartners = lazy(() => import("./Pages/AddPartners/index.js"));
const AddPartnersAr = lazy(() => import("./Pages/AddPartners/index-ar.js"));
const AdminLogin = lazy(() => import("./Dashboard/AdminLogin/index.js"));
const Services = lazy(() => import("./Dashboard/Services/index.js"));
const AdsManagment = lazy(() =>
  import("./Dashboard/Ads/AdsManagment/index.js")
);
const UsersManagment = lazy(() => import("./Dashboard/Users/Managment/index.js"));
const CorporateManagment = lazy(() => import("./Dashboard/Users/Corporate/index.js"));
const InstitutesManagment = lazy(() => import("./Dashboard/Users/Institutes/index.js"));
const ProfessionalScintificManagment = lazy(() => import("./Dashboard/Users/ProfessionalScintific/index.js"));
const HandicraftManagment = lazy(() => import("./Dashboard/Users/Handicraft/index.js"));
const IndividualsManagment = lazy(() => import("./Dashboard/Users/Individuals/index.js"));

const AddAds = lazy(() => import("./Dashboard/Ads/AddAds/index.js"));
const DeleteAds = lazy(() => import("./Dashboard/Ads/DeleteAds/index.js"));
const NewsManagment = lazy(() => import("./Dashboard/News/NewsManagment/index.js"));
const AddNews = lazy(() => import("./Dashboard/News/AddNews/index.js"));
const DeleteNews = lazy(() => import("./Dashboard/News/DeleteNews/index.js"));
const NotificationsManagment = lazy(() => import("./Dashboard/Notifications/NotificationsManagment/index.js"));
const AddNotification = lazy(() => import("./Dashboard/Notifications/AddNotifications/index.js"));
const DetailsAds = lazy(() => import("./Pages/DetailsAds/index.js"));
const PageNotFound = lazy(() => import("./Pages/404/index"));
const UpdatePartners = lazy(() => import('./Pages/UpdatePartners/index.js'));
const UpdatePartnersAr = lazy(() => import('./Pages/UpdatePartners/index-ar.js'));
const AddNewPartners = lazy(() => import('./Pages/AddNewPartners/index.js'));
const AddNewPartnersAr = lazy(() => import('./Pages/AddNewPartners/index-ar.js'));

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard/admin/login",
      element: <AdminLogin />,
    },
    {
      path: "/dashboard/admin/services",
      element: <Services />,
    },
    {
      path: "/dashboard/admin/users-managment",
      element: <UsersManagment />,
    },
    {
      path: "/dashboard/admin/corporate-managment",
      element: <CorporateManagment />,
    },
    {
      path: "/dashboard/admin/institutes-managment",
      element: <InstitutesManagment />,
    },
    {
      path: "/dashboard/admin/professional-Scintific-managment",
      element: <ProfessionalScintificManagment />,
    },
    {
      path: "/dashboard/admin/handicraft-managment",
      element: <HandicraftManagment />,
    },
    {
      path: "/dashboard/admin/individuals-managment",
      element: <IndividualsManagment />,
    },
    {
      path: "/dashboard/admin/ads-managment",
      element: <AdsManagment />,
    },
    {
      path: "/dashboard/admin/add-ads",
      element: <AddAds />,
    },
    {
      path: "/dashboard/admin/delete-ads",
      element: <DeleteAds />,
    },
    {
      path: "/dashboard/admin/news-managment",
      element: <NewsManagment />,
    },
    {
      path: "/dashboard/admin/add-news",
      element: <AddNews />,
    },
    {
      path: "/dashboard/admin/delete-news",
      element: <DeleteNews />,
    }, {
      path: "/dashboard/admin/notifications-managment",
      element: <NotificationsManagment />,
    }, {
      path: "/dashboard/admin/add-notification",
      element: <AddNotification />,
    },
    {
      path: "/ar",
      element: <HomeAr />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/login-ar",
      element: <LoginAr />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/register-ar",
      element: <RegisterAr />,
    },
    {
      path: "/forget-password",
      element: <ForgetPass />,
    },
    {
      path: "/forget-password-ar",
      element: <ForgetPassAr />,
    },
    {
      path: "/reset-password",
      element: <ResetPass />,
    },
    {
      path: "/reset-password-ar",
      element: <ResetPassAr />,
    },
    {
      path: "/add-partners",
      element: <AddPartners />,
    },
    {
      path: "/add-partners-ar",
      element: <AddPartnersAr />,
    }, {
      path: "/update-partners",
      element: <UpdatePartners />,
    }, {
      path: "/update-partners-ar",
      element: <UpdatePartnersAr />,
    },
    {
      path: "/register-corporate",
      element: <RegisterCorporate />,
    },
    {
      path: "/register-corporate-ar",
      element: <RegisterCorporateAr />,
    },
    {
      path: "/register-institute",
      element: <RegisterInstitute />,
    },
    {
      path: "/register-institute-ar",
      element: <RegisterInstituteAr />,
    },
    {
      path: "/register-scientific",
      element: <RegisterScientific />,
    },
    {
      path: "/register-scientific-ar",
      element: <RegisterScientificAr />,
    },
    {
      path: "/register-handicraft",
      element: <RegisterHandicraft />,
    },
    {
      path: "/register-handicraft-ar",
      element: <RegisterHandicraftAr />,
    },
    {
      path: "/register-individuals",
      element: <RegisterIndividuals />,
    },
    {
      path: "/register-individuals-ar",
      element: <RegisterIndividualsAr />,
    },
    {
      path: "/why-us",
      element: <Whyus />,
    },
    {
      path: "/whyus-ar",
      element: <WhyusAr />,
    },
    {
      path: "/goals",
      element: <Goals />,
    },
    {
      path: "/goals-ar",
      element: <GoalsAr />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/contactus-ar",
      element: <ContactUsAr />,
    },
    {
      path: "/individuals",
      element: <Individuals />,
    },
    {
      path: "/individuals-ar",
      element: <IndividualsAr />,
    },
    {
      path: "/career-services",
      element: <CareerServices />,
    },
    {
      path: "/career-services-ar",
      element: <CareerServicesAr />,
    },
    {
      path: "/personal-services",
      element: <PersonalServices />,
    },
    {
      path: "/personal-services-ar",
      element: <PersonalServicesAr />,
    },
    {
      path: "/handicraft",
      element: <Handicraft />,
    },
    {
      path: "/handicraft-ar",
      element: <HandicraftAr />,
    },
    {
      path: "/scientific",
      element: <Scientific />,
    },
    {
      path: "/scientific-ar",
      element: <ScientificAr />,
    },
    {
      path: "/institute",
      element: <Institute />,
    },
    {
      path: "/institute-ar",
      element: <InstituteAr />,
    },
    {
      path: "/corporate",
      element: <Corporate />,
    },
    {
      path: "/corporate-ar",
      element: <CorporateAr />,
    },
    {
      path: "/news",
      element: <News />,
    }, {
      path: "/news-ar",
      element: <NewsAr />,
    },
    {
      path: "/ads",
      element: <Ads />,
    }, {
      path: "/ads-ar",
      element: <AdsAr />,
    }, {
      path: "/detials-ads",
      element: <DetailsAds />,
    },
    {
      path: "/profile-individual",
      element: <ProfileIndividual />,
    }, {
      path: "/profile-individual-ar",
      element: <ProfileIndividualAr />,
    }, {
      path: "/notifications",
      element: <Notifications />,
    }, {
      path: "/notifications-ar",
      element: <NotificationsAr />,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    }, {
      path: "/change-password-ar",
      element: <ChangePasswordAr />,
    }, {
      path: "/profile-handicraft",
      element: <ProfileHandicraft />,
    }, {
      path: "/profile-handicraft-ar",
      element: <ProfileHandicraftAr />,
    }, {
      path: "/profile-scientific",
      element: <ProfileScientific />,
    }, {
      path: "/profile-scientific-ar",
      element: <ProfileScientificAr />,
    }, {
      path: "/profile-institute",
      element: <ProfileInstitute />,
    }, {
      path: "/profile-institute-ar",
      element: <ProfileInstituteAr />,
    }, {
      path: "/profile-corporate",
      element: <ProfileCorporate />,
    }, {
      path: "/profile-corporate-ar",
      element: <ProfileCorporateAr />,
    }, {
      path: "/visitor",
      element: <Visitor />,
    }, {
      path: "/visitor-ar",
      element: <VisitorAr />,
    }, {
      path: "/corporate/service1",
      element: <CorporateService1 />,
    },
    {
      path: "/corporate/service1-ar",
      element: <CorporateServiceAr1 />,
    },
    {
      path: "/corporate/service2",
      element: <CorporateService2 />,
    },
    {
      path: "/corporate/service2-ar",
      element: <CorporateServiceAr2 />,
    },
    {
      path: "/corporate/service3",
      element: <CorporateService3 />,
    },
    {
      path: "/corporate/service3-ar",
      element: <CorporateServiceAr3 />,
    },
    {
      path: "/corporate/service4",
      element: <CorporateService4 />,
    },
    {
      path: "/corporate/service4-ar",
      element: <CorporateServiceAr4 />,
    },
    {
      path: "/corporate/service5",
      element: <CorporateService5 />,
    },
    {
      path: "/corporate/service5-ar",
      element: <CorporateServiceAr5 />,
    },
    {
      path: "/corporate/service6",
      element: <CorporateService6 />,
    },
    {
      path: "/corporate/service6-ar",
      element: <CorporateServiceAr6 />,
    },
    {
      path: "/corporate/service7",
      element: <CorporateService7 />,
    },
    {
      path: "/corporate/service7-ar",
      element: <CorporateServiceAr7 />,
    },
    {
      path: "/corporate/service8",
      element: <CorporateService8 />,
    },
    {
      path: "/corporate/service8-ar",
      element: <CorporateServiceAr8 />,
    },
    {
      path: "/handicraft/service1",
      element: <HandicraftService1 />,
    },
    {
      path: "/handicraft/service2",
      element: <HandicraftService2 />,
    },
    {
      path: "/handicraft/service3",
      element: <HandicraftService3 />,
    },
    {
      path: "/handicraft/service4",
      element: <HandicraftService4 />,
    },
    {
      path: "/handicraft/service5",
      element: <HandicraftService5 />,
    },
    {
      path: "/handicraft/service6",
      element: <HandicraftService6 />,
    },
    {
      path: "/handicraft/service7",
      element: <HandicraftService7 />,
    },
    {
      path: "/handicraft/service8",
      element: <HandicraftService8 />,
    },
    {
      path: "/handicraft/service1-ar",
      element: <HandicraftServiceAr1 />,
    },
    {
      path: "/handicraft/service2-ar",
      element: <HandicraftServiceAr2 />,
    },
    {
      path: "/handicraft/service3-ar",
      element: <HandicraftServiceAr3 />,
    },
    {
      path: "/handicraft/service4-ar",
      element: <HandicraftServiceAr4 />,
    },
    {
      path: "/handicraft/service5-ar",
      element: <HandicraftServiceAr5 />,
    },
    {
      path: "/handicraft/service6-ar",
      element: <HandicraftServiceAr6 />,
    },
    {
      path: "/handicraft/service7-ar",
      element: <HandicraftServiceAr7 />,
    },
    {
      path: "/handicraft/service8-ar",
      element: <HandicraftServiceAr8 />,
    },
    {
      path: "/institute/service1",
      element: <InstituteService1 />,
    },
    {
      path: "/institute/service1-ar",
      element: <InstituteServiceAr1 />,
    },
    {
      path: "/institute/service2",
      element: <InstituteService2 />,
    },
    {
      path: "/institute/service2-ar",
      element: <InstituteServiceAr2 />,
    },
    {
      path: "/institute/service3",
      element: <InstituteService3 />,
    },
    {
      path: "/institute/service3-ar",
      element: <InstituteServiceAr3 />,
    },
    {
      path: "/institute/service4",
      element: <InstituteService4 />,
    },
    {
      path: "/institute/service4-ar",
      element: <InstituteServiceAr4 />,
    },
    {
      path: "/institute/service5-ar",
      element: <InstituteServiceAr5 />,
    },
    {
      path: "/institute/service5",
      element: <InstituteService5 />,
    },
    {
      path: "/institute/service6",
      element: <InstituteService6 />,
    },
    {
      path: "/institute/service6-ar",
      element: <InstituteServiceAr6 />,
    },
    {
      path: "/institute/service7",
      element: <InstituteService7 />,
    },
    {
      path: "/institute/service7-ar",
      element: <InstituteServiceAr7 />,
    },
    {
      path: "/institute/service8",
      element: <InstituteService8 />,
    },
    {
      path: "/institute/service8-ar",
      element: <InstituteServiceAr8 />,
    },
    {
      path: "/scientific/service1",
      element: <ScientificService1 />,
    },
    {
      path: "/scientific/service2",
      element: <ScientificService2 />,
    },
    {
      path: "/scientific/service3",
      element: <ScientificService3 />,
    },
    {
      path: "/scientific/service4",
      element: <ScientificService4 />,
    },
    {
      path: "/scientific/service5",
      element: <ScientificService5 />,
    },
    {
      path: "/scientific/service6",
      element: <ScientificService6 />,
    },
    {
      path: "/scientific/service7",
      element: <ScientificService7 />,
    },
    {
      path: "/scientific/service8",
      element: <ScientificService8 />,
    },
    {
      path: "/scientific/service1-ar",
      element: <ScientificServiceAr1 />,
    },
    {
      path: "/scientific/service2-ar",
      element: <ScientificServiceAr2 />,
    }, {
      path: "/scientific/service3-ar",
      element: <ScientificServiceAr3 />,
    }, {
      path: "/scientific/service4-ar",
      element: <ScientificServiceAr4 />,
    }, {
      path: "/scientific/service5-ar",
      element: <ScientificServiceAr5 />,
    }, {
      path: "/scientific/service6-ar",
      element: <ScientificServiceAr6 />,
    }, {
      path: "/scientific/service7-ar",
      element: <ScientificServiceAr7 />,
    }, {
      path: "/scientific/service8-ar",
      element: <ScientificServiceAr8 />,
    }, {
      path: "/career-services/service1",
      element: <CareerService1 />,
    }, {
      path: "/career-services/service2",
      element: <CareerService2 />,
    }, {
      path: "/career-services/service3",
      element: <CareerService3 />,
    }, {
      path: "/career-services/service4",
      element: <CareerService4 />,
    }, {
      path: "/career-services/service5",
      element: <CareerService5 />,
    },
    {
      path: "/career-services/service6",
      element: <CareerService6 />,
    }, {
      path: "/career-service/service1-ar",
      element: <CareerServiceAr1 />,
    }, {
      path: "/career-service/service2-ar",
      element: <CareerServiceAr2 />,
    }, {
      path: "/career-service/service3-ar",
      element: <CareerServiceAr3 />,
    }, {
      path: "/career-service/service4-ar",
      element: <CareerServiceAr4 />,
    }, {
      path: "/career-service/service5-ar",
      element: <CareerServiceAr5 />,
    }, {
      path: "/career-service/service6-ar",
      element: <CareerServiceAr6 />,
    }, {
      path: "/personal-services/service1",
      element: <PersonalService1 />,
    }, {
      path: "/personal-services/service2",
      element: <PersonalService2 />,
    }, {
      path: "/personal-services/service3",
      element: <PersonalService3 />,
    }, {
      path: "/personal-services/service4",
      element: <PersonalService4 />,
    }, {
      path: "/personal-services/service5",
      element: <PersonalService5 />,
    }, {
      path: "/personal-services/service6",
      element: <PersonalService6 />,
    }, {
      path: "/personal-services/service7",
      element: <PersonalService7 />,
    }, {
      path: "/personal-service/service1-ar",
      element: <PersonalServiceAr1 />,
    }, {
      path: "/personal-service/service2-ar",
      element: <PersonalServiceAr2 />,
    }, {
      path: "/personal-service/service3-ar",
      element: <PersonalServiceAr3 />,
    }, {
      path: "/personal-service/service4-ar",
      element: <PersonalServiceAr4 />,
    }, {
      path: "/personal-service/service5-ar",
      element: <PersonalServiceAr5 />,
    }, {
      path: "/personal-service/service6-ar",
      element: <PersonalServiceAr6 />,
    }, {
      path: "/personal-service/service7-ar",
      element: <PersonalServiceAr7 />,
    },
    {
      path: "/add-new-partners",
      element: <AddNewPartners />,
    },
    {
      path: "/add-new-partners-ar",
      element: <AddNewPartnersAr/>,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];

  return (
    <div className="App">
      <Suspense>
        <Routes>
          {routes.map(({ path, element }, key) => (
            <Route exact path={path} element={element} key={key} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;