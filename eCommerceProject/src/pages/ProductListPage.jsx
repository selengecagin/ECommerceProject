import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Client from "../components/Client";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import squares from "../assets/images/squares.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/globalActions";
import {
  fetchMoreProducts,
  fetchProducts,
} from "../store/actions/productActions";
import { useForm } from "react-hook-form";

import { sortProducts } from "../store/actions/sortingActions";

export default function ProductListPage() {
  const { products, loading, total } = useSelector(
    (store) => store.product.products
  );
  const categoriesData = useSelector((store) => store.global.categories);
  const sortOption = useSelector((store) => store.sort.sortOption);

  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (data) => {
    setIsLoading(true);
    dispatch(fetchMoreProducts(data))
      .then(() => {
        
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching next page:", error);
        setIsLoading(false);
        setHasMore(false);
      });
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts({ offset }));
    //url params part
    const newUrl = new URL(window.location);
    newUrl.searchParams.set("sort", sortOption);
    window.history.pushState({}, "", newUrl);
  }, [dispatch, offset, sortOption]);

  const handleSortChange = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  // TODO convert imgs to icons
  return (
    <main>
      <section className="flex flex-col md:flex-row flex-wrap gap-3.5 items-center px-[15%] py-6 justify-between">
        <div className=" flex ">
          {/* TODO convert h2-shop to Link and give shop's path */}
          <h2 className="text-center text-2xl font-bold text-[#252B42] bg-[#FAFAFA]">
            Shop
          </h2>
        </div>
        {/* TODO add breadcrumbs */}
        <div className="centered flex flex-row gap-4 ">
          <p className="text-center text-sm font-bold text-[#252B42]">Homes</p>
          <FontAwesomeIcon icon={faAngleRight} style={{ color: "#c0c1c4" }} />
          <p className="text-center text-sm font-bold text-[#BDBDBD]">Shop</p>
        </div>
      </section>
      <CategoryCard />

      <section className="filter-row flex items-center justify-center self-stretch bg-[#FFF] ">
        <div className="flex flex-col py-6 gap-20 w-[1440px]">
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 md:justify-between">
            <div className="flex px-px items-center text-[#737373]">
              <h2 className="text-sm font-bold text-[#737373] ">
                Showing all 12 results
              </h2>
            </div>

            <div className="flex px-px items-center gap-3.5">
              <p className="text-sm font-bold text-[#737373]">Views:</p>

              <button className="flex p-4 items-center border-2 border-solid border-[#ECECEC] rounded ">
                <img src={squares} alt="Squares" />
              </button>

              <button className="flex p-4 items-center border-2 border-solid border-[#ECECEC] rounded">
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>
            {/* TODO create sort and filter */}
            <div className="flex flex-row gap-4">
              <div className="filterButton flex w-[94px] flex-col items-center justify-center gap-2.5 px-5">
                {/* <form className="flex" onSubmit={handleSubmit(onSubmit)}> */}
                <label className="flex border-2 items-center p-2">
                  <p className="text-[#737373] text-sm font-bold">Category</p>
                  <select {...register("category")}>
                    {categoriesData.map((category) => (
                      <option
                        key={category.id}
                        value={category.id}
                        className="text-[#737373] text-sm font-bold"
                      >
                        {category.id}
                        {category.code}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex border-2 items-center p-2 gap-2.5 ">
                  <select
                    {...register("sort")}
                    className="w-[100px]"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option
                      value="default"
                      className="text-[#737373] text-sm font-bold"
                    >
                      Sort By
                    </option>
                    <option
                      value="ascendingPrice"
                      className="text-[#737373] text-sm font-bold"
                    >
                      PRICE: Low to High
                    </option>
                    <option
                      value="descendingPrice"
                      className="text-[#737373] text-sm font-bold"
                    >
                      PRICE: High to Low
                    </option>
                    <option
                      value="ascendingRating"
                      className="text-[#737373] text-sm font-bold"
                    >
                      RATING: Low to High
                    </option>
                    <option
                      value="descendingRating"
                      className="text-[#737373] text-sm font-bold"
                    >
                      RATING: Low To High
                    </option>
                  </select>
                </label>

                <div className="flex flex-row gap-2.5">
                  <label className="flex border-2 items-center p-2 text-[#737373] font-bold gap-2.5">
                    <input
                      type="text"
                      {...register("filter")}
                      className="w-20"
                      placeholder="Search"
                    />
                  </label>
                  <button
                    type="submit"
                    className="border-[#23A6F0] w-20 bg-[#23A6F0] text-white rounded"
                  >
                    Search
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center items-center px-40 bg-[#fff]">
        <div className="flex flex-col py-12 items-center">
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <div class="loadingSpinner text-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <InfiniteScroll
              dataLength={products?.length ?? 0}
              next={() =>
                fetchData({
                  offset: 25,
                })
              }
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>No more products to load!</b>
                </p>
              }
              className="flex flex-col"
            >
              <div className="flex flex-row flex-wrap gap-8 items-start justify-center max-w-[1440px]">
                {products?.map((data, index) => {
                  return <ProductCard data={data} key={data.id} />;
                })}
              </div>
            </InfiniteScroll>
          )}
        </div>
      </section>
      <Client />
    </main>
  );
}
