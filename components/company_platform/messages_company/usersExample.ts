export interface User {
    id: number;
    name: string;
    avatar: string;
  }
  
  export const users: User[] = Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    avatar: `https://randomuser.me/api/portraits/lego/${index % 10}.jpg`, // przykładowe awatary
  }));
  export const companies = [
  { id: 1, name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, name: 'Michael Brown', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, name: 'Emily Davis', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 5, name: 'Chris Johnson', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: 6, name: 'Olivia Garcia', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: 7, name: 'David Martinez', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
  { id: 8, name: 'Sophia Rodriguez', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 9, name: 'James Wilson', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { id: 10, name: 'Isabella Anderson', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { id: 11, name: 'Robert Thomas', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 12, name: 'Mia Jackson', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: 13, name: 'Daniel White', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
  { id: 14, name: 'Charlotte Harris', avatar: 'https://randomuser.me/api/portraits/women/14.jpg' },
  { id: 15, name: 'Matthew Clark', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { id: 16, name: 'Amelia Lewis', avatar: 'https://randomuser.me/api/portraits/women/16.jpg' },
  { id: 17, name: 'Joseph Walker', avatar: 'https://randomuser.me/api/portraits/men/17.jpg' },
  { id: 18, name: 'Grace Hall', avatar: 'https://randomuser.me/api/portraits/women/18.jpg' },
  { id: 19, name: 'Charles Allen', avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
  { id: 20, name: 'Ava Young', avatar: 'https://randomuser.me/api/portraits/women/20.jpg' }
];
 
  
  export default companies;
  