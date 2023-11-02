/*********************************************************************************
 *  WEB422 – Assignment 4
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Yuvraj Singh    Student ID: 156150211   Date: 
 *  
 ********************************************************************************/
import { Image } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
            fluid
            rounded
            alt="Assignment 4"
          />
          <br />
          <br />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <p>
          The Metropolitan Museum of Art, commonly known as the Met, is one of the most renowned art museums in the world. Located in New York City, it is situated on the eastern edge of Central Park along Fifth Avenue. The museum was established in 1870 and has since become a cultural landmark, housing an extensive collection of art spanning over 5,000 years.
          The Met's collection includes artworks from various civilizations and cultures, including ancient Egyptian, Greek, Roman, African, Asian, and Islamic art. It also features European paintings, sculptures, decorative arts, and American art from different periods. Notable masterpieces in the museum's collection include Vincent van Gogh's "Self-Portrait with a Straw Hat," Leonardo da Vinci's "Study of a Young Woman," and Auguste Rodin's "The Thinker."
          </p>

          <p>
          In addition to its permanent collection, the Met hosts temporary exhibitions that showcase diverse themes and artists. The museum's architecture is also noteworthy, with its iconic Beaux-Arts facade and grand entrance steps.
          The Met offers a range of educational programs, guided tours, lectures, and workshops for visitors of all ages. It also has a research library and a conservation department dedicated to preserving and studying the artworks.
          </p>
          <p>With its vast collection and rich history, the Metropolitan Museum of Art continues to be a prominent institution that attracts millions of visitors each year, providing a unique and immersive experience in the world of art and culture.
          </p>
        </Col>
        <Col md={6}>
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
              target="_blank"
              rel="noreferrer"
            >
              https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art
            </a>
          </p>
        </Col>
      </Row>
    </>
  )
}
