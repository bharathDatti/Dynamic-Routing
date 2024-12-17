import React from 'react'
import { Data } from '../data/products'
import { useLocation,useNavigate } from 'react-router-dom'

const Products = () => {
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)
    const queryparams = new URLSearchParams(location.search) // this helps us in destructuring the query params
    console.log(queryparams)
    // extract the parameters
    const category = queryparams.get("category")
    const sort = queryparams.get("sort")

    // filtering the products
    const filteredProducts = Data.filter((product)=>category?product.category===category:true)
    console.log(filteredProducts)

    // sorting the products
    if(sort === 'asc'){
        filteredProducts.sort((a,b)=>a.price-b.price)
    }else if(sort==="des"){
        filteredProducts.sort((a,b)=>b.price-a.price)
    }


    function HandleFilter(key,value){
        if(value){
            queryparams.set(key,value)
        }else{
            queryparams.delete(key)
        }
        navigate(`?${queryparams.toString()}`)
    }

  return (
    <div className='container'>
        <h1 id='promain'>Shop The Best Winter Deals</h1>

        {/* category filter section start */}
        <div className='category'>

            <h3 id='prosub'>Filter by category</h3>

        {/* button start */}
            <div className="btn-group flex align-center" role="group" aria-label="Basic example">
                <button type="button" onClick={()=>HandleFilter("category","men's clothing")} id='cat1' className="btn cat">Mes's Clothing</button>
                <button type="button" onClick={()=>HandleFilter("category","women's clothing")} id='cat2' className="btn">Women's Clothing</button>
                <button type="button" onClick={()=>HandleFilter("category","electronics")} id='cat3' className="btn">Electronics</button>
                <button type="button" onClick={()=>HandleFilter("category","jewelery")} id='cat4' className="btn">Jewelery</button>
                <button type="button" onClick={()=>HandleFilter("category","")} id='cat5' className="btn">ALLProducts</button>
            </div>
        {/* button end */}

        </div>
        {/* category filter section end */}

        {/* sorting buttons start */}

        <div className='sort-products'>
            <div className="btn-group mt-3 mb-3" role="group" aria-label="Basic example">
                <button type="button" onClick={()=>HandleFilter("sort","asc")} id='sort1' className="btn btn-success">Low to High</button>
                <button type="button" onClick={()=>HandleFilter("sort","des")} className="btn btn-danger">High to Low</button>
            </div>
        </div>

        {/* sorting buttons end */}

        {/* products start */}

        <div className='row gy-3'>
            {
                filteredProducts.length>0?filteredProducts.map((ele)=>(
                
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                    <div className='card shadow p-3'>
                        <img src={ele.image} alt="" width={"100%"} height={"150px"}/>
                        <h3 className='card-title'>{ele.title.slice(1,15)}</h3>
                        <p className='card-text'>{ele.price}</p>
                    </div>
                    </div>
                    
                )):"No-products Found"
            }
        </div>
        {/* products end */}
    </div>


  )
}

export default Products