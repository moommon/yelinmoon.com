// 이미지 요소를 선택합니다.
const hoverImage = document.querySelector(".main-home-image-popup");
const hoverBoxes = document.querySelectorAll(".main-home-hover");

// 초기에는 default 이미지만 표시합니다.
hoverImage.style.display = "none";

// 각 프로필 이미지에 호버 이벤트 리스너를 추가합니다.
hoverBoxes.forEach((hoverBox, index) => {
  hoverBox.addEventListener("mouseenter", () => {
    if (index === 0) {
      document.querySelector(".popup6").style.display = "inline-block";
    } else if (index === 1) {
      document.querySelector(".popup5").style.display = "inline-block";
    } else if (index === 2) {
      document.querySelector(".popup4").style.display = "inline-block";
    } else if (index === 3) {
      document.querySelector(".popup3").style.display = "inline-block";
    } else if (index === 4) {
      document.querySelector(".popup2").style.display = "inline-block";
    } else if (index === 5) {
      document.querySelector(".popup1").style.display = "inline-block";
    }
  });

  hoverBox.addEventListener("mouseleave", () => {
    // 마우스를 뗄 때 다시 click 이미지로 돌아갑니다.

    document.querySelector(".popup1").style.display = "none";
    document.querySelector(".popup2").style.display = "none";
    document.querySelector(".popup3").style.display = "none";
    document.querySelector(".popup4").style.display = "none";
    document.querySelector(".popup5").style.display = "none";
    document.querySelector(".popup6").style.display = "none";
  });
});
