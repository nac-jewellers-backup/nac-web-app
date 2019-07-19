import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ProductCard from './index';
import {dataCard} from './ProductData';
let colSize;



class ProductLayout extends Component
{
  constructor(props){
    super(props)
    this.state={
      colSize:window.innerWidth
    }
  }
  componentDidMount() {
    console.log(this.state.height);
    this.screenWidth()
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.screenWidth);
  }
   screenWidth =()=>{
    const width=window.innerWidth;
    if(width>2555)
    {
     this.setState({colSize:6}) 
    }
    else if(width>1440)
    {
      this.setState({colSize:4}) 
    }
    else if(width>760)
    {
      this.setState({colSize:3}) 
    }
    else if(width<760)
    {
      this.setState({colSize:1}) 
    }
  
  }
  render(){
 
console.log(dataCard)
  return (
    <div className="productLayoutRoot" >
      <GridList  cellHeight={"auto"} className="productLayoutGridList" cols={this.state.colSize} >
        {dataCard.map(tile => (
          <GridListTile key={tile.title} cols={tile.cols || 1} style={{height:'auto',paddingTop:'2%'}} >
            
           <ProductCard data={tile} />
          </GridListTile>
        ))}

      </GridList>
    </div>
    
  );
}
  
}
export default ProductLayout