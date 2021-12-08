import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { AnimeType } from "../types";
import Card from "../components/Card";
import { anime } from "../test.data/data";

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

describe('renders card component', () =>{
  test("renders without props", () => {
    act(() => {
      render(<Card />, container);
    });
    expect(container.textContent).toBe('');
  });

  test("renders with props", () => {
    act(() => {
      render(<Card item={anime} />, container);
    });
    expect(container.textContent).toBe(anime.attributes.canonicalTitle);
  });
});