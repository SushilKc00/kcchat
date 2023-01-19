var socket = io();
const message = document.getElementById("message");
const mesArea = document.getElementById("message_areas");
let userName;
do {
  userName = prompt("Enter your name");
} while (!userName);

function appendMyMessage(mess, type) {
  const div = document.createElement("div");
  div.classList.add(type);
  div.innerHTML = ` <div>
                    <h4>${mess.name}</h4>
                    <p>${mess.message}</p>
                    </div>`;
  mesArea.append(div);
  message.value = "";
}

message.addEventListener("keyup", (e) => {
  const userMess = e.target.value;
  if (e.key == "Enter") {
    const data = {
      name: userName,
      message: userMess,
    };
    appendMyMessage(data, "outgoing");
    socket.emit("message", data);
  }
});

socket.on("myMessage", (mes) => {
  appendMyMessage(mes, "incoming");
});
