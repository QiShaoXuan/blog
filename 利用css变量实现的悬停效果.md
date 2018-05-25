![hover](E:\mygit\blog\img\hover.gif)

#### css

```css
 .button {
        width:200px;
        position: relative;
        appearance: none;
        background: #f72359;
        padding: 1em 2em;
        border: none;
        color: white;
        font-size: 1.2em;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        border-radius: 100px;
    }

    .button span {
        position: relative;
    }

    .button::before {
        --size: 0;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, #4405f7, transparent);
        transform: translate(-50%, -50%);
        transition: width .2s ease, height .2s ease;
    }

    .button:hover::before {
        --size: 400px;
    }
```

#### html

```html
<div class="button"><span>hover me to change</span></div>
```

#### js

```js
   document.querySelector('.button').onmousemove = (e) => {

      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop

      e.target.style.setProperty('--x', `${ x }px`)
      e.target.style.setProperty('--y', `${ y }px`)

   }
```

