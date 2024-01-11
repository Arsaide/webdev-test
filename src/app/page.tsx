import FilterPanel from "@/components/pages/main-page/goods/filter-panel/FilterPanel";
import Basket from "@/components/pages/main-page/basket/Basket";
import SearchPanel from "@/components/pages/main-page/goods/search-panel/SearchPanel";

export default function Home() {
  return (
    <>
      <div className='container'>
          <SearchPanel/>
        <FilterPanel/>
        <Basket/>
      </div>
    </>
  )
}
