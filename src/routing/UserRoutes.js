// Discover Page And Icons Start
import Discover from "../pages/Discover/Discover";
import DiscoverIcon from "./icons/DiscoverIcon";
import DiscoverActiveIcon from "./icons/DiscoverActiveIcon";
// Discover Page And Icons End

// Messaging Pages And Icons Start
import Messaging from "../pages/Messagings/Messaging";
import MessagingIcon from "./icons/MessagingIcon";
import MessagingActiveIcon from "./icons/MessagingActiveIcon";
// Messaging Pages And Icons End

// TradingGroups Pages And Icons Start
import TradingGroups from "../pages/TradingGroups/TradingGroups";
import TradingGroupsIcon from "./icons/TradingGroupsIcon";
import TradingGroupsActiveIcon from "./icons/TradingGroupsActiveIcon";
// TradingGroups Pages And Icons End

// LiveStreaming Pages And Icons Start
import LiveStreaming from "../pages/LiveStreaming/LiveStreaming";
import LiveStreamingInPerson from "../pages/LiveStreamingInPerson/LiveStreamingInPerson";
import LiveStreamingIcon from "./icons/LiveStreamingIcon";
import LiveStreamingActiveIcon from "./icons/LiveStreamingActiveIcon";
// LiveStreaming Pages And Icons End

// Meetings Pages And Icons Start
import Meetings from "../pages/Meetings/Meetings";
import MeetingsIcon from "./icons/MeetingsIcon";
import MeetingsActiveIcon from "./icons/MeetingsActiveIcon";
// Meetings Pages And Icons End

// Profile Page Start
import Profile from "../pages/Profile/Profile";
import ProfileIcon from "./icons/ProfileIcon";
import ProfileActiveIcon from "./icons/ProfileActiveIcon";
// Profile Page End

// Statistics Pages And Icons Start
import Statistics from "../pages/Statistics/Statistics";
import StatisticsIcon from "./icons/StatisticsIcon";
import StatisticsActiveIcon from "./icons/StatisticsActiveIcon";
// Statistics Pages And Icons End

export const UserRoutes = [
  // User Routes
  {
    id: "discover",
    path: "/user/discover",
    title: "Discover",
    layout: "user",
    parent: true,
    component: <Discover />,
    icon: <DiscoverIcon />,
    activeIcon: <DiscoverActiveIcon />,
  },

  {
    id: "messaging",
    path: "/user/messaging",
    title: "Messaging",
    layout: "user",
    parent: true,
    component: <Messaging />,
    icon: <MessagingIcon />,
    activeIcon: <MessagingActiveIcon />,
  },

  {
    id: "trading_groups",
    path: "/user/trading/groups",
    title: "Trading Groups",
    layout: "user",
    parent: true,
    component: <TradingGroups />,
    icon: <TradingGroupsIcon />,
    activeIcon: <TradingGroupsActiveIcon />,
  },

  {
    id: "live_streaming_in_person",
    path: "/user/live/streaming",
    title: "Live Streaming",
    layout: "user",
    parent: true,
    component: <LiveStreaming />,
    icon: <LiveStreamingIcon />,
    activeIcon: <LiveStreamingActiveIcon />,
  },

  {
    id: "live_streaming",
    path: "/user/live/streaming/in-person",
    title: "Live Streaming In Person",
    layout: "user",
    parent: false,
    component: <LiveStreamingInPerson />,
    icon: <LiveStreamingIcon />,
    activeIcon: <LiveStreamingActiveIcon />,
  },

  {
    id: "meetings",
    path: "/user/meetings",
    title: "Meetings",
    layout: "user",
    parent: true,
    component: <Meetings />,
    icon: <MeetingsIcon />,
    activeIcon: <MeetingsActiveIcon />,
  },

  {
    id: "profile",
    path: "/user/profile",
    title: "Profile",
    layout: "user",
    parent: true,
    component: <Profile />,
    icon: <ProfileIcon />,
    activeIcon: <ProfileActiveIcon />,
  },

  {
    id: "statistics",
    path: "/user/statistics",
    title: "Statistics",
    layout: "user",
    parent: true,
    component: <Statistics />,
    icon: <StatisticsIcon />,
    activeIcon: <StatisticsActiveIcon />,
  },
];
