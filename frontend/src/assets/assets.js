import profile1 from "./profile_1.jpg";
import post1 from "./post1.jpg";
import post2 from "./post2.jpg";
import electrician from "./electrician_service.jpg";
import plumber from "./plumber_service.jpg";
import mechanic from "./mechanic_service.jpg";
import cleaner from "./cleaner_service.jpg";

export const posts = [
  {
    id: 1,
    userName: "Ravindu Rashmitha",
    userImage: profile1,
    time: "5h",
    postImage: post1,
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    userName: "Pathum Nissanka",
    userImage: profile1,
    time: "2h",
    postImage: post2,
    likes: 8,
    comments: 1,
  },
  {
    id: 1,
    userName: "Ravindu Rashmitha",
    userImage: profile1,
    time: "5h",
    postImage: post1,
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    userName: "Pathum Nissanka",
    userImage: profile1,
    time: "2h",
    postImage: post2,
    likes: 8,
    comments: 1,
  },
];

export const notifications = [
    { name: "Pathum Nissanka", message: "mentioned you in a comment.", time: "3h" },
    { name: "Wanindu Hasaranga", message: "liked your post.", time: "1d" },
    { name: "Kusal Mendis", message: "commented on your post.", time: "6h" },
    { name: "Charith Asalanka", message: "poked you.", time: "5h" },
    { name: "Pathum Nissanka", message: "mentioned you in a comment.", time: "3h" },
    { name: "Wanindu Hasaranga", message: "liked your post.", time: "1d" },
    { name: "Kusal Mendis", message: "commented on your post.", time: "6h" },
    { name: "Charith Asalanka", message: "poked you.", time: "5h" },
    { name: "Pathum Nissanka", message: "mentioned you in a comment.", time: "3h" },
    { name: "Wanindu Hasaranga", message: "liked your post.", time: "1d" },
    { name: "Kusal Mendis", message: "commented on your post.", time: "6h" },
    { name: "Charith Asalanka", message: "poked you.", time: "5h" },
    { name: "Pathum Nissanka", message: "mentioned you in a comment.", time: "3h" },
    { name: "Wanindu Hasaranga", message: "liked your post.", time: "1d" },
    { name: "Kusal Mendis", message: "commented on your post.", time: "6h" },
    { name: "Charith Asalanka", message: "poked you.", time: "5h" },
    { name: "Pathum Nissanka", message: "mentioned you in a comment.", time: "3h" },
    { name: "Wanindu Hasaranga", message: "liked your post.", time: "1d" },
    { name: "Kusal Mendis", message: "commented on your post.", time: "6h" },
    { name: "Charith Asalanka", message: "poked you.", time: "5h" },
]

export const chats = [
  {
    id: 1,
    name: "Nimal Perera",
    message: "Bro, can you fix my website?",
    time: "2m",
    online: true,
  },
  {
    id: 2,
    name: "Kasun Silva",
    message: "Puka sududa?",
    time: "10m",
    online: false,
  },
  {
    id: 3,
    name: "Amal Fernando",
    message: "Thanks machan ❤️",
    time: "1h",
    online: true,
  },
]

export const services = [
  {
    title: "Electrical Services",
    desc: "Wiring, repairs, installations, and electrical safety checks.",
    img: electrician,
  },
  {
    title: "Plumbing Services",
    desc: "Leak fixing, pipe installation, drainage, and water system repairs.",
    img: plumber,
  },
  {
    title: "Mechanical Repairs",
    desc: "Vehicle, machinery, and equipment maintenance and fixing.",
    img: mechanic,
  },
  {
    title: "Cleaning Services",
    desc: "Home, office, and commercial cleaning by professionals.",
    img: cleaner,
  },
]

export const categories = [
  "Carpenters",
  "Tile",
  "Masons",
  "Electricians",
  "Painters",
  "Plumbers",
  "Cushion Works",
  "Gully Bowser",
];

export const workers = [
  {
    id: 1,
    name: "Kamal Perera",
    job: "Carpenters",
    location: "Colombo",
    phone: "077 123 4567",
    workingDays: "Mon - Sat",
    workingHours: "8.00 AM - 6.00 PM",
    bestTime: "9.00 AM - 12.00 PM",
    image: profile1,
    feedbacks: [
      { user: "Nimal", comment: "Very professional work" },
      { user: "Sunil", comment: "Highly recommended" }
    ]
  }
]
