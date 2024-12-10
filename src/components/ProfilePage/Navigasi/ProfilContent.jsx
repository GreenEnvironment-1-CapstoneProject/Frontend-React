import React, { useState } from 'react';
import api from "../../../services/api";

const ProfilContent = ({Data}) => {
    const [formData, setFormData] = useState({
        name: Data.name || '',
        email: Data.email || '',
        phone: Data.phone || '',
        gender: Data.gender === 'Laki-Laki' ? 'male' : 'female'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await api.put(`/users/update`, formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
    <div className="p-6">
        <div className="space-y-4">
            <form onSubmit={handleUpdate}>
            <div className='flex flex-row mt-2'>
                <label className="text-xl w-40 py-3 items-center">User Name</label>
                <input 
                type="text" 
                className="max-w-[484px] py-3 px-4 block w-full border-gray-200 rounded-lg text-xl" 
                defaultValue={Data.username}
                disabled={true}
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label className="text-xl w-40 py-3 items-center">Nama</label>
                <input 
                type="text" 
                name="name"
                className="max-w-[484px] py-3 px-4 block w-full border-gray-200 rounded-lg text-xl" 
                placeholder="Masukkan nama lengkap"
                defaultValue={Data.name}
                onChange={handleInputChange}
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label className="text-xl w-40 py-3">Email</label>
                <input 
                type="email" 
                name="email"
                className="max-w-[484px] py-3 px-4 block w-full border-gray-200 rounded-lg text-xl" 
                placeholder="Masukkan email"
                defaultValue={Data.email}
                onChange={handleInputChange}
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label className="text-xl w-40 py-3">No telpon</label>
                <input 
                type="number" 
                name="phone"
                className="max-w-[484px] py-3 px-4 block w-full border-gray-200 rounded-lg text-xl" 
                placeholder="Masukkan nomer"
                defaultValue={Data.phone}
                onChange={handleInputChange}
                />
            </div>
            <div className="flex flex-row items-center space-x-4">
                <label className="text-xl w-40 py-3">Jenis Kelamin</label>
                <div className="flex items-center space-x-3">
                    <div className="flex">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleInputChange}
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-green-600 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-800"
                        />
                        <label 
                            htmlFor="male" 
                            className="text-md text-gray-500 ml-2 dark:text-gray-400"
                        >
                            Laki-laki
                        </label>
                    </div>
                    <div className="flex">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleInputChange}
                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-green-600 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-800"
                        />
                        <label 
                            htmlFor="female" 
                            className="text-md text-gray-500 ml-2 dark:text-gray-400"
                        >
                            Perempuan
                        </label>
                    </div>
                </div>
            </div>
            <button 
                type="submit"
                className='bg-primary py-3 px-4 block w-[103px] rounded-lg text-white'
            >
                Simpan
            </button>
            </form>
        </div>
    </div>
    )
};

export default ProfilContent;