function generateContent(){
 const type=document.getElementById('type').value;
 const prompt=document.getElementById('prompt').value.trim();
 if(!prompt){alert('Please enter a prompt.');return;}
 const templates={
  'Social Media Caption':`✨ ${prompt}\n\nTurn your idea into something meaningful, engaging and easy to remember. #GenerativeAI #Innovation`,
  'Blog Idea':`Blog Title: ${prompt}\n\nKey points:\n• Introduction to the topic\n• Practical examples\n• Benefits and challenges\n• Tips for beginners\n• Conclusion`,
  'Professional Email':`Subject: ${prompt}\n\nDear Team,\n\nI am writing regarding ${prompt.toLowerCase()}. Please let me know your thoughts and the next steps.\n\nRegards,\nSanjitha`,
  'Product Description':`${prompt}\n\nA simple, useful and user-focused solution designed to improve productivity and provide a better user experience.`
 };
 document.getElementById('output').value=templates[type];
}
function refineContent(){
 const out=document.getElementById('output');
 if(!out.value.trim()){alert('Generate some content first.');return;}
 out.value=out.value.replace(/\s+/g,' ').trim()+"\n\nRefined for clarity, readability and a professional tone.";
}