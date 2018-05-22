// Initial welcome page. Delete the following line to remove it.
import * as React from 'react';
import { render } from 'react-dom';
import image from './schleif_lean.png';
import styled from 'styled-components';
// 'use strict';
// import path from 'path';
// const imagePath = path.join(__static, '/schleif_lean.png');

const styles = document.createElement('style');
styles.innerText = `@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);.empty{display:flex;flex-direction:column;justify-content:center;height:100vh;position:relative}.footer{bottom:0;font-size:13px;left:50%;opacity:.9;position:absolute;transform:translateX(-50%);width:100%}`;

interface MessageProps {
  content: string;
}

const MessageBox = styled.div`
  background-color: #ffffcb;
  font-family: Cereal;
  padding: 16px;
  width: 250px;
  z-index: 10;
  position: relative;
  border-radius: 8px;
`;

const Message: React.SFC<MessageProps> = props => (
  <MessageBox>{props.content}</MessageBox>
);

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
`;

const App = () => (
  <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
    <Message content="It looks like you’re trying to design a website. Would you like help with that?" />
    <Image src={image} />
  </div>
);

// const vueScript = document.createElement('script');
// vueScript.setAttribute('type', 'text/javascript'),
//   vueScript.setAttribute('src', 'https://unpkg.com/vue'),
//   (vueScript.onload = init),
//   document.head.appendChild(vueScript),
//   document.head.appendChild(styles);
// function init() {
//   (Vue.config.devtools = false),
//     (Vue.config.productionTip = false),
//     new Vue({
//       data: {
//         versions: {
//           electron: process.versions.electron,
//           electronWebpack: require('electron-webpack/package.json').version,
//         },
//       },
//       methods: {
//         open(b) {
//           require('electron').shell.openExternal(b);
//         },
//       },
//       template: `<div>
//       <img src='${imagePath}' />
//       </div>`,
//     }).$mount('#app');
// }

render(<App />, document.body);
// const img = document.createElement('img');
// img.setAttribute('src', image);
// img.setAttribute('width', 200);

// document.body.appendChild(img);
