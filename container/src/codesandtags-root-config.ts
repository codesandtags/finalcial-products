import {
  registerApplication,
  start,
  addErrorHandler,
  getAppStatus,
  LOAD_ERROR,
} from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    topNav: "<h1>Loading topnav</h1>",
  },
  props: {},
  errors: {
    topNav: "<h1>Failed to load topnav</h1>",
  },
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

addErrorHandler((err) => {
  // Here we can manage the error when an application is not loading
  if (getAppStatus(err.appOrParcelName) === LOAD_ERROR) {
    System.delete(System.resolve(err.appOrParcelName));
    alert(
      "The current app cannot be loaded, you will be redirected to the last navigation."
    );
    history.back();
  }
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();
