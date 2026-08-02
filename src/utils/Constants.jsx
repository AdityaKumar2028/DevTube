import {
  House,
  Flame,
  Code2,
  BrainCircuit,
  Database,
  Cloud,
  Cpu,
  Blocks,
  BriefcaseBusiness,
} from "lucide-react";

export const sidebarOptions = [
  {
    title: "Home",
    icon: House,
    query: "programming",
  },
  {
    title: "Trending",
    icon: Flame,
    query: "trending programming coding latest",
  },
  {
    title: "Web Development",
    icon: Code2,
    query: "web development",
  },
  {
    title: "DSA",
    icon: BrainCircuit,
    query: "data structures and algorithms",
  },
  {
    title: "Backend",
    icon: Database,
    query: "backend development",
  },
  {
    title: "AI / ML",
    icon: Cpu,
    query: "artificial intelligence machine learning",
  },
  {
    title: "DevOps",
    icon: Cloud,
    query: "DevOps Docker Kubernetes CI CD",
  },
  {
    title: "System Design",
    icon: Blocks,
    query: "system design interview",
  },
  {
    title: "Interview Prep",
    icon: BriefcaseBusiness,
    query: "software engineering interview preparation",
  },
];

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const formatPublishedDate = (date) => {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

  const intervals = [
    { label: "year", value: 31536000 },
    { label: "month", value: 2592000 },
    { label: "week", value: 604800 },
    { label: "day", value: 86400 },
    { label: "hour", value: 3600 },
    { label: "minute", value: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.value);

    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};

export const formatViews = (views) => {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(Number(views));
};

export const formatDuration = (iso) => {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return "";

  const [, h, m, s] = match;

  const hours = Number(h || 0);
  const minutes = Number(m || 0);
  const seconds = Number(s || 0);

  if (hours) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};
