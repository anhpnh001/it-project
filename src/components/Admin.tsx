// // This example assumes you have some sort of session or auth hook
// import { User } from 'next-auth';
// import { useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';

// const AdminPage: React.FC = () => {
//   const { data: session } = useSession();
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     if (session && session.user.role === UserRole.Admin) {
//       // Fetch users
//     } else {
//       // Redirect or show an unauthorized message
//     }
//   }, [session]);

//   if (!session || session.user.role !== UserRole.Admin) {
//     return <p>You are not authorized to view this page</p>;
//   }

//   // Remaining component
// };
