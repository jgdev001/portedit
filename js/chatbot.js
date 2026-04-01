async function sendMessage() {
  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");
  const msg = input.value.trim();
  if (!msg) return;

  body.innerHTML += `<div class="user">${msg}</div>`;
  input.value = "";
  body.scrollTop = body.scrollHeight;

  body.innerHTML += `<div class="bot">Digitando...</div>`;
  body.scrollTop = body.scrollHeight;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();

  body.lastChild.remove();
  body.innerHTML += `<div class="bot">${data.reply}</div>`;
  body.scrollTop = body.scrollHeight;
}