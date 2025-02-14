"use client"

const GroupDropdownComponent = () => {

    return (
        <div className="mb-4">
            <label className="block text-gray-700 mb-1">Select by Group:</label>
            <select
                className="border rounded px-3 py-2 w-52"
            >
                <option value="">All</option>
                <option value="Junior">Junior</option>  
                <option value="Senior">Senior</option>  
                <option value="Expert">Expert</option>  
            </select>
        </div>
    );
};

export default GroupDropdownComponent;
