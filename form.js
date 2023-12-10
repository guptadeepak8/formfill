let currentTab=0;
showTab(currentTab)
function showTab(value){
  let tab=document.getElementsByClassName('tab')
  let steps=document.getElementsByClassName('step')

  tab[value].style.display="block";
  if(value===0){
    document.getElementById("prevBtn").style.display="none"
  }
  else{
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (value === tab.length - 1) {
    document.getElementById('nextBtn').innerText = "Download";
    document.getElementById('nextBtn').onclick = handleDownload;
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
    document.getElementById('nextBtn').onclick = function() { nextPrev(1); };
  }
 
  for (let index = 0; index < steps.length; index++) {
    steps[index].className=steps[index].className.replace(" active","")
  }
  steps[value].className += " active"

}


function nextPrev(count){
  let tab=document.getElementsByClassName('tab')
  
  if (currentTab+count  >= tab.length ) {
   return false
  }
  
  tab[currentTab].style.display="none"
  currentTab=currentTab+count;
  showTab(currentTab); 
  
}



function handleDownload(){
  const { jsPDF } = window.jspdf;
  const pdfDoc = new jsPDF('l', 'mm', [800, 1200]);
  const htmlElement = document.getElementById('pdfContent');

  const contentWidth = htmlElement.offsetWidth;
  const contentHeight = htmlElement.offsetHeight;

  // for Calculating the centering position
  const centerX = (pdfDoc.internal.pageSize.width - contentWidth) / 2;
  const centerY = (pdfDoc.internal.pageSize.height - contentHeight) / 2;
  pdfDoc.html(htmlElement,{
      callback:function(pdf){
        pdf.save('document.pdf')
      },
      x: centerX,
    y: centerY,
  })

}

function handlePreview(params) {
   document.querySelector(".form-wrap").style.display="none";
   document.getElementById('pdfContent').style.display = 'block';
   document.querySelector('.cancel-btn').style.display="block"
}

function handleCancel(){
  document.querySelector(".form-wrap").style.display="flex";
  document.getElementById('pdfContent').style.display = 'none';
  document.querySelector('.cancel-btn').style.display="none"
}