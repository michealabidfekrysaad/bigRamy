import React from "react";
import { useLocation } from "react-router-dom";
import { CallAPI } from "../../config/api/ApiConfig";

export const BookDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id") || 38;
  const placeholderURL = "https://via.placeholder.com/1200x800.png";

  const { data } = CallAPI({
    name: "bookdetails",
    url: `api/v2/storefront/products/${id}`,
    refetchOnWindowFocus: false,
    enabled: id ? true : false,
    select: (res) => res?.data?.data,
  });

  
  return (
    <div className="main-container">
      <div className="header">
        <h1>{data?.attributes?.name}</h1>
      </div>
      <div className="content">
        <div className="left-section">
          <div className="left-content">
            <p>num pages: {data?.attributes?.book?.num_of_pages}</p>
            <p>Bookmark</p>
          </div>
        </div>
        <div className="right-section">
          <img
            src={data?.attributes?.book?.image_url}
            alt="cover-book"
            onError={(e) => {
              e.target.src = placeholderURL; // Set placeholder image when the original image fails to load
            }}
          />
        </div>
      </div>
    </div>
  );
};
