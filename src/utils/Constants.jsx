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
    query: "trending programming",
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
