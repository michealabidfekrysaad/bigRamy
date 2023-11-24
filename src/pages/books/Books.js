import React from "react";
import { useNavigate } from "react-router-dom";
import { CallAPI } from "../../config/api/ApiConfig";
import { PATH_PAGE } from "../../routes/paths";

export const Books = () => {
  const navigate = useNavigate();
  
  const { data } = CallAPI({
    name: "allBooks",
    url: `/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book`,
    refetchOnWindowFocus: false,
    enabled: true,
    select: (res) => res?.data?.data,
  });
  
  const handleNavigation = (param) => {
    const queryParams = { id: param };
    const searchParams = new URLSearchParams(queryParams).toString();
    navigate(`${PATH_PAGE.booksDetails}?${searchParams}`);
  };

  return (
    <div>
      {data?.map((item, index) => (
        <div
          key={item?.id}
          className="data-show"
          onClick={() => handleNavigation(item?.id)}
        >
          <p>{item?.id}</p>
          <p>{item?.attributes?.book?.title}</p>
        </div>
      ))}
    </div>
  );
};
