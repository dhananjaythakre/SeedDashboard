import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { Icon } from '@iconify/react';
import mainlogo from "../../assets/img/taru_trace_logo.png";

function AdminNavbar({ brandText }) {
  const location = useLocation();
  const navigate = useNavigate();

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("rememberedEmail");
    localStorage.removeItem("rememberedPassword");
    navigate("/Login");
  };

  return (
    <Navbar
      expand="lg"
      // style={{
      //   backgroundColor: "#f8f9fa", // Light grey background
      //   borderBottom: "1px solid #e7e7e7", // Optional: subtle border bottom
      //   boxShadow: "0 2px 4px rgba(0,0,0,.04)", // Optional: subtle shadow
      //   width: "100%", // Ensures it stretches full width
      //   padding: "0.5rem 1rem", // Standard padding
      // }}
    >
      <Container fluid>
       
        <div className="d-flex w-100 justify-content-between align-items-center px-4">
          {/* Left section: Mobile Toggle (if needed) and Brand */}
          <div className="d-flex align-items-center">
            {/* <Button
              variant="dark"
              className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
              onClick={mobileSidebarToggle}
              style={{ marginRight: "10px" }}
            >
              <i className="fas fa-ellipsis-v"></i>
            </Button> */}
            <Navbar.Brand
              href="#" // You can put your dashboard link here if brand is clickable
             
            >
            <img
              src={mainlogo}
              alt="Logo"
              style={{ maxHeight: "50px", width: "auto" }}
            />
              {/* {brandText || "Admin Panel"} */}
            </Navbar.Brand>
          </div>

          <div className="d-flex align-items-center">
            {/* Navbar Toggle for small screens (appears before collapse) */}
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none ml-2">
              <span className="navbar-toggler-bar burger-lines"></span>
              <span className="navbar-toggler-bar burger-lines"></span>
              <span className="navbar-toggler-bar burger-lines"></span>
            </Navbar.Toggle> */}

            {/* Navbar Collapse content - this will handle items when expanded or on large screens */}
            <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
              {/* Nav items pushed to the right using ml-auto within the collapse */}
              <Nav className="ml-auto">
                <Nav.Item>
                  <Button className="new-user-button"
                    variant="link"
                  >                    
                    Add New User
                  </Button>                  
                  <Button
                    variant="link"
                    onClick={handleLogout}
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      fontWeight: "500",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    <i className="fas fa-sign-out-alt" style={{ marginRight: "5px" }}></i>
                    Logout <Icon icon="streamline-sharp:logout-2-remix" width="14" height="14" />
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;