import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Nav, Form } from "react-bootstrap";
import LoadingSniper from "../Components/LoadingSniper";

const News = () => {
  const [getNews, setGetNews] = useState([]);
  const [selectCategory, setSelectCategory] = useState("Sports");
  const [getCountry, setGetCountry] = useState("in");
  const [loading, setLoading] = useState(false);

  const [myerror, setMyError] = useState("");
  // use api to get data from news api and also append the key
  const api_keys = "4846df29f9524b65a1957d71cb383d0f";
  // const country = "in";
  const api_url = `https://newsapi.org/v2/top-headlines?country=${getCountry}&category=${selectCategory}&apiKey=${api_keys}`;

  useEffect(() => {
    // data fetching starts
    // this is best practice to use useEffect there are no any missing dependencies error
    const fetchData = () => {
      axios
        .get(api_url)
        .then((res) => {
          setGetNews(res.data.articles);
          console.log(res.data.articles);
          setLoading(false);
        })
        .catch((err) => {
          // console.log(err);
          setLoading(false);
          //  show error message in alert
          // alert(err.response.data.message);
          setMyError(err);
        });
    };
    // data fetching end
    setLoading(true);
    fetchData();
  }, [selectCategory, getCountry, api_url]);

  const getValuescategory = (selectedCategory) => {
    setSelectCategory(selectedCategory);
    // console.log(selectedKey);
  };

  const selectCountryvalues = (event) => {
    // console.log(event.target.value);
    setGetCountry(event.target.value);
  };

  console.log("first", myerror.message);

  return (
    //  if loading is true, show loading sniper
    loading ? (
      <>
        <LoadingSniper />
      </>
    ) : (
      <Container>
        {myerror.message ? (
          <>
            <Card className="mt-5" border="danger">
              <Card.Header className="text-danger text-center">
                Error Notifications
              </Card.Header>
              <Card.Body className="shadow fw-bold text-danger ">
                <Card.Text className="shadow fw-bold text-danger ">
                  <Card>{myerror.response.data.message}</Card>
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        ) : null}
        {getNews.map((news, index) => {
          return (
            <Card
              key={index}
              className="text-center m-4 shadow"
              border="primary"
            >
              <Card.Header className="shadow-lg ">
                {/* show source */}
                <Form.Select
                  size="lg"
                  onChange={selectCountryvalues}
                  value={getCountry}
                >
                  {/* show selected values */}
                  <option>Select Country</option>
                  <option value="us"> United State</option>
                  <option value="ca"> Canada</option>
                  <option value="in"> India</option>
                  <option value="au"> Australia</option>
                  <option value="gb"> United Kingdom</option>
                  <option value="fr"> France</option>
                  <option value="de"> Germany</option>
                  <option value="it"> Italy</option>
                  <option value="jp"> Japan</option>
                  <option value="sa"> Saudi Arabia</option>
                </Form.Select>
                <Card.Title>
                  Source Name " {news.source.name ? news.source.name : null} "
                </Card.Title>
              </Card.Header>
              {/* <Nav variant="tabs" defaultActiveKey="/home"> */}
              <Nav
                variant="tabs"
                onSelect={getValuescategory}
                activeKey={selectCategory}
              >
                {/* show selected item */}
                <Nav.Item>
                  <Nav.Link eventKey="Sports">Sports </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Entertainment">Entertainment </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Technology">Technology </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Health">Health </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Business">Business </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Science">Science </Nav.Link>
                </Nav.Item>
              </Nav>

              <Card.Img
                variant="top"
                src={
                  news.urlToImage
                    ? news.urlToImage
                    : "https://grassworksmanufacturing.com/wp-content/themes/i3-digital/images/no-image-available.png"
                }
                // responsive image make
                className="img-fluid "
                alt="news"
              />
              <Card.Body>
                <span className="text-primary text-bold fw-bold ">
                  {" "}
                  News Title{" "}
                </span>
                <Card.Title>{news.title ? news.title : null}</Card.Title>
                <Card.Text className="text-success">
                  {/* add typography strat from center */}
                  <span className="text-center text-primary  fw-bold">
                    Descriptions{" "}
                  </span>
                  {news.description}
                </Card.Text>
                <footer className="blockquote-footer mt-2  ">
                  <cite title="Source Title">
                    Author Name {news.author ? news.author : null}
                  </cite>
                </footer>
                {/* make button side by side */}

                <div className="d-flex justify-content-between">
                  <Card.Footer className="text-muted mt-3">
                    {/* date should be in proper formate */}
                    Published Date{" "}
                    {news.publishedAt.toString().slice(0, 10)
                      ? news.publishedAt.toString().slice(0, 10)
                      : "Not Available"}
                  </Card.Footer>
                  <Card.Footer className="text-muted mt-3">
                    {/* add button for url */}
                    <Button
                      variant="primary"
                      href={news.url ? news.url : null}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Button>
                  </Card.Footer>
                  <Card.Footer className="text-muted mt-3">
                    Published Time{" "}
                    {news.publishedAt.toString().slice(11, 16)
                      ? news.publishedAt.toString().slice(11, 16)
                      : "Not Available"}
                  </Card.Footer>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    )
  );
};

export default News;
