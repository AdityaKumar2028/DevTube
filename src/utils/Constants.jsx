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

export const dummyComments = [
  {
    id: "1",
    user: "Aditya",
    avatar: "https://i.pravatar.cc/40?img=1",
    text: "React recursion finally clicked for me.",
    replies: [
      {
        id: "2",
        user: "Rahul",
        avatar: "https://i.pravatar.cc/40?img=2",
        text: "Recursive components are so elegant.",
        replies: [
          {
            id: "3",
            user: "Priya",
            avatar: "https://i.pravatar.cc/40?img=3",
            text: "Wait till you build a file explorer.",
            replies: [
              {
                id: "4",
                user: "Aman",
                avatar: "https://i.pravatar.cc/40?img=4",
                text: "Or VS Code sidebar clone.",
                replies: [
                  {
                    id: "5",
                    user: "Karan",
                    avatar: "https://i.pravatar.cc/40?img=5",
                    text: "Or Reddit comments 😂",
                    replies: [
                      {
                        id: "6",
                        user: "Riya",
                        avatar: "https://i.pravatar.cc/40?img=6",
                        text: "Which is exactly what he's building.",
                        replies: [
                          {
                            id: "7",
                            user: "Dev",
                            avatar: "https://i.pravatar.cc/40?img=7",
                            text: "Recursion inside recursion.",
                            replies: [
                              {
                                id: "8",
                                user: "Siddharth",
                                avatar: "https://i.pravatar.cc/40?img=8",
                                text: "We need to go deeper.",
                                replies: [
                                  {
                                    id: "9",
                                    user: "Neha",
                                    avatar: "https://i.pravatar.cc/40?img=9",
                                    text: "Inception comments.",
                                    replies: [
                                      {
                                        id: "10",
                                        user: "Aryan",
                                        avatar:
                                          "https://i.pravatar.cc/40?img=10",
                                        text: "Maximum nesting achieved.",
                                        replies: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "11",
    user: "Ankit",
    avatar: "https://i.pravatar.cc/40?img=11",
    text: "DevTube is becoming a serious project now.",
    replies: [
      {
        id: "12",
        user: "Harsh",
        avatar: "https://i.pravatar.cc/40?img=12",
        text: "Live chat next?",
        replies: [
          {
            id: "13",
            user: "Rohit",
            avatar: "https://i.pravatar.cc/40?img=13",
            text: "And websocket backend.",
            replies: [
              {
                id: "14",
                user: "Yash",
                avatar: "https://i.pravatar.cc/40?img=14",
                text: "And Redis.",
                replies: [
                  {
                    id: "15",
                    user: "Nitin",
                    avatar: "https://i.pravatar.cc/40?img=15",
                    text: "And then system design round cleared.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "16",
    user: "Striver",
    avatar: "https://i.pravatar.cc/40?img=16",
    text: "Did you revise your DSA today?",
    replies: [
      {
        id: "17",
        user: "Aditya",
        avatar: "https://i.pravatar.cc/40?img=1",
        text: "Please don't attack me here too.",
        replies: [],
      },
    ],
  },
];

export const NAMES = [
  "Aditya",
  "Rahul",
  "Priya",
  "Rohit",
  "Akshay",
  "Aman",
  "Sakshi",
  "Neha",
  "Vikas",
  "Ankit",
  "Karan",
  "Harsh",
  "Shivam",
  "Ayush",
  "Nitin",
  "Pooja",
  "Riya",
  "Arjun",
  "Yash",
  "Manish",
  "Abhishek",
  "Deepak",
  "Sarthak",
  "Tushar",
  "Dev",
  "Raghav",
  "Ananya",
  "Sneha",
  "Mehul",
  "Vivek",
  "Aditi",
  "Krishna",
  "Naman",
  "Ritik",
  "Mohit",
  "Sumit",
  "Varun",
  "Prateek",
  "Tarun",
  "Aryan",
];

export const COMMENTS = [
  "Amazing stream 🔥",
  "First time watching live",
  "React is awesome",
  "Can you explain Redux?",
  "Hello from Delhi",
  "Watching from Noida",
  "Namaste React OP",
  "Great explanation",
  "This cleared my doubt",
  "Can you zoom in?",
  "Audio is clear now",
  "Backend next please",
  "NodeJS supremacy 🚀",
  "Who's here in 2026?",
  "Let's gooooo",
  "W stream",
  "Common Akshay Saini W",
  "Bro explained it perfectly",
  "Need more projects like this",
  "Can you share source code?",
  "I love React",
  "Tailwind is so good",
  "Redux Toolkit saved my life",
  "This is gold",
  "Taking notes right now",
  "Can someone explain useEffect?",
  "Greetings from Mumbai",
  "Learning a lot today",
  "Subbed instantly",
  "This deserves more views",
  "Can you make a DevOps series?",
  "Spring Boot vs Node?",
  "NextJS when?",
  "Vite is super fast",
  "Amazing content",
  "Very underrated channel",
  "Bro cooking today 🔥",
  "System design next",
  "Socket.io tutorial please",
  "Live chat working nice",
  "Shoutout from MAIT",
  "Rao Sahab on Top 😎",
  "Interview prep please",
  "Need DSA roadmap",
  "Can you explain closures?",
  "Java or Node?",
  "Who's preparing for placements?",
  "Keep going bro",
  "Thanks for the stream",
  "Best coding channel",
];

export const getRandomName = () => {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
};

export const getRandomComment = () => {
  return COMMENTS[Math.floor(Math.random() * COMMENTS.length)];
};

export const getRandomAvatar = () => {
  return `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70) + 1}`;
};
