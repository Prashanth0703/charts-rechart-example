import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
function NavbarComp() {
    const handleAuth = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("user");
            alert("You have been logged out successfully!");
            window.location.href = "/login";
        });
    };
    return (
        <Navbar style={{ width: "100%" }} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Vehicle Monitoring</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/login">
                        {localStorage.getItem("user")
                            ? `${localStorage.getItem("user")}`
                            : "Login"}
                    </Nav.Link>
                    <Nav.Link onClick={handleAuth}>
                        {localStorage.getItem("user") ? "Logout" : ""}
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;
