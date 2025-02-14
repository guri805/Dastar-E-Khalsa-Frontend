"use client"

const CategoryDropdownComponent = ({ categories, selectedCategory, setSelectedCategory }) => {

    return (
        <div>
            <label className="block text-gray-700 mb-1">Select Category:</label>
            <select
                className="border rounded px-3 py-2 w-52"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All</option>
                {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdownComponent;
