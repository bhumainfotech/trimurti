import React from "react";
// dashboard
import Default from "../component/general/dashboard/default";
import Crypto from "../component/general/dashboard/crypto";
import Ecommerce from "../component/general/dashboard/ecommerce";

// widgets
import Generalwidgets from "../component/general/widgets/generalwidgets";
import Chartswidgets from "../component/general/widgets/chartswidgets";

// Ui Element
import Typography from "../component/ui-element/typography";
import Button from "../component/ui-element/button";
import Avatars from "../component/ui-element/avatars";
import Helperclasses from "../component/ui-element/helperclasses";
import Grid from "../component/ui-element/grid";
import Tagandpills from "../component/ui-element/tagandpills";
import Progressbars from "../component/ui-element/progressbars";
import Modal from "../component/ui-element/modal";
import Alert from "../component/ui-element/alert/alert";
import Popover from "../component/ui-element/popover/popover";
import Tooltip from "../component/ui-element/tooltip/tooltip";
import Spinner from "../component/ui-element/spinner";
import Dropdown from "../component/ui-element/dropdown/dropdown";
import Tabbootstrap from "../component/ui-element/tabbootstrap";
import Tabline from "../component/ui-element/tabline";
import Navs from "../component/ui-element/navs/navs";
import AccordionsComponent from "../component/ui-element/accordion/accordion";

import Lists from "../component/ui-element/lists";
import Scrollable from "../component/ui-element/scrollable";
import Boostrapnotify from "../component/ui-element/boostrapnotify";
import Ratings from "../component/ui-element/ratings";
import Draganddrop from "../component/ui-element/draganddrop";
import Dropzone from "../component/ui-element/dropzone";

import Tour from "../component/ui-element/tour";
import Sweetalert2 from "../component/ui-element/sweetalert2";
import Carousel from "../component/ui-element/carousel";

import Ribbons from "../component/ui-element/ribbons";
import Pagination from "../component/ui-element/pagination";
import Steps from "../component/ui-element/steps/steps";
import Breadcrumb from "../component/ui-element/breadcrumb";
import Rangeslider from "../component/ui-element/rangeslider";
import Imagecropper from "../component/ui-element/imageCropper/index";
import Stickynotes from "../component/ui-element/stickynotes";
import UploadImage from "../component/ui-element/uploadImage";

// Icons
import Flagicons from "../component/ui-element/icons/flagicons";
import Fontawesomeicons from "../component/ui-element/icons/fontawesomeicons";
import Iconicons from "../component/ui-element/icons/iconicons";
import Feathericons from "../component/ui-element/icons/feathericons";
import Themifyicons from "../component/ui-element/icons/themifyicons";
import Weathericons from "../component/ui-element/icons/weathericons";
import Simplelineicon from "../component/ui-element/icons/simplelineicon";
import Materialdesignicon from "../component/ui-element/icons/materialdesignicon";
import Typicon from "../component/ui-element/icons/typicon";
import Pe7icons from "../component/ui-element/icons/pe7icons";
import Ionicicon from "../component/ui-element/icons/ionic-icon";

// Charts
import Apexcharts from "../component/charts/apexcharts/apexcharts";
import Googlecharts from "../component/charts/googlecharts/googlecharts";
import Chartjs from "../component/charts/chartjscharts/chartjs";

// Forms control
import Formvalidation from "../component/forms/form-control/formvalidation";
import BaseInput from "../component/forms/form-control/baseInput";
import Checkboxandradio from "../component/forms/form-control/checkboxandradio";
import InputGroup from "../component/forms/form-control/inputGroup";
import MegaOption from "../component/forms/form-control/megaOption";

// Form layout
import Formdefault from "../component/forms/form-layout/formdefault";
import Formwizard1 from "../component/forms/form-layout/formwizad1/formwizard1";

// Form Widget
import Datepicker from "../component/forms/form-widget/datepicker";
import Typeahead from "../component/forms/form-widget/typeaheadComponent/typeahead";

// Tables
import Basictable from "../component/tables/basictable";
import Sizingtable from "../component/tables/sizingtable";
import Bordertable from "../component/tables/bordertable";
import Stylingtable from "../component/tables/stylingtable";
import DataTableComponent from "../component/tables/dataTableComponent";

// Cards
import BasicCards from "../component/cards/basicCards";
import ThemeCards from "../component/cards/themeCards";
import TabCard from "../component/cards/tabCard";

// Ecommerce
import Product from "../component/application/ecommerce/product";
import Productpage from "../component/application/ecommerce/productpage";
import Productlist from "../component/application/ecommerce/productlist";
import Productdetails from "../component/application/ecommerce/productdetails";
import Invoice from "../component/application/ecommerce/invoice";
import Pricing from "../component/application/ecommerce/pricing";
import Cart from "../component/application/ecommerce/cart";
import Wishlist from "../component/application/ecommerce/wishlist";
import Checkout from "../component/application/ecommerce/checkout";
import Orderhistory from "../component/application/ecommerce/orderhistory";

// Blog
import Blogsingle from "../component/application/blog/blogsingle";
import Blogdetail from "../component/application/blog/blogdetail";
import Blogpost from "../component/application/blog/blogpost";

// Timeline
import Timeline1 from "../component/application/timelines/timeline";
import Timeline2 from "../component/application/timelines/timeline2";

// Learning
import Learninglist from "../component/application/learning/learning-list";
import Learningdeatil from "../component/application/learning/learning-deatil";

// Gallery
import ImageGallery from "../component/application/gallery/imageGallery";
import ImageWithDesc from "../component/application/gallery/imageWithDesc";
import MesonryGallery from "../component/application/gallery/mesonryGallery";
import MesonryDesc from "../component/application/gallery/mesonryDesc";
import ImageHover from "../component/application/gallery/imageHover";

// job search
import Cardview from "../component/application/jobsearch/cardview";
import Joblist from "../component/application/jobsearch/job-list";
import Jobdetail from "../component/application/jobsearch/job-detail";
import Jobapply from "../component/application/jobsearch/job-apply";

// Users
import Userprofile from "../component/appnew/users/userprofile";
import Useredit from "../component/appnew/users/useredit";
import Usercards from "../component/appnew/users/usercards";

// Social app
import SocialApp from "../component/appnew/social-app/socialApp";

// Editors
import CkEditor from "../component/appnew/editor/CkEditor";
import MdeEditor from "../component/appnew/editor/MdeEditor";
import AceCodeEditor from "../component/appnew/editor/AceCodeEditor";

// FAQ
import FaqComponent from "../component/appnew/others/faqComponent";

// knowledgebase
import KnowledgebaseComponent from "../component/appnew/others/KnowledgebaseComponent";

// Calendar
import BasicCalendar from "../component/appnew/calendar/basicCalendar";
import DraggableCalendar from "../component/appnew/calendar/draggableCalendar";

// Calendar
import GoogleMap from "../component/appnew/map/googleMap";
import MapJsContain from "../component/appnew/map/pigionmap";

// TODO app
import Todo from "../component/appnew/todo-app/todo";

// Email app
import EmailApp from "../component/appnew/email-app/emailDefault";

// Chat app
import ChatApp from "../component/appnew/chat-app/chat";

// Contact app
import Contactlist from "../component/appnew/contact-app/contactapp";
import Newuser from "../component/appnew/contact-app/new-user";
import Edituser from "../component/appnew/contact-app/edit-user";

import Samplepage from "../pages/samplepage";
import Supportticket from "../pages/supportticket";
import Searchwebsite from "../pages/search/searchwebsite";
import LeafletMap from "../component/appnew/map/LeafletMap";

export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/dashboard/default`,
    Component: <Default />,
  },
  { path: `${process.env.PUBLIC_URL}/dashboard/crypto`, Component: <Crypto /> },
  {
    path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
    Component: <Ecommerce />,
  },
  {
    path: `${process.env.PUBLIC_URL}/dashboard/generalwidget`,
    Component: <Generalwidgets />,
  },
  {
    path: `${process.env.PUBLIC_URL}/dashboard/chartwidget`,
    Component: <Chartswidgets />,
  },

  {
    path: `${process.env.PUBLIC_URL}/ui-element/typography`,
    Component: <Typography />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/button`,
    Component: <Button />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/avatar`,
    Component: <Avatars />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/helperclass`,
    Component: <Helperclasses />,
  },
  { path: `${process.env.PUBLIC_URL}/ui-element/grid`, Component: <Grid /> },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/tagsandpills`,
    Component: <Tagandpills />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/progress-bars`,
    Component: <Progressbars />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/modalComponent`,
    Component: <Modal />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/alertComponent`,
    Component: <Alert />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/popoverComponent`,
    Component: <Popover />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/tooltipsComponent`,
    Component: <Tooltip />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/spinner`,
    Component: <Spinner />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/dropdownComponent`,
    Component: <Dropdown />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/tab-bootstrap`,
    Component: <Tabbootstrap />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/tab-line`,
    Component: <Tabline />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/navsComponent`,
    Component: <Navs />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/accordionComponent`,
    Component: <AccordionsComponent />,
  },

  { path: `${process.env.PUBLIC_URL}/ui-element/list`, Component: <Lists /> },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/scrollable`,
    Component: <Scrollable />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/bootstrap-notify`,
    Component: <Boostrapnotify />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/rating`,
    Component: <Ratings />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/draganddrop`,
    Component: <Draganddrop />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/dropzone`,
    Component: <Dropzone />,
  },

  {
    path: `${process.env.PUBLIC_URL}/ui-element/tourComponent`,
    Component: <Tour />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/sweetAlert`,
    Component: <Sweetalert2 />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/carousel`,
    Component: <Carousel />,
  },

  {
    path: `${process.env.PUBLIC_URL}/ui-element/ribbon`,
    Component: <Ribbons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/pagination`,
    Component: <Pagination />,
  },
  { path: `${process.env.PUBLIC_URL}/ui-element/steps`, Component: <Steps /> },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/breadcrumb`,
    Component: <Breadcrumb />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/rangeSlider`,
    Component: <Rangeslider />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/imageCropper`,
    Component: <Imagecropper />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/stickyNotes`,
    Component: <Stickynotes />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/image-upload`,
    Component: <UploadImage />,
  },

  {
    path: `${process.env.PUBLIC_URL}/ui-element/flagIcons`,
    Component: <Flagicons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/fontAwsomeIcon`,
    Component: <Fontawesomeicons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/icoIcons`,
    Component: <Iconicons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/featherIcons`,
    Component: <Feathericons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/themifyIcons`,
    Component: <Themifyicons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/weatherIcons`,
    Component: <Weathericons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/simplelineIcon`,
    Component: <Simplelineicon />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/materialIcon`,
    Component: <Materialdesignicon />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/typicon`,
    Component: <Typicon />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/pe7Icon`,
    Component: <Pe7icons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ui-element/ionic-icon`,
    Component: <Ionicicon />,
  },

  {
    path: `${process.env.PUBLIC_URL}/charts/apexcharts`,
    Component: <Apexcharts />,
  },
  {
    path: `${process.env.PUBLIC_URL}/charts/googlecharts`,
    Component: <Googlecharts />,
  },
  {
    path: `${process.env.PUBLIC_URL}/charts/chartjscharts`,
    Component: <Chartjs />,
  },
  {
    path: `${process.env.PUBLIC_URL}/form/form-validation`,
    Component: <Formvalidation />,
  },
  {
    path: `${process.env.PUBLIC_URL}/form/base-input`,
    Component: <BaseInput />,
  },
  {
    path: `${process.env.PUBLIC_URL}/form/radio-checkbox-control`,
    Component: <Checkboxandradio />,
  },
  {
    path: `${process.env.PUBLIC_URL}/form/input-group`,
    Component: <InputGroup />,
  },
  {
    path: `${process.env.PUBLIC_URL}/form/megaoptions`,
    Component: <MegaOption />,
  },

  {
    path: `${process.env.PUBLIC_URL}/form/default-form`,
    Component: <Formdefault />,
  },
  {
    path: `${process.env.PUBLIC_URL}/form/form-wizard-one`,
    Component: <Formwizard1 />,
  },

  {
    path: `${process.env.PUBLIC_URL}/form-widget/datepicker`,
    Component: <Datepicker />,
  },
  {
    path: `${process.env.PUBLIC_URL}/form-widget/typeahead`,
    Component: <Typeahead />,
  },

  {
    path: `${process.env.PUBLIC_URL}/tables/bootstrap-basic-table`,
    Component: <Basictable />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tables/bootstrap-sizing-table`,
    Component: <Sizingtable />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tables/bootstrap-border-table`,
    Component: <Bordertable />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tables/bootstrap-styling-table`,
    Component: <Stylingtable />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tables/data-tables`,
    Component: <DataTableComponent />,
  },

  { path: `${process.env.PUBLIC_URL}/cards/basic`, Component: <BasicCards /> },
  { path: `${process.env.PUBLIC_URL}/cards/theme`, Component: <ThemeCards /> },
  { path: `${process.env.PUBLIC_URL}/cards/tabbed`, Component: <TabCard /> },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/product`,
    Component: <Product />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/product-page`,
    Component: <Productpage />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/product-list`,
    Component: <Productlist />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/product-details`,
    Component: <Productdetails />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/orederhistory`,
    Component: <Orderhistory />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/invoice`,
    Component: <Invoice />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/pricing`,
    Component: <Pricing />,
  },
  { path: `${process.env.PUBLIC_URL}/ecommerce-app/cart`, Component: <Cart /> },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/wishlist`,
    Component: <Wishlist />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce-app/checkout`,
    Component: <Checkout />,
  },

  {
    path: `${process.env.PUBLIC_URL}/blog/blog-single`,
    Component: <Blogsingle />,
  },
  {
    path: `${process.env.PUBLIC_URL}/blog/blog-details`,
    Component: <Blogdetail />,
  },
  { path: `${process.env.PUBLIC_URL}/blog/addpost`, Component: <Blogpost /> },

  {
    path: `${process.env.PUBLIC_URL}/timeline/timeline-one`,
    Component: <Timeline1 />,
  },
  {
    path: `${process.env.PUBLIC_URL}/timeline/timeline-two`,
    Component: <Timeline2 />,
  },

  {
    path: `${process.env.PUBLIC_URL}/learning/learning-list`,
    Component: <Learninglist />,
  },
  {
    path: `${process.env.PUBLIC_URL}/learning/detailed-course`,
    Component: <Learningdeatil />,
  },

  {
    path: `${process.env.PUBLIC_URL}/gallery/gallery-grid`,
    Component: <ImageGallery />,
  },
  {
    path: `${process.env.PUBLIC_URL}/gallery/gallerygrid-desc`,
    Component: <ImageWithDesc />,
  },
  {
    path: `${process.env.PUBLIC_URL}/gallery/gallery-masonry`,
    Component: <MesonryGallery />,
  },
  {
    path: `${process.env.PUBLIC_URL}/gallery/gallerymasonry-desc`,
    Component: <MesonryDesc />,
  },
  {
    path: `${process.env.PUBLIC_URL}/gallery/hover-effect`,
    Component: <ImageHover />,
  },

  {
    path: `${process.env.PUBLIC_URL}/job-search/cardview`,
    Component: <Cardview />,
  },
  {
    path: `${process.env.PUBLIC_URL}/job-search/listview`,
    Component: <Joblist />,
  },
  {
    path: `${process.env.PUBLIC_URL}/job-search/job-details`,
    Component: <Jobdetail />,
  },
  {
    path: `${process.env.PUBLIC_URL}/job-search/apply`,
    Component: <Jobapply />,
  },

  {
    path: `${process.env.PUBLIC_URL}/users/user-profile`,
    Component: <Userprofile />,
  },
  {
    path: `${process.env.PUBLIC_URL}/users/user-edit`,
    Component: <Useredit />,
  },
  {
    path: `${process.env.PUBLIC_URL}/users/user-cards`,
    Component: <Usercards />,
  },

  {
    path: `${process.env.PUBLIC_URL}/appnew/social-app`,
    Component: <SocialApp />,
  },

  {
    path: `${process.env.PUBLIC_URL}/editors/ck-editor`,
    Component: <CkEditor />,
  },
  {
    path: `${process.env.PUBLIC_URL}/editors/mde-editor`,
    Component: <MdeEditor />,
  },
  {
    path: `${process.env.PUBLIC_URL}/editors/ace-code-editor`,
    Component: <AceCodeEditor />,
  },

  { path: `${process.env.PUBLIC_URL}/others/faq`, Component: <FaqComponent /> },
  {
    path: `${process.env.PUBLIC_URL}/others/knowledgebase`,
    Component: <KnowledgebaseComponent />,
  },

  {
    path: `${process.env.PUBLIC_URL}/appnew/email-app`,
    Component: <EmailApp />,
  },

  { path: `${process.env.PUBLIC_URL}/appnew/chat-app`, Component: <ChatApp /> },

  {
    path: `${process.env.PUBLIC_URL}/appnew/contact-app`,
    Component: <Contactlist />,
  },
  {
    path: `${process.env.PUBLIC_URL}/appnew/new-contact`,
    Component: <Newuser />,
  },
  {
    path: `${process.env.PUBLIC_URL}/appnew/edit-contact/:id`,
    Component: <Edituser />,
  },

  {
    path: `${process.env.PUBLIC_URL}/calender/basic`,
    Component: <BasicCalendar />,
  },
  {
    path: `${process.env.PUBLIC_URL}/calender/advance`,
    Component: <DraggableCalendar />,
  },

  {
    path: `${process.env.PUBLIC_URL}/map/google-map`,
    Component: <GoogleMap />,
  },
  {
    path: `${process.env.PUBLIC_URL}/map/leaflet-map`,
    Component: <LeafletMap />,
  },
  {
    path: `${process.env.PUBLIC_URL}/map/pigeon-maps`,
    Component: <MapJsContain />,
  },

  { path: `${process.env.PUBLIC_URL}/appnew/todo-app`, Component: <Todo /> },
  {
    path: `${process.env.PUBLIC_URL}/pages/sample-page`,
    Component: <Samplepage />,
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/support-ticket`,
    Component: <Supportticket />,
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/search`,
    Component: <Searchwebsite />,
  },
];
