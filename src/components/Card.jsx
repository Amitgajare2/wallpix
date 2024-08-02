import React, { useEffect, useMemo, useState } from "react";
import Item from "../components/Item";
import "../assets/css/Card.css";
import defaultSports from "../Wallpix.json";

export default function Card() {
    const [sportList, setSportList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        setSportList(defaultSports);
    }, []);

    function getFilteredList() {
        if (!selectedCategory) {
            return sportList;
        }
        return sportList.filter((item) => item.category === selectedCategory);
    }

    const filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredList.length / itemsPerPage)));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // Get unique categories from the sportList
    const uniqueCategories = useMemo(() => {
        const categories = sportList.map(item => item.category);
        return ["", ...new Set(categories)];  // Adding an empty string for the "All" option
    }, [sportList]);

    return (
        <div className="app">
            <div className="filter-container">
                <div className="cate"><h2>Category</h2></div>
                <div>
                    <select
                        name="category-list"
                        id="category-list"
                        onChange={handleCategoryChange}
                        className="select-option"
                    >
                        {uniqueCategories.map((category, index) => (
                            <option key={index} value={category}>
                                {category || "All"}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="sport-list">
                {currentItems.map((element, index) => (
                    <Item {...element} key={index} />
                ))}
            </div>

            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {Math.ceil(filteredList.length / itemsPerPage)}</span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredList.length / itemsPerPage)}>
                    Next
                </button>
            </div>
        </div>
    );
}
