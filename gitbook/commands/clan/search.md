---
description: Returns information about the given clan.
---

# /clan search

## Usage

```
/clan search <name> {join_type} {not_full} {exact_name} {min_level} {max_level} {sort} {region}
```

## Arguments

| Name       | Description                                                   | Type    | Required |
| :--------: | :-----------------------------------------------------------: | :-----: | :------: |
| name       | The name or ID of the clan.                                   | String  | Yes      |
| join_type  | Select the join type of the clan.                             | Enum    | No       |
| not_full   | Whether to only search for not null clans.                    | Boolean | No       |
| exact_name | Whether to only search for clans that exactly match the name. | Boolean | No       |
| min_level  | Define the minimum level to join the clan.                    | Number  | No       |
| max_level  | Define the maximum level to join the clan.                    | Number  | No       |
| sort       | Select the sorting by type for the clan.                      | Enum    | No       |
| region     | Select the region/language of the clan.                       | String  | No       |

{% hint style="info" %}
You can use the [`/id`](commands/id.md) command to get the ID of any clan.
{% endhint %}

### Possibilities

{% tabs %}

{% tab title="join_type" %}
- `Anyone can join` - Filters clans by "Anyone can join" join type.
- `Invite only` - Filters clans by "Invite only" join type.
- `Closed` - Filters clans by "Closed" join type.
{% endtab %}

{% tab title="sort" %}
- `XP` - Sorts clans by XP.
- `Name` - Sorts clans by Name.
- `Quests` - Sorts clans by Quests.
- `Level to join` - Sorts clans by Level to join.
- `Creation time` - Sorts clans by Creation time.
{% endtab %}

{% endtabs %}

## Examples

![](https://github.com/xNickyDev/Forkman/assets/111157596/efc05c1e-715f-4c3e-9a8c-f7c682955795)
![](https://github.com/xNickyDev/Forkman/assets/111157596/21942d75-d56a-4893-9cf5-a3ce28e127c1)