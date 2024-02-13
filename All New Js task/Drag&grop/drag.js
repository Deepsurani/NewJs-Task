function DragOverEvent(event) {
    event.preventDefault();
  }

  function DragStartEvent(event) {
    var TransferTagId = event.target.id;
    event.dataTransfer.setData("html", TransferTagId);
  }

  function DropEvent(event) {
    var TransferTagId = event.dataTransfer.getData("html");
    var DropZoneId = event.target.id;
    var TransferTag = document.getElementById(TransferTagId);
    document.getElementById(DropZoneId).appendChild(TransferTag);
 
  
  }