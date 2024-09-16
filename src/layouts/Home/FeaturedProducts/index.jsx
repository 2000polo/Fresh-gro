import React from 'react'
import ProductCard from '../../../components/ProductCard'

const FeaturedProducts = () => {
  return (
    <div className='px-24 '>
        <h1 className='text-2xl font-semibold mb-4'>Featured Products</h1>
        <div className="grid grid-cols-4 space-between gap-4">
            <ProductCard img={"https://littlebirdorganics.co.nz/cdn/shop/files/ActivatedNuts-BBQSQUARE_600x.jpg?v=1697166627"} />
            <ProductCard img={"https://th.bing.com/th/id/R.b08d7d0bb320311d1e2a9d7ee403c792?rik=9SgDM0HHZlcPrQ&riu=http%3a%2f%2fwww.snackthat.co%2fcdn%2fshop%2fproducts%2f4.jpg%3fv%3d1677825882&ehk=N5PQKPeCYmpoU4G%2bJyEodo885PNT3Is6HkHaEu%2bt9DU%3d&risl=&pid=ImgRaw&r=0"} />
            <ProductCard img={"https://th.bing.com/th/id/OIP.zwmlCuXlONqihGF-pmQDKwHaHa?w=626&h=626&rs=1&pid=ImgDetMain"} />
            <ProductCard img={"https://cdn.shopify.com/s/files/1/0145/1932/products/vanilla_front_600x.jpg?v=1625046311"} />
        </div>
    </div>
  )
}

export default FeaturedProducts