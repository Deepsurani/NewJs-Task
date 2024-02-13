// Step 1. Droppable Zone Active
function DragOverEvent(event) {
  event.preventDefault();
}
//Step 2: Draggable Tag Move to Transfer Mode...
function DragStartEvent(event) {
  var TransferTagId = event.target.id;
  event.dataTransfer.setData("html", TransferTagId);
  console.log(event);
}

// Step 3: Drop Draggable Tag
function DropEvent(event) {
  var TransferTagId = event.dataTransfer.getData("html");
  var DropZoneId = event.target.id;
  var TransferTag = document.getElementById(TransferTagId);
  document.getElementById(DropZoneId).appendChild(TransferTag);
  console.log(TransferTagId + " , " + DropZoneId);
}
