---
description: Returns all existing avatar items.
---

# /items

## Usage

```
/items {page} {raity} {gender} {type} {event}
```

## Arguments

| Name   | Description                        | Type   | Required |
| :----: | :--------------------------------: | :----: | :------: |
| page   | The number of the page.            | Number | No       |
| rarity | Filter by the rarity of the items. | Enum   | No       |
| gender | Filter by the gender of the items. | Enum   | No       |
| type   | Filter by the type of the items.   | Enum   | No       |
| event  | Filter by the event of the items.  | Enum   | No       |

### Possibilities

{% tabs %}

{% tab title="rarity" %}
- `Common` - Filters items by Common rarity.
- `Rare` - Filters items by Rare rarity.
- `Epic` - Filters items by Epic rarity.
- `Legendary` - Filters items by Legendary rarity.
{% endtab %}

{% tab title="gender" %}
- `Male` - Filters items by Male gender.
- `Female` - Filters items by Female gender.
- `Neutral` - Filters items by Neutral gender.
{% endtab %}

{% tab title="type" %}
- `Shirt` - Filters items by Shirt type.
- `Glasses` - Filters items by Glasses type.
- `Hair` - Filters items by Hair type.
- `Hat` - Filters items by Hat type.
- `Eyes` - Filters items by Eyes type.
- `Gravestone` - Filters items by Gravestone type.
- `Back` - Filters items by Back type.
- `Front` - Filters items by Front type.
- `Mask` - Filters items by Mask type.
- `Mouth` - Filters items by Mouth type.
- `Badge` - Filters items by Badge type.
{% endtab %}

{% tab title="event" %}
- `Easter` - Filters items by Easter event.
- `Soccer` - Filters items by Soccer event.
- `Halloween` - Filters items by Halloween event.
- `Xmas` - Filters items by Xmas event.
- `St. Patrick` - Filters items by St. Patrick event.
- `Wheel` - Filters items by Wheel event.
- `Items Collection` - Filters items by Items Collection event.
- `Early Bird` - Filters items by Early Bird event.
- `Calendar` - Filters items by Calendar event.
- `Battle Pass` - Filters items by Battle Pass event.
{% endtab %}

{% endtabs %}

## Examples

![](https://github.com/xNickyDev/Forkman/assets/111157596/e37854e2-2d81-4799-9e04-21fcec86e237)
![](https://github.com/xNickyDev/Forkman/assets/111157596/29b70ee6-1e6d-4cce-bca5-c4228cd07352)