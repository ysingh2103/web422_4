import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

export default function MainNav() {
  const router = useRouter()
  //This form is using Controlled Component with useState. To see the demonstration of using React-Hook-Form, please check /pages/search.js
  const [keyword, setKeyword] = useState("")
  function submitForm(e) {
    e.preventDefault()
    router.push(`/artwork?title=true&q=${keyword}`)
  }

  return (
    <>
      <Navbar bg="info" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand>
              <Nav.Link>Yuvraj Singh</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link>Advanced Search</Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex" onSubmit={submitForm}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button type="submit" variant="secondary" >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  )
}
