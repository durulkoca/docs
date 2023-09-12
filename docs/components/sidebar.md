# Sidebar

The `Sidebar` component is a navigational sidebar that appears on the left side of the application. It provides a list of routes the user can navigate to, each with an associated icon and label.

![Sidebar Component](../../static/media/sidebar.png)

## Props

Here are the props that `Sidebar` accepts:

- `routes`: Array of route objects, where each object contains the URL and name for the route, and optionally an icon.
- `isCollapsed`: Boolean indicating whether the sidebar is in a collapsed state.

## Usage

Here is a sample usage of the `Sidebar` component:

```jsx
<Sidebar routes={routes} isCollapsed={isCollapsed} />
```
