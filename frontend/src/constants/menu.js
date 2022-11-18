import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  {
    id: "home",
    icon: "iconsminds-home",
    label: "menu.home",
    to: `${adminRoot}/home`
  },
  {
    id: "search",
    icon: "iconsminds-magnifi-glass",
    label: "menu.search",
    to: `${adminRoot}/search`,
    subs: [
      {
        icon: "iconsminds-location-2",
        label: "menu.area",
        to: `${adminRoot}/search/area`
        // roles: [UserRole.Admin, UserRole.Editor],
      },
      {
        icon: "iconsminds-letter-open",
        label: "menu.name",
        to: `${adminRoot}/search/name`
        // roles: [UserRole.Admin, UserRole.Editor],
      }
    ]
  },
  {
    id: "bookmark",
    // icon: "iconsminds-reverbnation",
    icon: "iconsminds-like",
    label: "menu.favs",
    to: `${adminRoot}/bookmark`,
    subs: [
      {
        icon: "iconsminds-location-2",
        label: "menu.favs_area",
        to: `${adminRoot}/bookmark/area`
      },
      {
        icon: "iconsminds-building",
        label: "menu.favs_house",
        to: `${adminRoot}/bookmark/house`
      }
    ]
  },
  {
    id: "support",
    icon: "iconsminds-support",
    label: "menu.support",
    to: `${adminRoot}/support`,
    subs: [
      {
        icon: "simple-icon-user-following",
        label: "menu.notice",
        to: `${adminRoot}/support/notice`
      },
      {
        icon: "simple-icon-user-following",
        label: "menu.QnA",
        to: `${adminRoot}/support/QnA`
      },
      {
        icon: "simple-icon-user-following",
        label: "menu.contact",
        to: `${adminRoot}/support/contact`
      }
    ]
  }
];
export default data;
