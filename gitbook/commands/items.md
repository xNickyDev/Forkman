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
- `Hair` - Filters items by Hair type.
- `Hat` - Filters items by Hat type.
- `Glasses` - Filters items by Glasses type.
- `Gravestone` - Filters items by Gravestone type.
- `Front` - Filters items by Front type.
- `Back` - Filters items by Back type.
- `Eyes` - Filters items by Eyes type.
- `Badge` - Filters items by Badge type.
- `Mask` - Filters items by Mask type.
- `Mouth` - Filters items by Mouth type.
- `Legs` - Filters items by Legs type.
{% endtab %}

{% tab title="event" %}
- `Christmas` - Filters items by Christmas event.
- `Easter` - Filters items by Easter event.
- `Halloween` - Filters items by Halloween event.
- `Early Bird` - Filters items by Early Bird event.
- `St. Patrick` - Filters items by St. Patrick event.
- `Battle Pass` - Filters items by Battle Pass event.
- `Wheel` - Filters items by Wheel event.
- `Items Collection` - Filters items by Items Collection event.
- `Soccer` - Filters items by Soccer event.
- `Calendar` - Filters items by Calendar event.
- `Subscription` - Filters items by Subscription event.
- `Role Cards` - Filters items by Role Cards event.
- `Level Up Card` - Filters items by Level Up Card event.
- `Emojis Collection` - Filters items by Emojis Collection event.
- `Bundle Offer` - Filters items by Bundle Offer event.
- `Honor Reward` - Filters items by Honor Reward event.
- `Twitch` - Filters items by Twitch event.
- `Black Friday` - Filters items by Black Friday event.
- `Football 2026` - Filters items by Football 2026 event.
{% endtab %}

{% endtabs %}

## Examples

![](https://forkman.vercel.app/_media/examples/items-0.png)
![](https://forkman.vercel.app/_media/examples/items-1.png)