import { Iadmin } from "../model/adminArr";

  // Admin Object Array with ID
export const admins:Array<Iadmin> = [
 {
    id: "1",
    name: "Ramesh Patil",
    email: "ramesh.patil@company.com",
    role: "Super Admin",
    contact: "9876543210",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    id: "2",
    name: "Sneha Deshmukh",
    email: "sneha.deshmukh@company.com",
    role: "Admin",
    contact: "9123456780",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    id: "3",
    name: "Amit Sharma",
    email: "amit.sharma@company.com",
    role: "Moderator",
    contact: "9988776655",
    image: "https://randomuser.me/api/portraits/men/30.jpg"
  },
  {
    id: "4",
    name: "Priya Kulkarni",
    email: "priya.kulkarni@company.com",
    role: "Admin",
    contact: "9090909090",
    image: "https://randomuser.me/api/portraits/women/40.jpg"
  },
  {
    id: "5",
    name: "Karan Joshi",
    email: "karan.joshi@company.com",
    role: "Super Admin",
    contact: "9001234567",
    image: "https://randomuser.me/api/portraits/men/50.jpg"
  }
];

console.log(admins);
