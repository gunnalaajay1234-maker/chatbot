async function sendMessage() {

    const input =
        document.getElementById("message");

    const message = input.value;

    if (!message) return;

    const chatBox =
        document.getElementById("chat-box");

    chatBox.innerHTML +=
        `<div class="user">
            ${message}
         </div>`;

    input.value = "";

    chatBox.innerHTML +=
        `<div id="typing">
            Bot is typing...
         </div>`;

    const response =
        await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
                message
            })
        });

    const data =
        await response.json();

    document
    .getElementById("typing")
    .remove();

    chatBox.innerHTML +=
        `<div class="bot">
            ${data.response}
         </div>`;

    chatBox.scrollTop =
        chatBox.scrollHeight;
}