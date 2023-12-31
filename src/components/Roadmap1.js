import React from "react";
import ButtonLink from "./ButtonLink";
import { Button } from "@mui/joy";
import "./styles/styles.css";
import "./styles/Roadmap1.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
const Roadmap1 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleImageDownload = () => {
    const imageUrl = "component/assets/RoadmapSS.pdf";

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "RoadmapSS.pdf";
        link.click();
      });
  };

  return (
    <>
      <Nav />
      <div className="flex-cont">
        <h2>Java Developer</h2>
        <h4>Step by step to became a java developer</h4>
        <div className="flex-items">
          <Button
            color="neutral"
            className="Bu-group"
            onClick={handleImageDownload}
            size="sm"
            variant="soft"
          >
            Download Roadmap
          </Button>

          <Button
            color="neutral"
            className="Bu-group"
            aria-describedby={id}
            onClick={handleClick}
            size="sm"
            variant="soft"
          >
            Suggest changes
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              Email on panchal.dn@somaiya.edu or kshitij.rp@somaiya.edu
            </Typography>
          </Popover>
        </div>
        <div className="frame">
          <div className="overlap-group">
            <svg
              className="vector"
              width="101"
              height="2"
              viewBox="0 0 101 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M99.475 0.900153C99.475 0.900153 51.975 0.900301 1.625 0.900337"
                stroke="black"
                strokeWidth="1.68701"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="img"
              width="95"
              height="134"
              viewBox="0 0 95 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M93.5499 0.875C93.5499 0.875 1.3999 76.7063 1.3999 132.925"
                stroke="black"
                strokeWidth="1.68701"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="vector-2"
              width="63"
              height="223"
              viewBox="0 0 63 223"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7609 1.35352C14.7609 1.35352 129.478 92.0305 1.68652 221.509"
                stroke="black"
                strokeWidth="1.68701"
                strokeLinecap="round"
              />
            </svg>

            <svg
              className="vector-3"
              width="473"
              height="531"
              viewBox="0 0 473 531"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M151.854 42.0007C151.854 42.0007 96.1822 13.3215 30.8103 1.51236M151.854 50.014C151.854 50.014 93.652 55.4968 28.2802 43.6877M151.854 57.6056C151.854 57.6056 93.652 101.89 28.2802 90.0806M151.854 64.3536C151.854 64.3536 93.652 146.596 28.2802 134.786M441.177 1.51236C441.177 1.51236 365.683 -4.39216 318.869 42.0007M444.551 44.953C444.551 44.953 386.771 20.9131 318.869 50.014M444.551 90.0806C444.551 90.0806 396.471 68.993 318.869 57.6056M444.551 135.63C444.551 135.63 371.588 120.447 318.869 64.3536M182.22 64.3536C182.22 64.3536 151.854 100.624 145.949 154.609M312.121 246.973C312.121 246.973 272.898 248.66 272.898 287.883M472.275 422.775C472.275 422.775 444.725 422.775 424.387 440.36M447.925 246.973C447.925 246.973 398.158 291.257 280.911 287.883M447.925 287.883C447.925 287.883 407.437 297.583 280.911 297.583M447.925 329.637C447.925 329.637 367.37 304.331 280.911 307.284M145.949 287.883C145.949 287.883 93.652 263.843 28.2802 252.034M145.949 297.583C145.949 297.583 93.652 309.392 28.2802 297.583M151.854 304.331C151.854 304.331 93.652 351.146 28.2802 339.337M160.289 307.284C160.289 307.284 93.652 397.117 28.2802 385.308M54.2754 440.35C54.2754 440.35 40.0254 439.875 1.55029 447.95M54.2754 447.95C54.2754 447.95 17.2253 452.7 1.55029 489.75M54.2754 454.125C54.2754 454.125 -2.72484 484.525 1.55029 530.125M303.686 357.894C303.686 357.894 272.898 351.146 272.898 301.379M472.275 460.3C472.275 460.3 448.05 453.65 424.387 448.9M472.275 494.025C472.275 494.025 433.325 472.65 424.387 456.975M469.9 529.65C469.9 529.65 420.5 488.325 416.225 456.975"
                stroke="black"
                strokeWidth="1.68701"
                strokeDasharray="3.37 5.9"
              />
            </svg>

            <svg
              className="vector-4"
              width="32"
              height="102"
              viewBox="0 0 32 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.751 5.26294C18.751 7.74751 20.7652 9.76164 23.2497 9.76164C25.7343 9.76164 27.7484 7.74751 27.7484 5.26294C27.7484 2.77837 25.7343 0.764235 23.2497 0.764235C20.7652 0.764235 18.751 2.77837 18.751 5.26294ZM20.7238 101.311C21.1279 101.543 21.6434 101.403 21.8751 100.999C22.1069 100.595 21.9672 100.079 21.5631 99.8475L20.7238 101.311ZM22.7861 5.96763C26.6569 8.51402 28.5642 11.2949 29.1847 14.2378C29.8111 17.2091 29.1579 20.4927 27.6035 24.0919C26.0503 27.6887 23.6358 31.5136 20.8527 35.5347C19.4633 37.5421 17.99 39.5873 16.4932 41.6714C14.9982 43.7531 13.4809 45.8722 12.012 48.0159C6.16449 56.5504 0.952208 65.6545 0.938673 74.7719C0.924954 84.0133 6.23137 92.9991 20.7238 101.311L21.5631 99.8475C7.3762 91.7109 2.61319 83.194 2.62569 74.7744C2.63837 66.231 7.54795 57.516 13.4037 48.9694C14.8607 46.8429 16.368 44.7378 17.8635 42.6555C19.3572 40.5757 20.8402 38.517 22.2399 36.4947C25.0349 32.4564 27.5296 28.5183 29.1523 24.7608C30.774 21.0057 31.5636 17.3436 30.8354 13.8897C30.1012 10.4075 27.8564 7.28378 23.7133 4.55825L22.7861 5.96763Z"
                fill="black"
              />
            </svg>
            <div className="div-wrapper">
              <div className="text-wrapper">Java</div>
            </div>
            <ButtonLink
              id="30"
              className="button-link-instance"
              divClassName="design-component-instance-node"
              text="Learn The Fundamentals"
            />
            <ButtonLink
              id="1"
              className="button-link-2"
              divClassName="button-link-3"
              text="More Concepts"
            />
            <ButtonLink
              id="2"
              className="button-link-4"
              divClassName="button-link-3"
              text="Generics"
            />
            <ButtonLink
              id="3"
              className="button-link-5"
              divClassName="button-link-3"
              text="Streams"
            />
            <ButtonLink
              id="4"
              className="button-link-6"
              divClassName="button-link-3"
              text="Basic Syntax"
            />
            <ButtonLink
              id="5"
              className="button-link-7"
              divClassName="button-link-3"
              text="Datastructures"
            />
            <ButtonLink
              id="6"
              className="button-link-8"
              divClassName="button-link-3"
              text="Datatypes,Variables"
            />
            <ButtonLink
              id="7"
              className="button-link-9"
              divClassName="button-link-3"
              text="OOP,Interfaces,Classes"
            />
            <ButtonLink
              id="8"
              className="button-link-10"
              divClassName="button-link-3"
              text="Conditionals"
            />
            <ButtonLink
              id="9"
              className="button-link-11"
              divClassName="button-link-3"
              text="Packages"
            />
            <ButtonLink
              id="10"
              className="button-link-12"
              divClassName="button-link-3"
              text="Functions"
            />
            <ButtonLink
              id="11"
              className="button-link-13"
              divClassName="button-link-3"
              text="Memory Management"
            />
            <ButtonLink
              id="12"
              className="button-link-14"
              divClassName="button-link-3"
              text="Collection Framework"
            />
            <ButtonLink
              id="13"
              className="button-link-15"
              divClassName="button-link-3"
              text="Serialization"
            />
            <ButtonLink
              id="14"
              className="button-link-16"
              divClassName="button-link-3"
              text="Network and scokets"
            />
            <ButtonLink
              id="15"
              className="button-link-17"
              divClassName="button-link-3"
              text="Loops"
            />
            <ButtonLink
              id="16"
              className="button-link-18"
              divClassName="button-link-19"
              text="Exception Handling"
            />
            <ButtonLink
              id="17"
              className="button-link-20"
              divClassName="button-link-3"
              text="Working with Files"
            />
            <ButtonLink
              id="18"
              className="button-link-21"
              divClassName="button-link-3"
              text="JVM"
            />
            <ButtonLink
              id="19"
              className="button-link-22"
              divClassName="button-link-3"
              text="Garbage collection"
            />
            <ButtonLink
              id="20"
              className="button-link-23"
              divClassName="button-link-3"
              text="Basics of threads"
            />
            <ButtonLink
              id="21"
              className="button-link-24"
              divClassName="button-link-25"
              text="Build Tools"
            />
            <ButtonLink
              id="22"
              className="button-link-26"
              divClassName="button-link-25"
              text="Web Frameworks"
            />
            <ButtonLink
              id="23"
              className="button-link-27"
              divClassName="button-link-25"
              text="Gradle"
            />
            <ButtonLink
              id="24"
              className="button-link-28"
              divClassName="button-link-25"
              text="Spring"
            />
            <ButtonLink
              id="25"
              className="button-link-29"
              divClassName="button-link-25"
              text="Spring Boot"
            />
            <ButtonLink
              id="26"
              className="button-link-30"
              divClassName="button-link-25"
              text="Play Framework"
            />
            <ButtonLink
              id="27"
              className="button-link-31"
              divClassName="button-link-25"
              text="Spark"
            />
            <ButtonLink
              id="28"
              className="button-link-32"
              divClassName="button-link-33"
              text="Maven"
            />
            <ButtonLink
              id="29"
              className="button-link-34"
              divClassName="button-link-33"
              text="Ant"
            />
            <div className="text">{""}</div>
          </div>
          <div className="div">Start</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Roadmap1;
