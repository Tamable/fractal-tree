const BubbleSlide  = () => {

  const slideArr = [
    "<p>Let's say, we want to start with a single alphabet, 'A'...</p>",
    "<p>...and we set a rule that the letter 'A' turns into 'AB' for each iteration.</p>"
  ]

  // let node = document.createElement('p');
  // slideArr.forEach((sentence) => {
  // let textNode = document.createTextNode(sentence);
  // node.appendChild(textNode);
  // document.getElementById('bubble-content').appendChild(node);
  // })

  let bubbles = document.getElementById('bubbles').children;
  let bubbleArr = Array.from(bubbles);

  for (let i = 0; i < bubbleArr.length; i++) {
    bubbleArr[i].style.background = 'rgba(0, 0, 0, 0.1)';
  }

  let i = 0;

  setInterval(function() {
    if (i < bubbleArr.length) {
      bubbleArr[i].style.background = '#999';
      document.getElementById("bubble-content").innerHTML = slideArr[i];
      document.getElementById("bubble-content").style.opacity = 1;
      i++;
    }
  }, 3000)

  document.getElementById('bubble-content').style.opacity = 0;
}

module.exports = BubbleSlide;
