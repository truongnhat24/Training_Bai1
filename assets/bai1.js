$(document).ready(function(){
    const noImgs =  $(".pic").length;
    let currentIndex = 0;
    {
        let dots = "";
        for( let i = 0; i < noImgs; i++) {
            dots += "<button></button>";
        }
        $("section .btn-row").html(dots);
        $(".btn-row button:eq("+currentIndex+")").addClass("btn-active");
    }    

    const showHideImg = (showImgIndex) => {
        $(".pic:eq("+currentIndex+")").fadeOut();
        $(".pic:eq("+showImgIndex+")").fadeIn();
        $(".btn-row button:eq("+currentIndex+")").removeClass("btn-active");
        $(".btn-row button:eq("+showImgIndex+")").addClass("btn-active");
        currentIndex = showImgIndex;
    }

    const nextShow = () => {
        const showImgIndex = currentIndex < noImgs-1 ? currentIndex+1 : 0;
        showHideImg(showImgIndex); 
    }

    const preShow = () => {
        const showImgIndex = currentIndex > 0 ? currentIndex-1 : noImgs-1;
        showHideImg(showImgIndex);
    }

    const anyShow = function() {
        const BtnActive = $(this).index();
        const showImgIndex = BtnActive;
        if ( currentIndex != showImgIndex) {
            showHideImg(showImgIndex);
        }
    }

    {
        let myInterval;
        startShow = () => {
            if(!myInterval) myInterval = setInterval(nextShow, 1000);
        }
        stopShow = () => {
            clearInterval(myInterval); 
            myInterval = null;
        }
    }

    $(".btn-right").click(nextShow);
    $(".btn-left").click(preShow);
    $(".btn-row button").on("click", anyShow);
    $(".btn-show button").on("click", startShow).on("dblclick", stopShow);

    
})






























// $(document).ready(function () {
//     const noImgs = $(".pic").length;
  
//     const btnRowElement = $("section .btn-row");
  
//     const elementList = Array.from({ length: noImgs }, () => 0).map(
//       (_img, idx) => {
//         btnRowElement.append("<button></button>");
//         return $(".pic:eq("+idx+")");
//       }
//     );
  
//     let indexOfActive = $(".show").index();
  
//     const showImg = (index) => {
//       const selectItem = elementList[index];
//       selectItem.fadeIn("slow");
//       selectItem.addClass("slow");
//     };
//     const hideImg = (index) => {
//       const selectItem = elementList[index];
//       selectItem.fadeOut("slow");
//       selectItem.removeClass("slow");
//     };
  
//     const nextShow = function () {
//       const showImgIndex = indexOfActive < noImgs - 1 ? indexOfActive + 1 : 0;
//       hideImg(indexOfActive);
//       showImg(showImgIndex);
//       indexOfActive = showImgIndex;
//     };
  
//     const preShow = function () {
//       const showImgIndex = indexOfActive > 0 ? indexOfActive - 1 : noImgs - 1;
//       hideImg(indexOfActive);
//       showImg(showImgIndex);
//       indexOfActive = showImgIndex;
//     };
  
//     $(".btn-right").click(nextShow);
//     $(".btn-left").click(preShow);
//   });