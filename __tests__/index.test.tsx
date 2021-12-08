import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "../pages/index";
import { animes } from "../test.data/data";

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('renders index page', () => {
  const head = 'HomeContacts';
  const footer = 'Created by Turik';
  let main = '';

  animes.forEach(element => {
    main += element.attributes.canonicalTitle;
  });

  test("renders with Title", () => {
    act(() => {
      render(<Home animes={animes} />, container);
    });
    expect(container.textContent).toBe(head + main + footer);
  });

  test("renders without Title", () => {
    act(() => {
      render(<Home animes={animes} />, container);
    });
    expect(container.textContent).not.toBe(head + footer);
  });
});
