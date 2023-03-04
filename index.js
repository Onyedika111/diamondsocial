//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");


//THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')

//EXPLORE
const explore = document.querySelector("#explore")
const exploreModal = document.querySelector('.customize-explore')
const exploreCard = document.querySelector('.explore-card')




//FUNCTION TO FIRST REMOVE ALL ACTIVE CLASS ON SIDEBAR
const changeActiveItem = () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
};
  
//FUNCTION FOR ACTIVE CLASS ON CLICK OF SIDEBAR
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      changeActiveItem();
      item.classList.add("active");
      if (item.id != "notifications") {
        document.querySelector(".notifications-popup").style.display = "none";
      } else {
        document.querySelector(".notifications-popup").style.display = "block";
        document.querySelector(
          "#notifications .notification-count"
          ).style.display = "none";
          document.querySelector(
            "#notifications .notification-span"
          ).style.display = "none";
      }
    });
  });
  
  // -----------------------END OF SIDEBAR----------------------------------

  // ---------------------------------MESSAGE--------------------------------
//Search Chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((chat) => {
      let name = chat.querySelector("h5").textContent.toLowerCase();
      if (name.indexOf(val) != -1) {
        chat.style.display = "flex";
      } else {
        chat.style.display = "none";
      }
    });
};
  
//seacrch chat
messageSearch.addEventListener("keyup", searchMessage);


//Hightlights message card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
    messagesNotification.querySelector(".message-count").style.display =
        "none";
        messagesNotification.querySelector(".message-span").style.display =
        "none";
    messages.style.boxShadow = "0 0 0.5rem var(--color-primary)";
    setTimeout(() => {
      messages.style.boxShadow = "none";
    }, 2000);
});
  
// ---------------------------------THEME--------------------------------

///THEME/DISPLAY CUSTOMIZATION
//OPEN MODAL
const openThemeModal = () => {
    themeModal.style.display = "grid";
  };
  theme.addEventListener("click", openThemeModal);
  
  //CLOSE MODAL
  const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
      themeModal.style.display = "none";
    }
  };
  
  themeModal.addEventListener("click", closeThemeModal);
  
  //remove active class from spans or font size selectors
  const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
      size.classList.remove("active");
    });
  };
  
  // ---------------------------------FONT-SIZES--------------------------------
  fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
      removeSizeSelector();
      let fontSize;
      size.classList.toggle("active");
      if (size.classList.contains("font-size-1")) {
        fontSize = "10px;";
        root.style.setProperty("--sticky-top-left", "5.4rem");
        root.style.setProperty("--sticky-top-right", "5.4rem");
      } else if (size.classList.contains("font-size-2")) {
        fontSize = "13px";
        root.style.setProperty("--sticky-top-left", "5.4rem");
        root.style.setProperty("--sticky-top-right", "-7rem");
      } else if (size.classList.contains("font-size-3")) {
        fontSize = "16px";
        root.style.setProperty("--sticky-top-left", "-2rem");
        root.style.setProperty("--sticky-top-right", "-17rem");
      } else if (size.classList.contains("font-size-4")) {
        fontSize = "19px";
        root.style.setProperty("--sticky-top-left", "-5rem");
        root.style.setProperty("--sticky-top-right", "-25rem");
      } else if (size.classList.contains("font-size-5")) {
        fontSize = "22px";
        root.style.setProperty("--sticky-top-left", "-12rem");
        root.style.setProperty("--sticky-top-right", "-35rem");
      }
  
      //change font size of the root html element
      document.querySelector("html").style.fontSize = fontSize;
    });
  });
  
  //REMOVE ACTIVE CLASS FROM COLORS
  const changeActiveColorClass = () => {
    colorPalette.forEach((colorPicker) => {
      colorPicker.classList.remove("active");
    });
  };
  
  //change primary colors
  colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
      //remove active class from colors
      changeActiveColorClass();
      let primaryHue;
      if (color.classList.contains("color-1")) {
        primaryHue = 252;
      } else if (color.classList.contains("color-2")) {
        primaryHue = 43;
      } else if (color.classList.contains("color-3")) {
        primaryHue = 352;
      } else if (color.classList.contains("color-4")) {
        primaryHue = 173;
      } else if (color.classList.contains("color-5")) {
        primaryHue = 202;
      }
      color.classList.add('active')
      root.style.setProperty('--primary-color-hue', primaryHue);
    });
  });
  
  
  //BACKGROUND COLORS
  //theme value colors
  let lightColorLightness;
  let whiteColorLightness;
  let darkColorLightness;
  
  //changes background color
  const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
  }
  
  
  Bg1.addEventListener('click', () => { 
  
    //add active class
    Bg1.classList.add('active')
    //remove active class from other two
    Bg2.classList.remove('active')
    Bg3.classList.remove('active')
    //remove customize changes from local storage
    window.location.reload()
  })
  
  
  Bg2.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '20%'
    lightColorLightness = '15%'
  
    //add active class
    Bg2.classList.add('active')
    //remove active class from other two
    Bg1.classList.remove('active')
    Bg3.classList.remove('active')
    changeBG()
  })
  
  Bg3.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '10%'
    lightColorLightness = '0%'
  
    //add active class
    Bg3.classList.add('active')
    //remove active class from other two
    Bg2.classList.remove('active')
    Bg1.classList.remove('active')
    changeBG()
  })


const openExplore = () => {
    exploreModal.style.display = 'grid';
    document.querySelector(".explore-count").style.display = "none";
        document.querySelector("#last-span").style.display = "none";
  }

explore.addEventListener('click', openExplore)
  
const closeExplore = (e) => {
    exploreModal.style.cursor = 'pointer'
    if (e.target.classList.contains("customize-explore")) {
        exploreModal.style.display = 'none'
    }
   
}

exploreModal.addEventListener('click', closeExplore)
  
  //END