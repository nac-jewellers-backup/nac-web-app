
export const routes = {
    stylori: '/stylori',
    PricingPage: '/pricingPage',
    Cart: '/cart',
    Checkout: '/Checkout',
    Register: '/register',
    UserLogin: '/login',
    UserRegister: '/registers',
    HomePageStylori: '/home',
    Account: `/account${"-" + window.location.pathname.split("-")[1]}`,
    Silver: '/stylorisilver',
    Faqs: '/faqs',
    Stories: '/stories',
    Collection: '/collections',
    ProductCare: '/productcare',
    Shipping: '/deliveryreturns',
    PrivacyPolicy: '/privacypolicy',
    TermsConditions: '/termsconditions',
    AboutUs: '/aboutus',
    ForgotPassword: '/forgotpassword',
    ResetPassword: '/resetpassword',
    ChangePassword:'/changepassword',
    paymentsuccess:'/paymentsuccess',
    paymentfail:'/paymentfail', 
    paymenthidden:'/paymenthidden',
    Education:'/education'
}

export default routes;
