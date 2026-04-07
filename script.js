function addMessage(text, type) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value;

  if (!text) return;

  addMessage("You: " + text, "user");

  // Fake AI response (for demo)
  setTimeout(() => {
    addMessage("AI: This answer is generated based on document context.", "bot");
  }, 1000);

  input.value = "";
}

function summarize() {
  addMessage("AI: Summarizing document...", "bot");
}

function keyPoints() {
  addMessage("AI: Extracting key points...", "bot");
}
