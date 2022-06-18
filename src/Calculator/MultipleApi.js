import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import LoadingSniper from "../Components/LoadingSniper";

const MultipleApi = () => {
  // state
  const [mypost, setMypost] = useState([]);
  const [myalbum, setMyalbum] = useState([]);
  // loading state
  const [loading, setLoading] = useState(false);
  const [myquotes, setMyquotes] = useState([]);

  const fetchApi = () => {
    const postApi = "https://jsonplaceholder.typicode.com/posts";
    const albumApi = "https://fakestoreapi.com/products";
    const QuotesApi =
      "https://goquotes-api.herokuapp.com/api/v1/random?count=10";

    axios
      .all([axios.get(postApi), axios.get(albumApi), axios.get(QuotesApi)])
      .then(
        axios.spread((postRes, albumRes, quotesRes) => {
          setMypost(postRes.data);
          setMyalbum(albumRes.data);
          // console.log("post related data", postRes.data);
          // console.log("album related data", albumRes.data);
          // console.log("Quotes related data", quotesRes.data.quotes);
          setMyquotes(quotesRes.data.quotes);
          setLoading(false);
        })
      )
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchApi();
  }, []);

  return (
    // if loading is true, show loading sniper
    loading ? (
      <>
        <LoadingSniper />
      </>
    ) : (
      <Container>
        <h4 className="text-center">Quotes Of The day</h4>
        {/* add qoutes in the carousal */}
        <Carousel interval={5000}>
          {myquotes.map((quote) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/564x/3e/59/a4/3e59a4f453e16dd6691b90987a9f3700.jpg"
                  alt="First slide"
                  width={600}
                  height={500}
                />
                <Carousel.Caption>
                  <h3> "{quote.text} "</h3>
                  <p>{quote.author}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>

        {/* <center>
          <div>MultipleApi</div>
          {mypost.map((post) => (
            <div key={post.id}>
              <h6>
                <div>{post.userId}</div>
              </h6>
              <div>{post.title}</div>
              <div>{post.body}</div>
            </div>
          ))}
        </center> */}
        {/* <h4>Album</h4>
        <center>
          {myalbum.map((album) => (
            <div key={album.id}>
              <div>{album.image}</div>
              <img src={album.image} alt="album" />
              price: {album.price}
            </div>
          ))}
        </center> */}
      </Container>
    )
  );
};

export default MultipleApi;
