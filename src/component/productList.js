import React from 'react';
let PRODUCTLIST=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronic", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  class products extends React.Component{
      render(){
          return (
              <FilterableProductTable products={PRODUCTLIST} />
          )
      }
  }
  class FilterableProductTable extends React.Component{
    render(){
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
  }
  class SearchBar extends React.Component{
    render(){
        return (
            <div>
                <input type="text" placeholder="search" /><br/>
                <input type="checkbox" />Only show products in stock
            </div>
        )
    }
  }
  class ProductTable extends React.Component{
    render(){
        let rows = []
        let lastCategory = null
        let List = this.props.products
        for(let i=0;i<List.length;i++){
            if(lastCategory!==List[i].category){
                rows.push(<ProductCategoryRow products={List[i]} />)

            }
            rows.push(<ProductRow products={List[i]} />)
            lastCategory=List[i].category
        }
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
  }
  class ProductCategoryRow extends React.Component{
      constructor(props){
        super(props)
        
      }
      handleClick(par) {
        console.log(par)
      }
    render(){
        const category = this.props.products.category
        return (
            <tr>
                <th onClick={this.handleClick.bind(this, category)}>{category}</th>
            </tr>
        )
    }
  }
  class ProductRow extends React.Component{
    render(){
        const name = this.props.products.stocked ?
            this.props.products.name :
            <span style={{color:'red'}}>{this.props.products.name}</span>
        const price = this.props.products.price
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        )
    }
  }
  export default products