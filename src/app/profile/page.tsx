import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import axios from 'axios';

const Profile: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoUrl, setPhotoUrl] = useState<string>('/undraw_pic_profile_re_7g2h.svg');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState<File | null>(null); // State to hold the file

  const handleChangePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      setFile(file); // Set the file to state
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('phone', phone);
    if (file) {
      formData.append('photo', file);
    }

    try {
      const response = await axios.post('/api/saveProfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file upload
        },
      });
      console.log('Data saved:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto max-w-xl p-4">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Edit User Profile</h1>
        <div className="relative">
          <div className="absolute right-0 -top-14 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src={photoUrl} alt="Profile Photo" width={160} height={160} className="object-cover"/>
          </div>
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-28 rounded-lg flex items-center justify-center text-white">
            <p className="text-sm">This will be displayed on your profile</p>
          </div>
          <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden" accept="image/*"/>
          <button onClick={handleChangePhoto} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload New
          </button>
        </div>
        <div className="mt-8">
          <InputField label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <InputField label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField label="Mobile Number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

const InputField: React.FC<{ label: string; type: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({ label, type, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={type} value={value} onChange={onChange} />
  </div>
);

export default Profile;
