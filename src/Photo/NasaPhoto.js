import React from "react";
import "../App.css";
import styled from "styled-components";
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
  

  
  
function NasaPhoto(props)  {

      // Create a Title component that'll render an <h1> tag with some styles
        // const Title = styled.h1`
        // font-size: 1.5em;
        // text-align: center;
        // color: palevioletred;
        // `;

        // Create a Wrapper component that'll render a <section> tag with some styles
        // const Wrapper = styled.section`
        // padding: 4em;
        // background: papayawhip;
        // `;
        // need to get this associated with the <PhotoCard> that will be used below.

        

        const Photo = styled.img`
            width: 80%;
          
            object-fit: scale;
            flex-shrink: 2;

        `
        const Descriptions = styled.div`

            display: flex;
            // margin-top: 30px;
            width: 90%;
            flex-direction: column;
            justfy-content: flex-start;
            align-items: flex-start;
            border: 1px dashed black;
            background-color: lightblue;
            margin-top: 20px;
            p {
                // width: 80%;
                padding-left: 5%;
                padding-right: 5%;

                text-align: left;
            }

        `
        const PhotoCard = styled.div`
        
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            /* seems to keep the width scaling */
            max-width: 900px;
        `
          
    const photoOrVideo = (props) => {

        if(props.nasaData.media_type === "image"){
            return (

            <Photo src={props.nasaData.hdurl}></Photo>
            // <img className="nasaPhoto" src={props.nasaData.hdurl}></img>
            );

        } else {
            return (
                <video max-width="900">
                    <source src={props.nasaData.hdurl} type={props.nasaData.media_type} />
                    Your browser does not support HTML5 video.
                </video>
            )
        }
    }

    // comes from useEffect
    if(!props.nasaData)
    {
        return <p>Loading...</p>;

    }
    else {
        // now we have data to use in our jsx tags
        console.log(props)
        return (

        //     <Wrapper>
        //     <Title>
        //       Hello World!
        //     </Title>
        //   </Wrapper>


            // <div>
            //     <Card>
            //         <CardImg  src={props.nasaData.hdurl} alt="Card image cap" />
            //         <CardBody>
            //         <CardTitle>Card title</CardTitle>
            //         <CardSubtitle>Card subtitle</CardSubtitle>
            //         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            //         <Button>Button</Button>
            //         </CardBody>
            //     </Card>
            //     </div>

            <PhotoCard>
            {/* // <div className="photoCard"> */}
    
                {photoOrVideo(props)}
                <Descriptions>
                    <p><span className="description">Name: </span>{props.nasaData.title}</p>

                    <p><span className="description">Description: </span>{props.nasaData.explanation}</p>

                </Descriptions>
    
            </PhotoCard>

            // </div>
    
    
        );
    }
    


}
export default NasaPhoto;