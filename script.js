const photos = [
    "images/1.jfif", 
    "images/2.jfif", 
    "images/3.jfif", 
    "images/4.jfif", 
    "images/5.jfif", 
    "images/6.jfif", 
    "images/7.jfif", 
    "images/8.jfif"
  ];
  let currentPhotoIndex = 0;
  
  document.addEventListener("DOMContentLoaded", function() {
      if (showProgressMessage) {
          document.getElementById("progress-message").classList.remove("hidden");
          document.getElementById("letter-content").classList.add("hidden");
      }
  });
  
  function nextPhoto() {
      currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
      document.getElementById("photo").src = photos[currentPhotoIndex];
  }
  
  function prevPhoto() {
      currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
      document.getElementById("photo").src = photos[currentPhotoIndex];
  }
  
  function goToNextPage() {
      window.location.href = 'next.html';
  }

  const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

  function displayJournal() {
      const journalContainer = document.getElementById('journal-entries');
      journalContainer.innerHTML = "";
  
      if (journalEntries.length === 0) {
          journalContainer.innerHTML = "<p>No memories yet. Start adding your special moments! ❤️</p>";
          return;
      }
  
      journalEntries.forEach((entry, index) => {
          const entryElement = document.createElement("div");
          entryElement.classList.add("journal-entry");
          entryElement.innerHTML = `
              <p>${entry}</p>
              <button onclick="deleteMemory(${index})" class="delete-btn">🗑️ Delete</button>
          `;
          journalContainer.appendChild(entryElement);
      });
  }
  
  function addMemory() {
      const newEntry = document.getElementById("new-entry").value.trim();
      if (newEntry) {
          journalEntries.push(newEntry);
          localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
          document.getElementById("new-entry").value = "";
          displayJournal();
      }
  }
  
  function deleteMemory(index) {
      journalEntries.splice(index, 1);
      localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
      displayJournal();
  }
  
  document.addEventListener("DOMContentLoaded", displayJournal);

const letters = [
    { title: "Dear Love,", body: "You are the most beautiful part of my life. Every moment with you is a treasure, and I love you so much. I am so lucky to have you. I'm thankful because you love me, and I can feel that. I am motivated to do something good because of you. I am very proud to have you in my life. I won't waste the chance you've given me. I have found a very rare gem, and I will treasure it for sure. I'm sorry for bullying you sometimes, and I'm sorry I keep teasing you, but always remember, I love you so much. I want you by my side and to be my number one supporter for the rest of my life." },
    { title: "Dear Love,", body: "Last time kay nag english man karun bisaya or sagol lang siguro kay murag kapoy man straight english makabugo HAHA. Anyway, gusto lang nako iexpress na swerte jud kaayo sa imoha, ikapila na nako gina balik-balik og ingon pero tinuod jud na love. Wala koy regrets nga gi pursue taka. Everytime na mag I love you ko sa imoha tinuod na siya. Thank you kay nagstay ka sa akoa and hoping ikaw najud akoang first and last. Wala pako naka feel og pagduda sa imoha, ginasaligan jud taka. Unta kabalo ka na happy jud ko kung naa sa akoang duol like mawala jud ka og stress. Kanaa ra, I loove you so muuch" },
    // { title: "Third Letter", body: "I want you by my side and to be my number one supporter for the rest of my life." }
];

let currentLetterIndex = 0;

function displayLetter() {
    document.getElementById("letter-title").innerText = letters[currentLetterIndex].title;  
    document.getElementById("letter-body").innerText = letters[currentLetterIndex].body;
}

function nextLetter() {
    currentLetterIndex = (currentLetterIndex + 1) % letters.length;
    displayLetter();
}

function prevLetter() {
    currentLetterIndex = (currentLetterIndex - 1 + letters.length) % letters.length;
    displayLetter();
}

document.addEventListener("DOMContentLoaded", displayLetter);