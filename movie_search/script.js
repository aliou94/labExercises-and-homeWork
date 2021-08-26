$(document).ready(function(){
    $('.header').height($(window).height());
   
    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
     
    })
   
   })



const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // to track current slide index.


const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }

    for(let i = 0; i < 3; i++){
        createSlide();
    }
    
    setInterval(() => {
        createSlide();
    }, 3000);
}

let array = []

const search = ()=> {

let display = document.getElementById("display")
 
let query = document.getElementById("search").value

   const url =`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

   
   fetch(url).then(
     (data)=>data.json()
   ).then(
       (res)=> {
          
        res.results.forEach(element => {

      
            //create card component
            card = document.createElement('div')
            cardBody = document.createElement("div")
            image = document.createElement("img")
            btn = document.createElement("BUTTON")
            h2 = document.createElement("h2")
            h6 = document.createElement("h6")

            

          
            card.className = "card"
            cardBody.className = "card-body"
            image.className = "card-img"
            h2.className ="name"
            h6.className ="des"
            btn.className = "watchlist-btn"

          

            h2.innerHTML= element.title
            // h6.innerHTML = element.overview
            image.src= `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${element.poster_path}`
            btn.innerHTML ="add to watchlist"
          
            btn.addEventListener("click", function(){
                let selection = {
                    title: element.title,
                    image: element.poster_path,
                    overview: element.overview
                }
                array.push(selection)
            })


            card.appendChild(cardBody)
            card.appendChild(image)
            cardBody.appendChild(h2)
            cardBody.appendChild(h6)
            cardBody.appendChild(btn)
            return display.appendChild(card)
        });  

       

        sessionStorage.setItem('key', array);
     
       }
   )  
}


let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {

   
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})




const watchlist = ()=> {

    let container = document.getElementById("container")

    sessionStorage.setItem("key", "power")


    console.log(sessionStorage.getItem("Key"))

   array.forEach((element)=> {
  //create card component
                   
  let div = document.createElement('div')
  let img = document.createElement('img')

 //style card elements

 div.className = "video-card"
 img.className = "video-card-image"
 img.src= `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${element.poster_path}`
 img.alt = ""
 div.appendChild(img)
            

return container.appendChild(div)
    
   })



}



const SEND = 0;
const COMMENT_EMPTY = 1;
const EMAIL_NOT_VALID = 2;

/**
 * Checks that if an email is entered, it is valid, and makes a comment required to send the form
 * data.
 * 
 * @returns 0 if the form is valid to be sent, 1 if a comment is empty, and 2 if an email is invalid.
 */
const validateInputs = () => {
    let email = document.getElementById("email-input").value;
    let comments = document.getElementById("comments-input").value;
    if (email.trim() == "") {
        if (comments.trim() == "") {
            alert("Please enter a comment to send")
            return COMMENT_EMPTY;
        } else {
            return SEND;
        }
    } else {
        if (validateEmail(email)) {
            if (comments.trim() == "") {
                alert("Please enter a comment to send");
                return COMMENT_EMPTY;
            } else {
                return SEND;
            }
        } else {
            alert("Please enter a valid email address");
            return EMAIL_NOT_VALID;
        }
    }
}

/**
 * Checks if an string is a valid email by using a regular expression.
 * 
 * @param {String} email A String containing an email 
 * @returns True if the email is valid, false otherwise.
 */
const validateEmail = email => {
    const emailRegularExpression =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegularExpression.test(String(email).toLowerCase());
}

/**
 * Check if the form is filled with the required data. If it is, send an email with the data in the 
 * form as the body, if not, send the focus to the incorrect form fields. The email is sent using
 * SMTPjs library located at www.SMTPjs.com
 */
const sendEmail = () => {
    let inputsValidation = validateInputs();

    
    if (inputsValidation === SEND) {
        let sendButton = document.getElementById("send-button");
        disableButton(true, sendButton);

        Email.send({
            SecureToken: "af5403e3-e0b4-47a6-a666-d8e511f5b547",
            To: 'ahmedaliou94@gmail.com',
            From: "kiju6754@outlook.com",
            Subject: "Movie search feedback",
            Body: setEmailBody()
        }).then(message => {
            if (message == "OK") {
                disableButton(false, sendButton);
                alert("Your comments were sent. Thank you!");
            } else {
                alert("Comments were not sent. Please try again later");
            }
        });
    }
    else {
        inputsValidation === COMMENT_EMPTY ?
            document.getElementById("comments-input").focus() :
            document.getElementById("email-input").focus();
    }
};

const setEmailBody = () => {
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let comments = document.getElementById("comments-input").value;
    return `<b>Name:</b><br>${name}<br><br><b>Email:</b><br>${email}<br><br>` +
        `<b>Comments:</b><br>${comments}`
}




