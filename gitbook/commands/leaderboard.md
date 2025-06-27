---
description: Returns a leaderboard of the specified type.
---

# /leaderboard

## Usage

```
/leaderboard <type> {page}
```

## Arguments

| Name | Description                  | Type   | Required |
| :--: | :--------------------------: | :----: | :------: |
| type | The type of the leaderboard. | Enum   | Yes      |
| page | The number of the page.      | Number | No       |

### Possibilities

{% tabs %}

{% tab title="type" %}
- `Gold` - Returns the gold leaderboard.
- `Votes` - Returns the votes leaderboard.
{% endtab %}

{% endtabs %}

## Examples

![](https://forkman.vercel.app/_media/examples/leaderboard-0.png)
![](https://forkman.vercel.app/_media/examples/leaderboard-1.png)
