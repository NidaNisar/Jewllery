import React from 'react';
 import main2 from '../../pictures/main2.jpg'
  import main4 from '../../pictures/main4.jpg'
    import main3 from '../../pictures/main3.jpg'
     import main7 from '../../pictures/main7.jpg'
          import main1 from '../../pictures/main1.jpg'
             import main6 from '../../pictures/main6.jpg'
                  import main8 from '../../pictures/main8.jpeg'
                       import main9 from '../../pictures/main9.jpeg'
                            import main10 from '../../pictures/main10.jpeg'

import "./items.css"
const Items = () => {
  return (
    <div>
        <div className='heading-main'>
                  <h1>Elevate Your Look - Our Artifical Collection Has Arrived</h1>
        </div>
        <div className='itemss'>
            
            <div className='item-img'>
                   <img src={main2} alt=''/>
                   <p>Earrings</p>
            </div>
                <div className='item-img'>
                    <img src={main4} alt=''/>
                    <p>Necklaces</p>
                </div>
                <div className='item-img'> <img src={main10} alt=''/>
                           <p>Rings</p>
                </div>
                 <div className='item-img'> <img src={main6} alt=''/>
                 <p>Watches</p>
                 </div>
                 <div className='item-img'> <img src={main8} alt=''/>
                 <p>Rings set</p></div>
                 <div className='item-img'> <img src={main9} alt=''/>
                  <p>Braclets</p></div> 
                  
                    
                  {/* <img src={main6} alt=''/>
                  <img src={main1} alt=''/>
                  <img src={main3} alt=''/>
            */}
           
             
        </div>

    </div>
  );
}

export default Items;
