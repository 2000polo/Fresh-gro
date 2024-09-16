import React from 'react'

const ProductCard = (props) => {

    const { img } = props

  return (
    // <div className="card card-compact bg-base-100 w-76 shadow-xl">
    //     <figure>
    //         <img
    //         src={img}
    //         alt="Shoes" 
    //         className='h-250'/>
    //     </figure>
    //     <div className="card-body">
    //         <h2 className="card-title">Shoes!</h2>
    //         <p>If a dog chews shoes whose shoes does he choose?</p>
    //         <div className="card-actions justify-end">
    //         <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //     </div>
    // </div>
    <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
        <img src={img} alt=""/>
        <div className="space-x-1 flex justify-center mt-10">
            <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14">
                <path
                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                </path>
            </svg>
            <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14">
                <path
                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                </path>
            </svg>
            <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14">
                <path
                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                </path>
            </svg>
            <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14">
                <path
                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                </path>
            </svg>
            <svg className="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14">
                <path
                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                </path>
            </svg>
        </div>
        <h1 className="text-3xl my-5">Product Name</h1>
        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!</p>
        <h2 className="font-semibold mb-5">$29.99</h2>
        <button className="p-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700">Add To Cart</button>
    </section>
  )
}

export default ProductCard