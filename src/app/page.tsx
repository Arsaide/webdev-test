import Goods from "@/components/pages/main-page/goods/Goods";
import Basket from "@/components/pages/main-page/basket/Basket";

export default function Home() {
  return (
    <>
      <div className='container'>
        <Goods/>
        <Basket/>
      </div>
    </>
  )
}
