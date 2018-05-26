const BubbleSlide  = () => {

  const slideArr = [
    "<p>Let's say, we are going to start with a single alphabet, 'A'...</p>",
    "<p>Let's say, we are going to start with a single alphabet, 'A'...</p><p>...and we set a rule that the letter 'A' turns into 'ABC' for each iteration.</p>",
    "<p>1st iteration: <strong>A</strong></p>",
    "<p>1st iteration: <strong>A</strong></p><p>2nd iteration: <strong>ABC</strong></p>",
    "<p>1st iteration: <strong>A</strong></p><p>2nd iteration: <strong>ABC</strong></p><p>3rd iteration: <strong>ABC</strong>BC</p>",
    "<p>1st iteration: <strong>A</strong></p><p>2nd iteration: <strong>ABC</strong></p><p>3rd iteration: <strong>ABC</strong>BC</p><p>4th iteration: <strong>ABC</strong>BCBC</p></p>",
    "<p>You get the idea.</p>",
    "<p>What can we do with these strings?</p>",
    "<p>We could write a poem...</p>",
    "<p>...but let's draw a tree instead!</p>"
  ]

  // let node = document.createElement('p');
  // slideArr.forEach((sentence) => {
  // let textNode = document.createTextNode(sentence);
  // node.appendChild(textNode);
  // document.getElementById('bubble-content').appendChild(node);
  // })
  let intrvl;

  let bubbleArr = Array.from(document.getElementById('bubbles').children);
  for (let i = 0; i < bubbleArr.length; i++) {
    bubbleArr[i].style.background = 'rgba(0, 0, 0, 0.1)';
  }
  let content = document.getElementById('bubble-content');
  let i = 0;
  intrvl = setInterval(() => {

    content.style.opacity = 0;

    for (let i = 0; i < bubbleArr.length; i++) {
      bubbleArr[i].style.background = 'rgba(0, 0, 0, 0.1)';
    }

    if (i < bubbleArr.length) {
      bubbleArr[i].style.background = '#999';

      setTimeout(() => {
        content.innerHTML = slideArr[i];
        content.style.opacity = 1;
      }, 300);

      i++;
    }
  }, 5000)
}

module.exports = BubbleSlide;
