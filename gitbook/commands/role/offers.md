---
description: Returns all existing role card offers of the specified type.
---

# /role offers

## Usage

```
/role offers <type> {page} {role}
```

## Arguments

| Name | Description                       | Type   | Required |
| :--: | :-------------------------------: | :----: | :------: |
| type | The type of the role card offers. | Enum   | Yes      |
| page | The number of the page.           | Number | No       |
| role | The name or ID of the role.       | String | No       |

### Possibilities

{% tabs %}

{% tab title="type" %}
- `Base` - Returns all existing base role card offers.
- `Advanced` - Returns all existing advanced role card offers.
{% endtab %}

{% endtabs %}

## Examples

![](https://forkman.vercel.app/_media/examples/role/offers-0.png)
![](https://forkman.vercel.app/_media/examples/role/offers-1.png)
![](https://forkman.vercel.app/_media/examples/role/offers-2.png)
