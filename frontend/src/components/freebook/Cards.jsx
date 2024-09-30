import React from 'react'

function Cards({ item }) {
    return (
        <> 
        <div className='mt-4 my-3 '>
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio, ducimus vel corporis amet quos illum illo esse aspernatur, consectetur odio ab expedita sit at dolorum accusamus modi minima reiciendis.</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="badge badge-outline rounded-lg border-[2px] hover:bg-pink-400 text-black">Buy Now</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cards