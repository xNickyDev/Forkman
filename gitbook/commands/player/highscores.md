---
description: Returns all current player highscores.
---

# /player highscores

## Usage

```
/player highscores
```

## Arguments

| Name   | Description                                          | Type   | Required |
| :----: | :--------------------------------------------------: | :----: | :------: |
| page   | The number of the page.                              | Number | No       |
| period | The period from which highscores should be returned. | Enum   | No       |

### Possibilities

{% tabs %}

{% tab title="period" %}
- `All Time` - Returns All Time highscores.
- `Monthly` - Returns Monthly highscores.
- `Weekly` - Returns Weekly highscores.
- `Daily` - Returns Daily highscores.
{% endtab %}

{% endtabs %}

## Examples

![](https://forkman.vercel.app/_media/examples/player/highscores-0.png)
![](https://forkman.vercel.app/_media/examples/player/highscores-1.png)
![](https://forkman.vercel.app/_media/examples/player/highscores-2.png)