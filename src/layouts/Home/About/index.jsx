import React from 'react'

const About = () => {
  return (
    <>
        <div className="grid grid-cols-2 px-24 py-10  space-x-5">
            <img className='w-full h-300' src={'https://thumbs.dreamstime.com/b/farmer-woman-harvesting-pear-fruit-grown-organic-garden-250883973.jpg'} alt=""/>
            <div className="grid content-center ">
                <h1 className='text-4xl font-semibold mb-4'>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odit error quae nulla vel voluptates nesciunt, quam molestiae doloremque atque recusandae dicta iste, sunt eligendi libero veniam veritatis autem itaque, ex excepturi quaerat voluptas tempore! Quam commodi facere voluptate maiores pariatur tempore temporibus distinctio modi ea nobis. Natus nemo vitae dolorem sunt obcaecati aliquam necessitatibus porro numquam, eum alias corporis harum, laboriosam quam eius veritatis, impedit delectus distinctio culpa temporibus quidem ea placeat quisquam magni fugit? Possimus consequatur velit eius vel eveniet praesentium hic sint ratione, est quasi officia sunt totam alias voluptatibus accusantium libero in inventore! Doloremque, pariatur debitis.</p>
            </div>
        </div>
        <div className="grid grid-cols-2 px-24 my-10 content-center">
            <div className="grid content-center">
                <h1 className='text-4xl font-semibold mb-4'>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odit error quae nulla vel voluptates nesciunt, quam molestiae doloremque atque recusandae dicta iste, sunt eligendi libero veniam veritatis autem itaque, ex excepturi quaerat voluptas tempore! Quam commodi facere voluptate maiores pariatur tempore temporibus distinctio modi ea nobis. Natus nemo vitae dolorem sunt obcaecati aliquam necessitatibus porro numquam, eum alias corporis harum, laboriosam quam eius veritatis, impedit delectus distinctio culpa temporibus quidem ea placeat quisquam magni fugit? Possimus consequatur velit eius vel eveniet praesentium hic sint ratione, est quasi officia sunt totam alias voluptatibus accusantium libero in inventore! Doloremque, pariatur debitis.</p>
            </div>
            <img className='w-full h-300' src={'https://media.npr.org/assets/img/2023/05/05/gettyimages-1359616274_wide-af5b01ff21bd41d7420f1066212bbfa11537cb36.jpg'} alt=""/>
        </div>
    </>
  )
}

export default About