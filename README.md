# Development

### Link to Deployed Website

[https://VictoriousPanda757.github.io](https://VictoriousPanda757.github.io)

### API Used

[https://randomuser.me/](https://randomuser.me/)

### Goal and Value of the Application

The goal of this application is to provide users a way to search and query the contact information of their friends and family. The contact information include the name, phone number (both home and cell), email address, birthday, and location of the contact. Users will be able to filter the contacts by first name, last name, and state; and sort the contacts by first name in ascending or descending order. The value of the filter and sort features is to provide users a way to search and query their contacts in an efficient way.

Users will also be able to favorite their contacts and to see aggregated information of these favorite contacts. The aggregated information include the number of favorites, the total number of contacts, the average age of the favorites, the total age of the favorites, the number of females in the favorites, and the number of males in the favorites. These statistics could help users to better understand their contacts at a quick glance.

Users are also able to remove contacts from their favorites. They can do this by either clicking on the button for a specific contact card in both the contact list and favorite section or by hitting the "Clear Favorites" button at the top of the favorites section. This allows users to remove contacts from their favorites if they no longer want to keep them there.

### Usability Principles Considered

From a functionality perspective, I made sure to provide users a way to search and query their contacts in an efficient, easy way. That is, the filter and and sort features are a dropdown located at the top of the screen where users can easily access and view. These components are also not sticky to accommodate users on smaller devices who may want to see more of their screen. On larger devices, the favorites section is flexed to the right of the screen so that users can see both their contacts and favorites at the same time; whereas, on smaller devices, the favorites section is flexed to the top of the screen so that users can easily access and see their favorites first.

From a design perspective, I used Material UI as a UI framework to provide users with a consistent look and feel across the application. The application is also fully responsive and all images have alt tags for accessibility purposes. The DOM is also fairly well structured, so there is no unnecessary clutter for users using screen readers. The code is also well commented and organized to make it easy for other developers to understand and work on, along with Java Doc comments for all methods.

### Organization of Components

The entrypoint into the program is the `App` component (technically the `index.html` but the `App` component is rendered at the root of the DOM). The `App` component then fetches the data from the API using an useEffect which is called when the component first mounts. The user data is then stored as an Array of IUsers in a state variable. `IUsers` is a type interface that is defined in the `types` directory that contains the properties of a user. The `App` component then maps over the Array of IUsers and renders a `User` component for each user. The `User` component is a functional component that takes in the user along with other fields as props, and uses the user to build the contact card that is displayed on the website.

The CSS for the entire application is located in the App.css file.

### How Data is Passed Down Through Components

Data is passed down through components as props from the parent to the child. The `App` component (the parent) passes the user, an array of favorite users, and a setter that sets the favorite users array to the `User` component (the child). In the `User` component, the props are then destructured and used to build the contact card. The user that is passed down is of type `IUser`, which is an interface that is defined in the `types` directory. Some of the fields of an IUser is a JSON, so further indexing is required to access certain fields.

### How the User Triggers State Changes

Information also trickles up from the child to the parent through the setter function that is passed down in the prop. Essentially, the setter is called when a user clicks on the "Add to favorites" button on a contact card, which causes the `App` component to re-render and update the state of the favorite users array. This then updates the favorites section of the application, which is what makes the application dynamic and reactive.

A user is also able to unfavorite a contact from both the favorites section and the contact list. This is done by clicking on the "Remove from favorites" button on the contact card in either sections or by clicking on the "Clear Favorites" button at the top of the favorites section. From a technical perspective, clearing the list and resetting the button states is achieved through a useEffect in both the `App` and `User` components with the favorites array acting as a dependency.
