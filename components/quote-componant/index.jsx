// @flow
import * as React from "react";
import { Carousel } from 'antd';
import styles from './styles.module.scss'
const QuoteComponent = (data) => {
  return (
    <div className="row">
      <div className="col-md-6 mt-10">
        <div>

       
        <h2 className={styles.price}>{data.data.price}</h2>
        <p>{data.data.step}</p>
        <ul className="textQuote">
          {
            data.data.text.map((item)=>(<li>{item}</li>))
          }
        </ul>
      </div>
      </div>
      <div className="col-md-6 mt-10">
      <Carousel autoplay>
        {
          data.data.img.map((item)=>(
            <img className={styles.img} src={item} alt={item} />
          ))
        }

  </Carousel>,
      </div>
      
    </div>
  );
};
export default QuoteComponent;
