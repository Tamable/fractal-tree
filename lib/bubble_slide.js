const BubbleSlide  = () => {

  const slideArr = [
    "<p>An L-system (a.k.a. Lindenmayer system) is a string rewriting system.</p>",
    "<p>An L-system (a.k.a. Lindenmayer system) is a string rewriting system.</p><br><p>It is a popular tool for simulating complex organic structures, such as plants.</p>",
    "<p>An L-system (a.k.a. Lindenmayer system) is a string rewriting system.</p><br><p>It is a popular tool for simulating complex organic structures, such as plants.</p><br><p>The basic idea is to define complex objects by successively replacing parts of a simple object, using a set of rewriting rules.</p>",

    "<p>The rewriting process starts with a simple string called 'axiom.'</p>",
    "<p>The rewriting process starts with a simple string called 'axiom.'</p><br><p>Let's say, we want to use the letter 'A' as the axiom, and</p>",
    "<p>The rewriting process starts with a simple string called 'axiom.'</p><br><br><p>Let's say, we want to use the letter 'A' as the axiom, and</p><p>set a rewriting rule that replaces 'A' with 'AB' each iteration.</p>",

    "<p>1st iteration: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A</p>",
    "<p>1st iteration: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A</p><p>2nd iteration: &nbsp;&nbsp;&nbsp;AB</p>",
    "<p>1st iteration: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A</p><p>2nd iteration: &nbsp;&nbsp;&nbsp;AB</p><p>3rd iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B</p>",
    "<p>1st iteration: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A</p><p>2nd iteration: &nbsp;&nbsp;&nbsp;AB</p><p>3rd iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B</p><p>4th iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B&nbsp;B</p></p>",
    "<p>1st iteration: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A</p><p>2nd iteration: &nbsp;&nbsp;&nbsp;AB</p><p>3rd iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B</p><p>4th iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B&nbsp;B</p></p><p>5th iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B&nbsp;B&nbsp;B</p>",
    "<p>1st iteration: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A</p><p>2nd iteration: &nbsp;&nbsp;&nbsp;AB</p><p>3rd iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B</p><p>4th iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B&nbsp;B</p></p><p>5th iteration: &nbsp;&nbsp;&nbsp;AB&nbsp;B&nbsp;B&nbsp;B</p><p>so on and so forth... You get the idea.</p>",

    "<p>What can we do with these strings?</p>",
    "<p>What can we do with these strings?</p><br><p>We could write a poem...</p>",
    "<p>What can we do with these strings?</p><br><p>We could write a poem...</p><p>...but not today.</p>",

    "<p>Let's apply this string-manipulation system to a graphics routine in which...</p>",
    "<p>Let's apply this string-manipulation system to a graphics routine in which...</p><p>...each character in the string represents a position/angle instruction for drawing intricate branches.</p>",

    "<p>Click the Grow! button, and your tree will start growing inside the magic window.</p>",
    "<p>Click the Grow! button, and your tree will start growing inside the magic window.</p><br><p>The string that is used to draw the tree gets very long very quickly.</p>",
    "<p>Click the Grow! button, and your tree will start growing inside the magic window.</p><br><p>The string that is used to draw the tree gets very long, very quickly.</p><p>Please click the Grow! button no more than 7 times to avoid the browser from freezing up.</p>",

    "<p>Thank you, and enjoy!</p>"
  ]

  let intrvl;
  let bubbleArr = Array.from(document.getElementById('bubbles').children);
  for (let i = 0; i < bubbleArr.length; i++) {
    bubbleArr[i].style.background = 'rgba(0, 0, 0, 0.1)';
  }
  let content = document.getElementById('bubble-content');
  let i = -1;
  intrvl = setInterval(() => {
    i++;
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

    }
  }, 5000)
}

module.exports = BubbleSlide;
