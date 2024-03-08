import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CategoryCard() {
  // 1. storedan category datasını çek
  const categoryData = useSelector((store) => store.global.categories);

  const topCategories = [...categoryData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  //TODO There is a glitch in the data fetching phase
  //TODO Complete responsive design
  //TODO Currently, categories listed by only rating rate, so we see same category for both man and women
  return (
    <section className="flex flex-col flex-wrap shrink-0 sm:flex-row gap-4 pb-8 px-8 justify-center items-center bg-[#FAFAFA]">
      {topCategories?.map((data, index) => {
        return (
          <div
            className="flex flex-col items-center justify-center w-[300px] h-[300px]"
            key={index}
          >
            <Link
              to={`/shopping/${
                data.gender === "k" ? "kadın" : "erkek"
              }/${data.title.toLowerCase()}`}
              className="w-full h-full flex items-center justify-center"
            >
              <div
                className="w-full h-full bg-center bg-cover flex items-center justify-center cursor-pointer duration-200 transition opacity-100 hover:opacity-60"
                style={{ backgroundImage: `url(${data.img})` }}
              >
                <div className=" flex flex-col gap-2 text-center">
                  <p className="text-lg font-bold text-white uppercase">
                    {data.title}
                  </p>
                  <p className="text-base font-bold text-white">
                    {data.rating}
                  </p>
                  <p className="text-base font-bold text-white">{data.id}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
