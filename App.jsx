import React from 'react'; 
 
class App extends React.Component { 

      componentDidMount() {
        fetch('http://localhost:4000/admin/products')
        .then(res => res.json())
        .then((data) => {
          this.setState({ products: data });
		  console.log("products data:");
		  console.log(data);
        })
        .catch(console.log)
      }


	constructor(props){
		super();
		this.state = {
			hero: "Superman",
			products: []
		};
		
	}

	
   render() { 
   
		function myClick(e) {
			alert("Hello World!");
		}	
	   
   
      return ( 
         <div> 
		 
		 {/* A JSX comment 

            Hello World!!! 
			<br /><br />
			
			{this.state.hero}
			<br /><br />
		*/}	
		
		{/* onClick={()=>{ alert('alert'); }}  */ }
			
          {this.state.products.map((product) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{product.category}</h6>
                <p class="card-text">${product.price}</p>
				<p class="card-text">{product.vendor}</p>
				<p class="card-text">{product.imageUrl}</p>
				<p><button type="button" class="btn btn-primary"  onClick={myClick} >Add to Cart</button></p>
              </div>
            </div>
          ))}	
			
         </div> 
      ); 
   } 
} 
export default App;