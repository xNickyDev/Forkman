---
description: Returns all existing collections of the specified type.
---

# /collections

## Usage

```
/collections <type> {page}
```

## Arguments

| Name | Description                 | Type   | Required |
| :--: | :-------------------------: | :----: | :------: |
| type | The type of the collection. | Enum   | Yes      |
| page | The number of the page.     | Number | No       |

### Possibilities

{% tabs %}

{% tab title="type" %}
- `Emojis` - Returns the emoji collections.
- `Items` - Returns the item collections.
{% endtab %}

{% endtabs %}

## Examples

![](https://forkman.vercel.app/_media/examples/collections-0.png)
![](https://forkman.vercel.app/_media/examples/collections-1.png)
