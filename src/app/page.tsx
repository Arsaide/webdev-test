import FilterPanel from "@/components/pages/main-page/filter-panel/FilterPanel";
import GoodsList from "@/components/pages/main-page/goods/Goods";
import Basket from "@/components/pages/main-page/basket/Basket";

export default function Home() {
  return (
    <>
      <div className='container'>
        <FilterPanel/>
        <GoodsList/>
        <Basket/>
      </div>
    </>
  )
}
