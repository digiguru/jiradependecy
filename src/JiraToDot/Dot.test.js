import React from 'react';
import ReactDOM from 'react-dom';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
import puppeteer from 'puppeteer';
import Dot from './Dot';

let browser;

expect.extend({ toMatchImageSnapshot });

async function screenshotDOMElement(page, selector, padding = 0) {
  const rect = await page.evaluate(selector => {
    const element = document.querySelector(selector);
    const {x, y, width, height} = element.getBoundingClientRect();
    return {left: x, top: y, width, height, id: element.id};
  }, selector);

  return await page.screenshot({
    clip: {
      x: rect.left - padding,
      y: rect.top - padding,
      width: rect.width + padding * 2,
      height: rect.height + padding * 2
    }
  });
}

beforeAll(async () => {
  browser = await puppeteer.launch();
});

it('renders DOT diagram without crashing', async () => {

  //Setup
  const page = await browser.newPage();
  const div = document.createElement('div');
  const graph = `digraph graphname {
    WED6962 -> WED5317;
    WED6960 -> WED5317;
    WED5317 -> WED7039;
    WED911 -> WED7039;
    WED3774;
  }`;

  // Act
  ReactDOM.render(<Dot graph={graph} />, div);
  await page.setContent(div.innerHTML);
  const image = await screenshotDOMElement(page, "div>svg");

  // Assert
  expect(image).toMatchImageSnapshot();
  ReactDOM.unmountComponentAtNode(div);

});

afterAll(async () => {
  await browser.close();
});

