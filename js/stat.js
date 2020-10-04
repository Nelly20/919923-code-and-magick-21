'use strict';

<<<<<<< Updated upstream
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

ctx.font = '16px PT Mono';
ctx.textBaseline = 'hanging';
ctx.fillText('Ура вы победили!', 0, 10);
ctx.fillText('Список результатов:', 0, 48);

var renderCloud = function(ctx, x, y, color) {
=======
const CLOUD_WIDTH = 400;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const SHIFT = 10;
const COLUMN_GAP = 50;
const COLUMN_HEIGHT = 150;
const COLUMN_WIDTH = 40;
const SHADOW_COLOR = `rgba(0, 0, 0, 0.7)`;
const CLOUD_COLOR = `#fff`;
const TEXT_COLOR = `#000`;
const PLAYER_COLOR = `rgba(255, 0, 0, 1)`;


const renderCloud = function (ctx, x, y, color) {
>>>>>>> Stashed changes
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

<<<<<<< Updated upstream
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
=======
const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
>>>>>>> Stashed changes
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

<<<<<<< Updated upstream
window.renderStatistics = function(ctx, names, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = 'red';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(
      names[i],
      CLOUD_X + GAP,
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i
    );
    ctx.fillRect(
      CLOUD_X + GAP + TEXT_WIDTH,
      CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i,
      (barWidth * times[i]) / maxTime,
      BAR_HEIGHT
=======
window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + SHIFT,
      CLOUD_Y + SHIFT,
      SHADOW_COLOR
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      CLOUD_COLOR
  );

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = `16px PT Mono`;

  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + 3 * SHIFT,
      CLOUD_Y + 3 * SHIFT
  );

  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + 3 * SHIFT,
      CLOUD_Y + 3 * SHIFT + 16
  );

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {

    ctx.fillStyle = TEXT_COLOR;

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i,
        CLOUD_Y + 8 * SHIFT + (COLUMN_HEIGHT * (1 - times[i] / maxTime))
    );

    ctx.fillText(
        names[i],
        CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - SHIFT
    );

    ctx.fillStyle = (names[i] === `Вы`) ? PLAYER_COLOR : `hsl(240, ${Math.random() * 100}%, 50%)`;

    ctx.fillRect(
        CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i,
        CLOUD_Y + 9 * SHIFT + (COLUMN_HEIGHT * (1 - times[i] / maxTime)),
        COLUMN_WIDTH,
        COLUMN_HEIGHT * times[i] / maxTime - SHIFT
>>>>>>> Stashed changes
    );
  }
};
