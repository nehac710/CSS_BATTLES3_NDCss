document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "q5u8xAmFo3FTKdQx129jCEDeaACgA2ECSntn25NP";  
    let currentDate = new Date();

    function fetchapod(date){
      const formattedDate = date.toISOString().split('T')[0];
      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').innerText = data.title;
            if (data.media_type === "image") {
                document.getElementById('apod-image').src = data.url;
                document.getElementById('apod-image').style.display = "block"; 
                document.getElementById('apod-video').style.display = "none";  
            } else if (data.media_type === "video") {
                document.getElementById('apod-video').src = data.url;
                document.getElementById('apod-image').style.display = "none";
                document.getElementById('apod-video').style.display = "block";
            }
            document.getElementById('explanation').innerText = data.explanation;
            document.getElementById('date').innerText = `Date: ${data.date}`;
        })
        .catch(error => {
            console.error("Error fetching the APOD data:", error);
            document.getElementsByClassName('container')[0].innerText = "Failed to load data.";
        });

    }

    fetchapod(currentDate);
    

    document.getElementById('prev-button').addEventListener('click', function(){
        currentDate.setDate(currentDate.getDate()-1);
        fetchapod(currentDate);
    })
   
    document.getElementById('next-button').addEventListener('click',function(){
        currentDate.setDate(currentDate.getDate()+1);
        fetchapod(currentDate);
    })

    document.getElementById('apod-date').addEventListener('change',function(){
        currentDate = new Date(this.value);
        fetchapod(currentDate);
    })

    document.addEventListener('DOMContentLoaded', () => {
        const starfield = document.createElement('div');
        starfield.className = 'starfield';
        document.body.appendChild(starfield);
    
        // Create 100 stars
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            star.style.top = `${Math.random() * 100}vh`;  // Random vertical position
            starfield.appendChild(star);
        }
    });
    
});
