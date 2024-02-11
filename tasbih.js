//function for increment value
function incrementValue(peraTag){
        let primaryText=document.getElementById(peraTag).innerText;
       let primaryTextInt=parseInt(primaryText);
       primaryTextInt=primaryTextInt+1;
       const primaryTextIntToSting=toString(primaryTextInt);
      document.getElementById(peraTag).innerText=primaryTextInt
      if(primaryTextInt===31){
      alert('You have already complete this tasbih.Now you can jikir other tasbih')
      }
}
//function for decrement value
function decrementValue(peraTag){
    let primaryText=document.getElementById(peraTag).innerText;
    let primaryTextInt=parseInt(primaryText);
 if(primaryTextInt>0){
    primaryTextInt=primaryTextInt-1;
    document.getElementById(peraTag).innerText=primaryTextInt;
 }
 else{
    alert('Your count is 0.So please at first increase you Tasbih')
 }
}

//add evet for increment value of the text field
document.getElementById('btn-increment').addEventListener('click',function(){
    const peraTag='count-text'
    incrementValue(peraTag);
})
document.getElementById('btn-increment2').addEventListener('click',function(){
    const peraTag='count-text1'
    incrementValue(peraTag);
})
document.getElementById('btn-increment3').addEventListener('click',function(){
    const peraTag='count-text2'
    incrementValue(peraTag);
})

//for decremental value
document.getElementById('btn-decrement').addEventListener('click',function(){
   const peraTag='count-text';
   decrementValue(peraTag);
})

document.getElementById('btn-decrement2').addEventListener('click',function(){
    const peraTag='count-text1'
    decrementValue(peraTag);
})
document.getElementById('btn-decrement3').addEventListener('click',function(){
    const peraTag='count-text2'
    decrementValue(peraTag);
})
