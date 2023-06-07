import React from "react";
import { Outlet } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { themeModestate } from "./atoms";
import Header from "./Components/Header";
import Router from "./Router";
import Home from "./Routes/Home";
import { lightTheme } from "./theme";

// RESET.css //
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;800&family=Source+Sans+Pro:wght@300;400&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing:border-box;
}
body{
  background: ghostwhite;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
a{
  text-decoration:none;
  color:inherit;
}
`;
function App() {
  const themeMode = useRecoilValue(themeModestate);
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
