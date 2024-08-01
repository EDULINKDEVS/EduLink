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
    { id: 1, name: 'Tech Innovations', avatar: 'https://via.placeholder.com/150/1' },
    { id: 2, name: 'Green Solutions', avatar: 'https://via.placeholder.com/150/2' },
    { id: 3, name: 'Global Ventures', avatar: 'https://via.placeholder.com/150/3' },
    { id: 4, name: 'Creative Minds', avatar: 'https://via.placeholder.com/150/4' },
    { id: 5, name: 'Future Enterprises', avatar: 'https://via.placeholder.com/150/5' },
    { id: 6, name: 'Dynamic Systems', avatar: 'https://via.placeholder.com/150/6' },
    { id: 7, name: 'Smart Solutions', avatar: 'https://via.placeholder.com/150/7' },
    { id: 8, name: 'Bright Horizons', avatar: 'https://via.placeholder.com/150/8' },
    { id: 9, name: 'Visionary Tech', avatar: 'https://via.placeholder.com/150/9' },
    { id: 10, name: 'Innovative Designs', avatar: 'https://via.placeholder.com/150/10' },
    { id: 11, name: 'Eco Innovations', avatar: 'https://via.placeholder.com/150/11' },
    { id: 12, name: 'Tech Pioneers', avatar: 'https://via.placeholder.com/150/12' },
    { id: 13, name: 'Alpha Enterprises', avatar: 'https://via.placeholder.com/150/13' },
    { id: 14, name: 'Beta Systems', avatar: 'https://via.placeholder.com/150/14' },
    { id: 15, name: 'Gamma Solutions', avatar: 'https://via.placeholder.com/150/15' },
    { id: 16, name: 'Delta Tech', avatar: 'https://via.placeholder.com/150/16' },
    { id: 17, name: 'Omega Innovations', avatar: 'https://via.placeholder.com/150/17' },
    { id: 18, name: 'Prime Ventures', avatar: 'https://via.placeholder.com/150/18' },
    { id: 19, name: 'NextGen Systems', avatar: 'https://via.placeholder.com/150/19' },
    { id: 20, name: 'Quantum Tech', avatar: 'https://via.placeholder.com/150/20' }
  ];
  
  export default companies;
  