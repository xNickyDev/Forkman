# Arguments

This section will explain the various bracket and argument types used for command arguments. Command arguments are anything that goes in the brackets `<>` and `{}` of a command.

## Bracket Types

The bracket around an argument indicates whether the argument is required (must be included) or optional (can be included, but not required). There are three types of brackets that we use for Forkman:

* `<>` - This argument is required, it **must** be included.
* `{}` - This argument is optional, it **can** be included but not required.
* `()` - This holds enum values for the argument, **one** option must be picked and specified.

> [!NOTE]
> **Do not include** the brackets (`<>`, `{}` and `()`) when using a command.

## Argument Types

<table data-full-width="false"><thead><tr><th width="139">Type</th><th>Description</th></tr></thead><tbody><tr><td>String</td><td>Used in most cases. A string can be any character or text.</td></tr><tr><td>Number</td><td>Any number without decimal.</td></tr><tr><td>URL</td><td>A valid domain link, must be prefixed by <code>http://</code> or <code>https://</code> and have a valid domain name.</td></tr><tr><td>Enum</td><td>Strings that match a certain key value provided in the option of a command.</td></tr><tr><td>Emoji</td><td>Emoji as unicode (😄) or the Discord custom emojis (<code>&#x3C;a:emoji_name:emoji-id></code> for animated and <code>&#x3C;:emoji_name:emoji-id></code> for normal emojis) format.</td></tr><tr><td>Command</td><td>Any valid and existing command name of Forkman, e.g. <code>/help</code>.</td></tr><tr><td>Boolean</td><td>One of: <code>yes</code>/<code>no</code> or <code>true</code>/<code>false</code>.</td></tr><tr><td>User</td><td>A valid Discord user ID, mention or name.</td></tr></tbody></table>
