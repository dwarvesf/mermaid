const getStyles = options =>
  `
  .entityBox {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
  }

  .relationshipLabelBox {
  }

    .relationshipLine {
      stroke: ${options.lineColor};
    }
`;

export default getStyles;
