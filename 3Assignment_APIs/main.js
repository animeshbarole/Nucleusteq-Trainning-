

async function getData()
{
    try {

        const response =  await fetch("https://jsonplaceholder.typicode.com/posts");
      const data  =  await response.json();
      
     
      console.log(data);
    const container  =  document.querySelector(".container");

    data.forEach(item => {
          
        const card = document.createElement("div");
        card.classList.add("card");

        const numberElement = document.createElement("span");
        numberElement.classList.add("number");
        numberElement.textContent = item.id;

        const titleElement = document.createElement("h2");
        titleElement.classList.add("title");
        const titleWords = item.title.split(" ");
            
        // Join the first three words back together
        const truncatedTitle = titleWords.slice(0, 3).join(" ");
        titleElement.textContent = truncatedTitle;

       
        const bodyElement = document.createElement("p");
        bodyElement.classList.add("content");
        const shortBody =  item.body.split(" ");
        const truncateBody = shortBody.slice(0,22).join(" "); 
        bodyElement.textContent = truncateBody;

        card.appendChild(numberElement);
        card.appendChild(titleElement);
        card.appendChild(bodyElement);

        container.appendChild(card);
    });
        
    } catch (error) {
        console.log(error);
    }
      
}

getData();

