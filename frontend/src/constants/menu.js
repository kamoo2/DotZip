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
    label: "SEARCH",
    to: `${adminRoot}/search`,
    subs: [
      {
        icon: "iconsminds-location-2",
        label: "지역 검색",
        to: `${adminRoot}/search/area`
        // roles: [UserRole.Admin, UserRole.Editor],
      },
      {
        icon: "iconsminds-letter-open",
        label: "이름 검색",
        to: `${adminRoot}/search/name`
        // roles: [UserRole.Admin, UserRole.Editor],
      }
    ]
  },
  {
    id: "bookmark",
    icon: "iconsminds-reverbnation",
    // icon: "iconsminds-love",
    label: "MY 관심",
    to: `${adminRoot}/bookmark`,
    subs: [
      {
        icon: "iconsminds-location-2",
        label: "관심 지역",
        to: `${adminRoot}/bookmark/area`
      },
      {
        icon: "iconsminds-building",
        label: "관심 매물",
        to: `${adminRoot}/bookmark/house`
      }
    ]
  },
  {
    id: "support",
    icon: "iconsminds-support",
    label: "SUPPORT",
    to: `${adminRoot}/support`,
    subs: [
      {
        icon: "simple-icon-user-following",
        label: "공지사항",
        to: `${adminRoot}/support/notice`
      },
      {
        icon: "simple-icon-user-following",
        label: "1:1 문의",
        to: `${adminRoot}/support/QnA`
      },
      {
        icon: "simple-icon-user-following",
        label: "Contact",
        to: `${adminRoot}/support/contact`
      }
    ]
  }
];
export default data;
