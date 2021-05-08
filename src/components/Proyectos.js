import React from "react";
import { Row } from "react-bootstrap";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import slides from "./ProyectosAdd";


export const Proyectos = () => {

  

	return (
		<div className="proyect__container" id="proyect">
			<Row className="">
				<i>
					<h2 className="proyect__title">"Estos son mis proyectos"</h2>
				</i>
			</Row>
			<Row className="proyect__row-carousel">
        <Carousel
          plugins={[
            'infinite',
            'arrows',
            'centered',    
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 2
              }
            },

          ]}
          breakpoints={{
            640: {
              plugins: [
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 1
                 }
               },
             ]
            },
            900: {
              plugins: [
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 2
                 }
               },
             ]
            }
          }}
        
          animationSpeed={400}
          itemWidth={430}
          slides={slides}
        /> 
        
        
			</Row>
		</div>
	);
};
