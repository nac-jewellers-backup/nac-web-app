import React from "react";
import "./rating.css";
import { ProductDetailContext } from 'context/ProductDetailContext';
// const Star = ({ selected = false, onClick = f => f }) =>
//     <div onClick={onClick}>
//         {selected ? <div class="star-rating" >
//             <input type="radio" />
//             <label for="1-stars" class="star">&#9733;</label>
//         </div> : <div class="star-rating">
//                 <input type="radio" />
//                 <div for="1-stars" >&#9733;</div>
//             </div>}
//     </div>


// const Ratings = (props) => {
//     const { ProductDetailCtx: { ratingcounts, setratingcountsclear }, setratingcounts } = React.useContext(ProductDetailContext);
//     return <Component setratingcounts={setratingcounts}  {...props} ratingcounts={ratingcounts} setratingcountsclear={setratingcountsclear} />
// }

// class Component extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             starsSelected: ''
//         }
//         this.change = this.change.bind(this)
//     }
//     change(starsSelected) {
//         this.props && this.props.clear_rating_onchange && this.props.clear_rating_onchange(false)
//         this.setState({ starsSelected })
//         this.props.setratingcounts({ ratingcounts: starsSelected })
//         if (this.props && this.props.setratingcountsclear && this.props.setratingcountsclear.length > 0) {
//             this.setState({ starsSelected: "" })
//         }
//     }


//     componentWillReceiveProps(nextProps) {
        
//         if (nextProps.clear_rating && nextProps.clear_rating.length > 0) {
//             this.setState({ starsSelected: "" })
//         }
//     }
//     render() {
//         const { starsSelected } = this.state;

//         return (
//    <>
//    <div class={this.props.ratings}>
//                 {[1, 2, 3, 4, 5].map((n, i) =>
//                     <Star key={i}
//                         selected={i < starsSelected}
//                         onClick={() => this.change(this.props.disable === "disable" ? "" : i + 1)}
//                     />
//                 )}
//             </div>
// </>
//         )
//     }
// }


// Dhivagar Change start
const Star = ({ selected = false, onClick = f => f }) =>
    <div onClick={onClick}>
        {selected ? <div class="star-rating" >
            <input type="radio" />
            <label for="1-stars" class="star">&#9733;</label>
        </div> : <div class="star-rating">
                <input type="radio" />
                <div for="1-stars" >&#9733;</div>
            </div>}
    </div>


const Ratings = (props) => {
    const { ProductDetailCtx: { ratingcounts, setratingcountsclear }, setratingcounts } = React.useContext(ProductDetailContext);
    return <Component setratingcounts={setratingcounts}  {...props} ratingcounts={ratingcounts} setratingcountsclear={setratingcountsclear} />
}

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: 0,
        }
        this.change = this.change.bind(this)  
    }
    change(starsSelected) {
       // Check if the first star is already selected and clicked again
  if (this.state.starsSelected === 1 && starsSelected === 1) {
    this.setState({ starsSelected: 0 }); // Reset to zero
  } else {
    this.props && this.props.clear_rating_onchange && this.props.clear_rating_onchange(false);
    this.setState({ starsSelected });
    this.props.setratingcounts({ ratingcounts: starsSelected });
  }
    }


    componentWillReceiveProps(nextProps) {
        
        if (nextProps.clear_rating && nextProps.clear_rating.length > 0) {
            this.setState({ starsSelected: 0 })
        }
    }
    render() {
        const { starsSelected } = this.state;

        return (
   <>
   <div class={this.props.ratings}>
                {[1, 2, 3, 4, 5].map((n, i) =>
                    <Star key={i}
                        selected={i < starsSelected}
                        onClick={() => this.change(this.props.disable === "disable" ? 0 : i + 1)}
                    />
                )}
            </div>
</>
        )
    }
}
// Dhivagar Change end

export default Ratings;