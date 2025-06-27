---
description: Gets the ID of a player or clan.
---

# /id

## Usage

```
/id <type> <name>
```

## Arguments

| Name | Description                      | Type   | Required |
| :--: | :------------------------------: | :----: | :------: |
| type | The type of which to get its ID. | Enum   | Yes      |
| name | The name of the selected type.   | String | Yes      |

### Possibilities

{% tabs %}

{% tab title="type" %}
- `Player` - Gets the ID of a player.
- `Clan` - Gets the ID of a clan.
{% endtab %}

{% endtabs %}

## Examples

![](https://forkman.vercel.app/_media/examples/id-0.png)
![](https://forkman.vercel.app/_media/examples/id-1.png)