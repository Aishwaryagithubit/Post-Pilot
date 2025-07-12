// async function generatePost() {
//   const userInput = document.getElementById("userInput").value.trim();
//   const outputDiv = document.getElementById("output");
//   const loading = document.getElementById("loading");

//   if (!userInput) {
//     alert("Please enter some text.");
//     return;
//   }

//   outputDiv.innerHTML = '';
//   loading.style.display = 'block';

//   const prompt = `Create a social media post for the idea: "${userInput}". Include:
// - Caption:
// - Emojis:
// - Description:
// - Hashtags:`;

//   try {
//     const response = await fetch("https://aistudio.google.com/app/apikey", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer AIzaSyDq6cnKHovBGaoPi7cQRFSdeM6X1cAY7t0", 
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         model: "command-r",
//         prompt: prompt,
//         max_tokens: 300,
//         temperature: 0.8
//       })
//     });

//     const result = await response.json();
//     const generated = result?.generations?.[0]?.text || "⚠️ No response from AI.";

//     outputDiv.innerHTML = `<p>${generated.replace(/\n/g, "<br>")}</p>`;
//   } catch (err) {
//     outputDiv.innerHTML = `<p>❌ Error: ${err.message}</p>`;
//   } finally {
//     loading.style.display = 'none';
//   }
// }



