// This file is auto-generated. Hand-written for initial setup.
import { createRoute } from "@tanstack/react-router";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExportLogisticsPage from "./pages/ExportLogisticsPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import { Route as RootRoute } from "./routes/__root";

const IndexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
});

const AboutRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/about",
  component: AboutPage,
});

const ProductsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/products",
  component: ProductsPage,
});

const WhyChooseUsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/why-choose-us",
  component: WhyChooseUsPage,
});

const ExportLogisticsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/export-logistics",
  component: ExportLogisticsPage,
});

const ContactRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/contact",
  component: ContactPage,
});

export const routeTree = RootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  ProductsRoute,
  WhyChooseUsRoute,
  ExportLogisticsRoute,
  ContactRoute,
]);
