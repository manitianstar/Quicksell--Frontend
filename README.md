# **Kanban Board Project** #

## **Overview** ##

This project is a Kanban board built using ReactJS, designed to help users manage tasks efficiently. The board allows for organizing tickets by three main functionalities: **Status**, **User Name**, and **Priority**. Additionally, the application will implement sorting capabilities for tickets based on **User Name** or **Priority**.

## **Features** ##

- **Grouping Tickets**: Users can group tickets based on:
  - **Status**: Display tickets based on their current status (e.g., To Do, In Progress, Done).
  - **User Name**: Group tickets assigned to each user.
  - **Priority**: Organize tickets by their assigned priority levels (e.g., High, Medium, Low).
- **Sorting Tickets**:
  - Tickets can be sorted by **User Name** or **Priority**.
  - Sorting functionality will be integrated into the existing grouping logic.

## **Technologies Used** ##

- **ReactJS**: For building the user interface.
- **Context API**: To manage application state and facilitate communication between components without prop drilling.

## **Implementation Details** ##

1. **Grouping Logic**:
   1. Tickets are grouped based on the selected groupBy option in the Context API.
   1. The current grouping state is tracked by a constant named groupBy.
1. **Sorting Logic** (to be implemented):
   1. A new constant named priority will be added to the Context API to track the sorting parameter (either by name or by priority).
   1. The ticket array used in the grouping functionality will be sorted based on the chosen parameter before being displayed.
