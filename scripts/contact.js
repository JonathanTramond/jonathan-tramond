


// email form on contact.html

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const mailName = document.getElementById('name').value;
    const mailTitle = document.getElementById('title').value;
    const mailContent = document.getElementById('content').value;
  
    console.log(mailName, mailTitle, mailContent)
  
    let mailto = `mailto:jonathan.tramond@gmail.com?subject=${mailName} : ${mailTitle}&body=${mailContent}`
    location.href = mailto
  });