import React from 'react'

const ProductBanner = () => {
  return (
    <div className='px-24 mt-10 mb-15'>
        <h1 className='text-2xl font-semibold mb-4'>Explore Our Latest Collection</h1>
        <div className="grid grid-cols-5 gap-4 sm:grid-cols-5 md:gap-6 xl:gap-6 my-6 z-1">
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-full">
                <img src="https://th.bing.com/th/id/R.0e1f119bb6413c1dc9136ed8c858d90b?rik=6lliy%2fxCHHXj%2bQ&riu=http%3a%2f%2fmockupplanet.com%2fwp-content%2fuploads%2f2021%2f04%2fFree-Top-View-Juice-Carton-Packaging-Mockup-Design.jpg&ehk=yu5e2UmdeGIJK1ZVeHQiqoXIOlteByO2x9p1zcFBGKo%3d&risl=&pid=ImgRaw&r=0" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-3xl md:ml-5 md:text-5xl font-extrabold text-white ">Balanced Diet</span>
            </a>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols1 md:col-span-3 z-1">
                <a href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
                    <img src="https://makersandallies.com/wp-content/uploads/2021/06/outpost-cannabis-package.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-5xl font-extrabold text-white">Green Salads</span>
                </a>
                <a href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4419c395290819.5e95736f6a771.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-5xl font-extrabold text-white">Green Salads</span>
                </a>
            </div>
            
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-full">
                <img src="https://img.freepik.com/premium-photo/product-packaging-design-inspiration_1013366-1955.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-start transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-5xl font-extrabold">Fresh From Farm</span>
            </a>
        </div>
    </div>
    
  )
}

export default ProductBanner