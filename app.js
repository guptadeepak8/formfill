function updateDocument() {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;
  const name3 = document.getElementById("name3").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const panno = document.getElementById("panno").value;
  const panname = document.getElementById("panname").value;
  const aadharno = document.getElementById("aadharno").value;
  const aadharname = document.getElementById("aadharname").value;
  const selectedNo = document.getElementById("selectedNo").value;
  const selectedName = document.getElementById("selectedName").value;
  const titledocName = document.getElementById("propertyname").value;
  const propertyAddress = document.getElementById("propertyAddress").value;
  const purchasername = document.getElementById("purchasername").value;
  const place = document.getElementById("place").value;
  const date = document.getElementById("date").value;
  document.querySelectorAll(".affname1").forEach((element) => {
    element.innerText = name1;
  });
  document.querySelectorAll(".affname2").forEach((element) => {
    element.innerText = name2;
  });
  document.querySelectorAll(".affname3").forEach((element) => {
    element.innerText = name3;
  });

  document.querySelector(".affage").innerText = age;
  document.querySelector(".affaddress").innerText = address;
  document.querySelector(".affpanno").innerText = panno;
  document.querySelector(".affpanname").innerText = panname;
  document.querySelector(".affaadharno").innerText = aadharno;
  document.querySelector(".affaadharname").innerText = aadharname;
  document.querySelector(".idproofno").innerText = selectedNo;
  document.querySelector(".idproofname").innerText = selectedName;
  document.querySelector(".titledocname").innerText = titledocName;
  document.querySelector(".titledocsadress").innerText = propertyAddress;
  document.querySelectorAll(".purchaserfullname").forEach((element) => {
    element.innerText = purchasername;
  });
  document.querySelector(".location").innerText = place;
  document.querySelector(".date").innerText = date;
}

function toggleInputFields() {
    const inputFields = document.getElementById("inputFields");
    const idType = document.getElementById("idType").value;
 
    if (idType === "") {
      inputFields.classList.add("hidden");
    } else {
      inputFields.classList.remove("hidden");
    }
    document.querySelectorAll(".idproof").forEach((element) => {
    element.innerText = idType;
  });
  }

  function updateSelection() {
const checkboxes = document.querySelectorAll('input[name="titledoc"]:checked');
const titledocsSpans = document.querySelectorAll('.titledocs');

 
if (checkboxes.length > 2) {
  alert('Please select only two options.');
  checkboxes.forEach((checkbox,index) => {
    checkbox.checked = false;
    titledocsSpans[index].textContent ='';
  });
}

checkboxes.forEach((checkbox, index) => {
  titledocsSpans[index].textContent = checkbox.value;
});

titledocsSpans.forEach((span, index) => {
  if (!checkboxes[index]) {
    span.textContent = '';
  }
});
}

function addressCheck() {
const propertyAddress = document.getElementById('propertyAdd');
const titledocsadress = document.querySelector('.titledocsadress');
const address = document.getElementById('address').value;
const propertyAddressInput = document.getElementById('propertyAddress');

if (propertyAddress.checked) {
  titledocsadress.textContent = address;
  propertyAddressInput.value = address;
} else {
  titledocsadress.textContent = '';
  propertyAddressInput.value = '';
}
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

//for preview

// function handlePreview(){
//   const { jsPDF } = window.jspdf;
//   const pdfDoc = new jsPDF('l', 'mm', [800, 1200]);
//   const htmlElement = document.getElementById('pdfContent');


//   const contentWidth = htmlElement.offsetWidth;
//   const contentHeight = htmlElement.offsetHeight;

//   // Calculate the centering position
//   const centerX = (pdfDoc.internal.pageSize.width - contentWidth) / 2;
//   const centerY = (pdfDoc.internal.pageSize.height - contentHeight) / 2;

//   pdfDoc.html(htmlElement,{
//       callback:function(pdf){
//        const iframe = document.createElement('iframe');
//       iframe.src = pdf.output('datauristring');
//       iframe.width = '100%';
//       iframe.height = '500px'; 
//       document.body.appendChild(iframe);
//       },
//       x: centerX,
//     y: centerY,
//   })

// }

