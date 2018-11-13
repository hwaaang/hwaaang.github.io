//get canvas element
var canvas = document.getElementById("myCanvas");
// get canvas 2d contex to draw on
var context = canvas.getContext("2d");
context.textAlign="center";

//make function for drawing object
const createWindow = (ID, position_x, position_y, width, height, title) => {
  const title_height = 30;
  const titleBox = context.rect(position_x, position_y, width, title_height);
  context.fillStyle = "blue";
  context.font = "bold 20px Georgia"
  context.fillText(title, position_x + width / 2, position_y + title_height / 2);
  const box = context.rect(position_x, position_y + title_height, width, height);
  const button_height = 20;
  const button_width = 20;
  const name1 = "X"
  const name2 = "ㅡ"
  const deleteBox = context.rect(position_x+width-60, position_y+height-10, button_width, button_height, name1);
  context.fillStyle = "black";
  context.font = "18px Georgia"
  context.fillText(name1, position_x+width-50, position_y+height+5);
  const hideBox = context.rect(position_x+width-40, position_y+height-10, button_width, button_height, name2);
  context.fillStyle = "black";
  context.font = "bold 18px Georgia"
  context.fillText(name2, position_x+width-30, position_y+height+5);


  return {
    ID: ID,
    windowTitle: titleBox,
    windowBox: box
  }
};

const createTextbox = (ID, position_x, position_y, width, height, title) => {
  const textBox = context.rect(position_x, position_y, width, height);
  context.fillStyle = "red";
  context.font = "15px Verdana"
  const text = context.fillText(title, position_x + width / 2, position_y + height / 2);
  return {
    ID: ID,
    textboxTitle: title
  }
};

const createButton = (ID, position_x, position_y, width, height, title) => {
  const button = context.rect(position_x, position_y, width, height);
  context.fillStyle = "green";
  context.font = "bold 20px Helvetica"
  const text = context.fillText(title, position_x + width / 2, position_y + height / 2);
  return {
    ID: ID,
    textboxTitle: title
  }
};

const createMenu = (ID, position_x, position_y, width, height, title, item_num) => {
  const menuBox = context.rect(position_x, position_y, width, height);
  context.fillStyle = "purple";
  context.font = "20px Courier"
  context.fillText(title, position_x + width / 2, position_y + height / 2);
  for (i=1; i <= item_num; i++) {
    const listBox = context.rect(position_x+20, position_y+30*i, width, height);
    context.fillStyle = "gray";
    context.fillText("item"+i, position_x+20 + width / 2, position_y+30*i + height / 2);
  };

  return {
    ID: ID,
    Menubox: title,
  }
};

//draw object

const window1 = createWindow("window1", 0, 100, 250, 150, "window1");

const textbox1 = createTextbox("text1", 300, 300, 200, 40, "textbox1");
const textbox2 = createTextbox("text2", 100, 400, 100, 50, "textbox2");

const button1 = createButton("button1", 600, 300, 100, 50, "button1");
const button2 = createButton("button2", 550, 400, 150, 50, "button2");


const menu1 = createMenu("menu1", 500, 100, 150, 30, "menu1", 3);


context.stroke();
