/**
 * This is an example application that demonstrates the use of a 
 * CheckBox component, that was built by extending the SimpleKit API.
 * 
 * The application creates a user interface with a label and a 
 * checkbox. When the checkbox is checked or unchecked,
 */
import { debug } from "console";
import {
  startSimpleKit,
  setSKRoot,
  SKContainer,
  SKLabel,
  Layout,
} from "../simplekit/src/imperative-mode";
import { CheckBox } from "./checkbox";

// Creating a new container for the root element
const root = new SKContainer();

// create a container for interface elements
const interfaceContainer = new SKContainer();
interfaceContainer.padding = 10;
interfaceContainer.height = 150;
interfaceContainer.width = 250;
interfaceContainer.fill = "lightpink";
interfaceContainer.border = "black";

root.addChild(interfaceContainer);
// Apply a layout to containers
root.layoutMethod = new Layout.CentredLayout();
interfaceContainer.layoutMethod = new Layout.WrapRowLayout();


// Create a label
var label = new SKLabel({ text: "Hello World!" });
label.font = "30px Arial";


interfaceContainer.addChild(label);



// Adding the label element as a child of root


//create a container for the checkboxes
const checkboxContainer = new SKContainer();
checkboxContainer.layoutMethod = new Layout.WrapRowLayout();
checkboxContainer.width = 85;
//checkboxContainer.height = 200;
interfaceContainer.addChild(checkboxContainer);

// Create a checkbox for bolding the message
const boldCheckBox = new CheckBox();
const boldCheckBoxLabel = new SKLabel({text: "bold"});
boldCheckBoxLabel.font = "20px Arial";

boldCheckBox.addEventListener("action", (event) => {
  if (boldCheckBox.checked) {
    label.font = "bold " + label.font;
    console.log("bold on");
  } else {
    label.font = label.font.replace("bold ", "");
  }
});

// Create a checkbox for bolding the message
var italics = new CheckBox();
var italicsLabel = new SKLabel({text: "italics"});
italicsLabel.font = "20px Arial";

italics.addEventListener("action", (event) => {
  if (italics.checked) {
    label.font = "italic " + label.font;
  } else {
    label.font = label.font.replace("italic ", "");
  }
});

// Adding the checkbox elements as a child of root
checkboxContainer.addChild(boldCheckBox);
checkboxContainer.addChild(boldCheckBoxLabel);
checkboxContainer.addChild(italics);
checkboxContainer.addChild(italicsLabel);

// Set the root element and start SimpleKit
setSKRoot(root);

// Make an App
startSimpleKit();