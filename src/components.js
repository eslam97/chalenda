import Vue from 'vue'
//public
import footer from "./components/public/footer"
import menu from "./components/public/menu"
import hero from "./components/homePage/hero"

Vue.component('mainFooter',footer)
Vue.component('mainMenu',menu)
Vue.component('hero',hero)


//home Page
import recommended from "./components/homePage/recommended";
import exploreResorts from "./components/homePage/exploreResorts";
import whyChooseUs from './components/homePage/whyChooseUs'
import sectionInfo from './components/homePage/sectionInfo'
import ourTeam from './components/homePage/ourTeam'

Vue.component('recommended',recommended)
Vue.component('exploreResorts',exploreResorts)
Vue.component('whyChooseUs',whyChooseUs)
Vue.component('sectionInfo',sectionInfo)
Vue.component('ourTeam',ourTeam)

//search Page
import searchResults from "./components/search/searchResults";
import filter from "./components/search/filter";
import featureProperties from "./components/search/featureProperties ";
import recentProperties from "./components/search/recentProperties";

Vue.component('searchResults',searchResults)
Vue.component('filterSearch',filter)
Vue.component('featureProperties',featureProperties)
Vue.component('recentProperties',recentProperties)


//propertyDetailsPage
import availabilty from "./components/propertyDetails/availability";
import titleOfProperty from "./components/propertyDetails/titleOfProperty";
import galerry from "./components/propertyDetails/gallery";
import description from "./components/propertyDetails/description";
import propertyDetails from "./components/propertyDetails/propertyDetails";
import propertyLocation from "./components/propertyDetails/propertyLocation";
import peopleReviews from "./components/propertyDetails/peopleReviews";
import addReview from "./components/propertyDetails/addReview";
import similarProperty from "./components/propertyDetails/similarProperty";

Vue.component('availabilty',availabilty)
Vue.component('titleOfProperty',titleOfProperty)
Vue.component('galerryOfProperty',galerry)
Vue.component('description',description)
Vue.component('propertyDetails',propertyDetails)
Vue.component('propertyLocation',propertyLocation)
Vue.component('peopleReviews',peopleReviews)
Vue.component('addReview',addReview)
Vue.component('similarProperty',similarProperty)

