import React from "react";
import Nav from "./Nav";
import "./styles/Guide.css";
import { Drawer, List, ListItem } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Data from "./Assets/Data.json";
function Guide() {
  const title = "Guide";
  const info = "This is the guide page";
  const linksArray = Data;
  const [Title, setTitle] = React.useState(title);
  const [Desc, setDesc] = React.useState(info);
  const [img, setImg] = React.useState();
  const [id, setId] = React.useState(0);
  const [code, setCode] = React.useState();
  const imgObj = {
    width: "50vh",
    height: "50vh",
    marginLeft: "4vh",
  };
  return (
    <>
      <Nav/>
      <Drawer variant="permanent" anchor="left">
        <div className="box">
          <List>
            <br />
            {linksArray.map((item) => (
              <ListItem key={item.id}>
                <button
                  className="links"
                  onClick={() => {
                    setId(item.id);
                    setTitle(item.title);
                    setDesc(item.description);
                    setImg(item.img);
                    setCode(item.code);
                  }}
                >
                  {item.title}
                </button>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className="middle">
        <h1>{Title}</h1>
        <hr />
        {Desc && <p style={{ fontSize: "23px" }}>{Desc.desc1}</p>}
        {linksArray[id] && !linksArray[id].imgToggle && (
          <>
            {Desc && (
              <>
                <p style={{ fontSize: "23px" }}>{Desc.desc2}</p>
                <img src={img} style={imgObj} />
                <p style={{ fontSize: "23px" }}>{Desc.desc3}</p>
                {Desc && linksArray[id].codeToggle && (
                  <SyntaxHighlighter language="java" style={solarizedlight}>
                    {code}
                  </SyntaxHighlighter>
                )}
                {Desc && <p style={{ fontSize: "10px" }}>{Desc.desc4}</p>}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Guide;
