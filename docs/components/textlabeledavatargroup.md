# TextLabeledAvatarGroup

The `TextLabeledAvatarGroup` component is designed to display an avatar group of colleagues. It uses the Material UI's `AvatarGroup` component to render avatars for each colleague. If there are more colleagues than the maximum display limit, it shows a `+N` badge to indicate the additional number of colleagues. Below the avatar group, the total number of colleagues is displayed.

![TextLabeledAvatarGroup Component](../../static/media/text-labeled-avatar-group.png)

#### Props

- `team`: An object containing `members`, an array of colleagues that you want to display as avatars.
- `max`: The maximum number of avatars to display. Additional avatars are indicated by a `+N` badge.
