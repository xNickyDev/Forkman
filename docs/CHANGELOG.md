# Changelog

## 2025

### June
* Grouped info-related bot commands under `/bot`
* Added `/announcements` (for wov announcements)
* Added `/changelogs` (for wov changelogs)
* Added `/profile borders`
* Added `/rose skins`
* Added `/clan blocklist`
* Added `/battlepass shop`
* Fixed `/help` sometimes failing

### April
* Fixed `/ask` returns internal server error

### March
* Added `/game tictactoe`
* Added "Members" button to `/clan search` and `/clan info`

### February
* Fixed vote tracker can't be enabled
* Added `/clan message`

### January
* Added `/bodypaints`

## 2024

### December
* Removed support of all games for the user-installed app due to certain issues
* Added **Event** field to `/role icons`

### November
* Added `/announcements`
* Made improvements to `/game question`:
  * Excluded all "Random" roles from aura questions
  * Excluded "Assassin" role from aura and team questions
  * Added multiple team answers for all "Random" roles
  * If a question was answered incorrectly, all possible answers are now listed instead of just one

### October
* Added new page navigation buttons to `/offers`
* New hidden parts (avatars/roses) of player profiles are now flagged as hidden

### September
* Added user-install support for non-sub commands
* Added full user-install support

### August
* Added `/clan quest buy`
* Added `/clan quest shop`
* Added `/clan quest shuffle`
* Added "Arguments" select menu to `command` option of `/help`
* Added `/game lightsout`
* Added `/game flood`

### July
* Added "Role Cards" option to player profiles
* Added `/suggest`

### June
* Updated `/items`
* Updated `/leaderboard` and added page navigation buttons
* Updated `/collections` and added "Preview collection" select menu
* Added new page navigation buttons to `/quests`
* Updated `/outfits` and added new buttons

### May
* Fixed providing invalid game mode causes no response of `/role rotations`
* Made it possible to use player IDs at `/player search`
* Renamed button "Participants" to **Contributed** at `/clan quest history`
* Added info about quest XP to Contributed button of `/clan quest history`
* Increased the time of `/game bomber` from 40s to **60s**
* Added questions about role icons to `/game question`
* Added `/clan quest info`
* Added `/clan member search`
* Switched documentation to slash commands
* Updated `/help`
* Added `/game memory`
* Updated `command` option of `/help`

### April
* Added `/player info`
* Added `/clan info`
* Officially added "Rewards" button to `/battlepass season`
* Renamed difficulty "Normal" to **Medium** at `/game bomber`
* Updated "End Game" button layout of games
* Added "Balance" button to `/clan info`
* Added "Replay" button to `/game rps` (available after a match)
* Added required `type` option to `/role offers`
* Added "Background" button to `/battlepass season`

### March
* Added `-rockpapersword` (Alias: `-rps`) and `/game rps`
* Added `/clan announcements`
* Added `/clan quest votes`
* Added `/clan quest history`
* Added `-rolerotations` (Alias: `-setups`) and `/role rotations`
* Fixed `-clan` not following new page navigation button style
* Fixed `-glassbridge` not working
* Fixed `-hangman` not working
* Renamed `/profile` to `/player search`

### February
* Fixed `/ask` not responding
* Partly fixed `/items` sometimes not responding
* Added `-roleoffers` and `/role offers`
* Renamed `/vote` to `/vote link`
* Added `/vote tracker`
* Added `-talismans` (Alias: `-talis`) and `/talismans`
* Minor changes and bug fixes

### January
* Adapted `-challenges` to the new update
* Added `-battlepass` (Aliases: `-bp`, `-season`) and `/battlepass`
* Fixed **Code** field of `-profile`'s \"Avatars\" option not working
* Added suggested role names search to `/roleinfo`
* Fixed `-changelog` and `/changelog` not working
* Added filter search options to `/items`
* Added a global cooldown to `/items` when using filters
* Officially added the Top.gg vote tracker
* Added `-leaderboard` (Aliases: `-lb`, `-top`) and `/leaderboard`
* Added **Format** field to `-loadingscreens`
* Added "Badges" option to `-profile`
* Added `-badges` and `/badges`
* Officially added `/verify`
* Renamed `/clan` to `/clan search`
* Added "Neutral" gender filter to `/items`
* Added year display to `-changelog`
* Added "Filter" overview button to `/clan` when using filters
* Renamed misleading filter option "full" to "not_full" at `/clan`
* Renamed "Language" field to **Region** at `/clan`
* Added `region` filter option to `/clan`
* Renamed argument `rolename` to `role` at `-roleinfo`
* Added `role` filter option to `/roleicons`
* Added `-glassbridge` (Alias: `-gb`) and `/game glassbridge`
* Added game introduction descriptions

## 2023

### December
* Added `year` option to `/changelog`
* Made it possible to retrieve command information using aliases
* Fixed country codes displayed in "Language" field of `-clan`
* Fixed some country flags not displayed at `-clan`
* Optimized `-clan`
* Added `-balance` and `/balance`
* **[Beta]** Added `-bomber` and `/bomber`
* Added suggested clan names search to `/clan`
* Added "Balance" user context menu
* Added suggested command names search to `/help`

### November
* Added `-quests`
* Added alias `role` to `-roleinfo`
* Added filter search options to `/clan`

### October
* Added "Last Updated" timestamp to `-changelog`
* Added page buttons to `-help`
* Added `command` option to `/help`
* Added alias `commands` to `-help`
* Added "Achievements" option to `-profile`

### September
* Fixed `-challenges` returning wrong error message when no BP Challenges are available
* Added optional `month` argument to `-changelog`
* Added `-uptime` and `/uptime`
* Added alias `vt` to `-vote`
* Added **Code** field to "Avatars" option of `-profile`
* Added **Flair** field to "Clan" option of `-profile`
* Updated `-hangman`

### August
* Added `-id` and `/id`
* Fixed `-changelog` not working
* Added all missing commands to `-help`
* Added working pages to `-help`
* Fixed `/help` not working with pages
* **[Beta]** Added `-ask` and `/ask`
* Fixed `-hangman`'s ephemeral message not showing up when clicking another user's button
* Fixed `-profile`'s ephemeral message not showing up when using another user's select menu
* Made it possible to use clan IDs at `-clan`
* Added `-vote` and `/vote`
* Added `/review`
* Decreased the mistakes amount of `-hangman` from 10 to **6**

### July
* Added **Format** field to `-backgrounds`
* Added `/botinfo`
* Fixed role 45 (Cupid) causing errors at `-roles`
* Fixed background name sometimes not displayed if selecting the format at `-backgrounds`
* Officially added `-hangman` and `/hangman`
* Added `/changelog`
* Fixed `-clan`'s first clan result not showing clans default color

### June
* Added `-collections` (Aliases: `-col`, `-collection`) and `/collections`
* Fixed `/profile` not working

### May

* Added `-changelog`
* Added `-botinfo` (Aliases: `-stats`, `-botstats`)
* Added aliases `player` and `playerinfo` to `-profile`
* Hidden parts of the player's profile are now flagged as hidden by the bot

### April

* Fixed `-challenges` next page button sometimes not working, causing the interaction to fail
* Added `-roles` and `/roles`
* Added `-roleinfo` and `/roleinfo`
* Added `-backgrounds` and `/backgrounds`
* Added `-commandinfo` (Aliases: `-command`, `-cmdinfo`, `-help`)
