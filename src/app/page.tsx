import FilterPanel from "@/components/pages/main-page/goods/filter-panel/FilterPanel";
import Basket from "@/components/pages/main-page/basket/Basket";

export default function Home() {
  return (
    <>
      <div className='container'>
        <FilterPanel/>
        <Basket/>
      </div>
    </>
  )
}
