# /clan search

Returns information about the given clan.

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

> [!TIP]
> You can use the [`/id`](commands/id.md) command to get the ID of any clan.

### Possibilities

<!-- tabs:start -->

#### **join_type**

- `Anyone can join` - Filters clans by "Anyone can join" join type.
- `Invite only` - Filters clans by "Invite only" join type.
- `Closed` - Filters clans by "Closed" join type.

#### **sort**

- `XP` - Sorts clans by XP.
- `Name` - Sorts clans by Name.
- `Quests` - Sorts clans by Quests.
- `Level to join` - Sorts clans by Level to join.
- `Creation time` - Sorts clans by Creation time.

<!-- tabs:end -->

## Examples

<img src="https://user-images.githubusercontent.com/111157596/229905324-206236fb-84bf-4c59-80d8-d6c61dccb0e7.png" class="rounded-corners">\
<img src="https://user-images.githubusercontent.com/111157596/262069321-6a01b945-bb17-47c0-bbf8-ff9dea2e9582.png" class="rounded-corners">