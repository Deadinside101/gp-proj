import React ,{useEffect, useState} from "react";
import './style.js' ;
import axios from "axios";
import { Link } from "react-router-dom";
import { ImageWrapper, Overlay, OverlaySpan,  PortfolioSection, PortfolioTitle ,Image} from "./style.js";
const Third_Section =()=>{

    const [images , setImages] = useState ([])

    useEffect( ()=> {
        axios.get('js/data.json').then(res => {setImages (res.data.portfolio)})
    } ,[] )

    const PortfolioImages =images.map((imageItem) =>{
        return(
            <ImageWrapper key={imageItem.id}>
            <Image src={imageItem.image} alt=""/>
            <Overlay>
                <Link to={{pathname: "/Understanding_Autism" + imageItem.id}} > 
                <OverlaySpan>
                <h1>{imageItem.Header}</h1>
                {imageItem.Desc}
                </OverlaySpan>
                </Link>
            </Overlay>
        </ImageWrapper>
        )

    })
    return(
        
          <PortfolioSection>
            <PortfolioTitle><i class="fa fa-comments-o" aria-hidden="true"></i> FAQ about Autism</PortfolioTitle>
            <div className="box">
               {PortfolioImages} 
            </div>
        
        
        </PortfolioSection>
    )}

export default Third_Section ;