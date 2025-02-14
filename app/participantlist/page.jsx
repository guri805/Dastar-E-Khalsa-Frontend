"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryDropdownComponent from '../_components/participantlist/CategoryDropdownComponent';
import GroupDropdownComponent from '../_components/participantlist/GroupDropdownComponent';
import ParticipantTableComponent from '../_components/participantlist/ParticipantTableComponent';
import SearchParticipantComponent from '../_components/participantlist/SearchParticipantComponent';
import CustomButton from '../_components/Common/CustomButton';

const ParticipantList = () => {
    const [participants, setParticipants] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    // Fetch participants
    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await axios.get('http://localhost:3001/participantdetails');
                setParticipants(response.data);
            } catch (error) {
                console.error("Error fetching participants:", error);
            }
        };

        fetchParticipants();
    }, []);

    // Fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3001/categories'); // Replace with your API endpoint
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    // Fetch subcategories based on selected category
    useEffect(() => {
        const fetchSubcategories = async () => {
            if (selectedCategory) {
                try {
                    const response = await axios.get(`http://localhost:3001/subcategories/${selectedCategory}`); 
                    setSubcategories(response.data);
                } catch (error) {
                    console.error("Error fetching subcategories:", error);
                }
            }
        };

        fetchSubcategories();
    }, [selectedCategory]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Participant List</h2>

            {/* Filters Section */}
            <form className='text-center'>
                <div className="flex flex-wrap gap-4 justify-center mb-2">
                    <CategoryDropdownComponent categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <GroupDropdownComponent />
                </div>
                <CustomButton type='submit' btnName='Submit' className='bg-blue-500 py-1 px-3 rounded-lg text-white font-semibold' />
            </form>

            <h2 className="text-2xl font-semibold text-center my-4">Participant Table</h2>
            <div className='flex gap-2 items-center '>
                <SearchParticipantComponent />
                <CustomButton type='submit' btnName='Search' className='bg-blue-500 py-1 px-3 rounded-lg text-white font-semibold mt-7' />
            </div>
            
            {/* Table with data */}
            <ParticipantTableComponent participants={participants} />
        </div>
    );
};

export default ParticipantList;
