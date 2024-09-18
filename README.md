# NFL Memory Game

![NFL](./images/nFLwireFrame.jpg)

## **_Rules and how to play the game_**

- This NFL-themed memory game challenges players to match current NFL players hidden behind a grid of squares. Players will select squares, trying to find matching. NFL Memory Game will consist of 12 squares. To win, you must successfully match all pairs. Hit reset to try again.

### **_Knowledge_**

- JavaScript Functions
- Scope
- conditionals
- CSS
- Some MDN (NFL)
- Accessability for those in need
- DOM
- New Functions - checkMactch(), flipcard()
- FlexBox
- MarkDown

  #### **_Some Syntax_**

  > > **_Example_**

```javascript
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

> #### **Tip**

- Look on the NFL site to reference current and relevant players [NFL](https://www.nfl.com/)

### **_Outline_**

#### **_MVP_**

- NFL match game where the player will have to match Hall of Fame & nfl players.

> > My Stretch Goals:
> > Screen shakes each round. However, each round the screen becomes more intense
> > Sped up timer each round
> > Audio voice over of the NFL player after the match
> > If th round is lost, a voice over will trigger something negative to the user.

![Raiders](https://i.pinimg.com/736x/26/50/d8/2650d84d943d19549ad2252ee18f3d80.jpg)

**_Go Raiders!_**
