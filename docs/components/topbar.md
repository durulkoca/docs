# TopBar

The `TopNavBar` component serves as the main navigation bar at the top of your application. It provides a collection of menus and buttons for user actions like selecting a team, navigating to different pages, and accessing user settings.

![TopBar Component](../../static/media/topbar.png)

## Props

Here are the props that `TopBar` accepts:

- `anchorElUser`: Element to anchor the User Menu.
- `handleOpenUserMenu`: Function to handle opening of User Menu.
- `handleCloseUserMenu`: Function to handle closing of User Menu.
- `teamState`: Object containing data related to teams.
- `onTeamSelect`: Function to handle the selection of a team.
- `routes`: Array of objects containing route information.
- `sideBarToggle`: Function to toggle the sidebar's visibility.
- `selectedTeam`: Currently selected team's data object.
- `setSelectedTeam`: Function to set the selected team.

## Functionality

- Team Selection: A dropdown menu allows users to select their desired team.
- Dynamic Routes: Dynamically generated routes based on the `routes` prop.
- User Menu: A user avatar that reveals more options upon clicking.

## Usage

Below is an example that demonstrates how to use `TopBar`:

```jsx
<TopBar
  anchorElUser={...}
  handleOpenUserMenu={...}
  handleCloseUserMenu={...}
  teamState={...}
  onTeamSelect={...}
  routes={...}
  sideBarToggle={...}
  selectedTeam={...}
  setSelectedTeam={...}
/>
```
