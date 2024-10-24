import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SubscribeCard from "./SubscribeCard";
import Logo from "../assets/images/Logo.png";
import facebook from "../assets/images/facebook.webp";
import twitter from "../assets/images/twitter.webp";
import instagram from "../assets/images/instagram.webp";
import linkedin from "../assets/images/linkedin.webp";
import { Link, useNavigate } from "react-router-dom";

const companyItems = [
  "About Us",
  "Blog",
  "Support",
  "Privacy Policy",
  "Terms & Conditions",
];

const quickLinks = [
  { label: "Features", href: "#features", isScroll: true }, // Mark as scroll
  { label: "Team", href: "/team" },
  { label: "Mobile App", href: "/mobile-app" },
  { label: "Shop", href: "/shop" },
];

const socialIcons = [
  { src: facebook, alt: "Facebook" },
  { src: twitter, alt: "Twitter" },
  { src: instagram, alt: "Instagram" },
  { src: linkedin, alt: "LinkedIn" },
];

const Footer = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const featuresElement = document.getElementById("features");
      featuresElement?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Grid
      container
      bgcolor={"#000000"}
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
    >
      <Grid item md={3} sm={3} display={"flex"} justifyContent={"center"}>
        <Stack spacing={2}>
          <img
            src={Logo}
            alt="logo"
            objectFit="fill"
            width={"99px"}
            height={"48px"}
          />
          <Typography variant="h5">
            The all-in-one business card for the modern professional. Network
            smarter, connect deeper, and grow your business faster.
          </Typography>
        </Stack>
      </Grid>
      <Grid item md={5} sm={5} display={"flex"} justifyContent={"center"}>
        <Stack direction={"row"} spacing={8}>
          <Stack spacing={2}>
            <Typography variant="h3">Company</Typography>
            {companyItems.map((item, index) => (
              <Typography key={index} variant="h6" color="text.secondary">
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h3">Quick Links</Typography>
            {quickLinks.map((item, index) => (
              item.isScroll ? (
                <Typography
                  key={index}
                  onClick={scrollToFeatures}
                  sx={{
                    cursor: "pointer",
                    color: "text.secondary",
                    "&:hover": { color: "#A6A074" },
                  }}
                >
                  {item.label}
                </Typography>
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="h6" color="text.secondary">
                    {item.label}
                  </Typography>
                </Link>
              )
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={4} sm={4} display={"flex"} justifyContent={"center"}>
        <SubscribeCard />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ borderColor: "#A7A7A7", mt: 2 }} />
      </Grid>{" "}
      <Grid item xs={12}>
        <Stack padding={2} direction={"row"} justifyContent={"space-between"}>
          <Typography>© 2023. All rights reserved.</Typography>
          <Stack spacing={2} direction={"row"}>
            {socialIcons.map((icon, index) => (
              <Box
                key={index}
                component="img" 
                src={icon.src}
                alt={icon.alt}
                sx={{
                  cursor: "pointer",
                  width: {
                    xs: "18px",
                    md: "18px",
                    sm: "18px",
                    lg: "24px",
                  },
                  height: {
                    xs: "18px",
                    md: "18px",
                    sm: "18px",
                    lg: "24px",
                  },
                }}
              />
            ))}
          </Stack>{" "}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
