# Web Development Final Project - *Final Project*

Submitted by: **Jarett Spuck**

This web app: Project Overview:

I developed an interactive website dedicated to car enthusiasts where users can engage with content related to various car models. The site allows users to post details about cars, edit their posts, delete unwanted content, vote on their favorite posts, and filter through posts based on different criteria like model, make, or popularity.

Technology Stack:

Supabase: I utilized Supabase as the backend-as-a-service platform to handle all backend operations including the database and server-side logic. Supabase provided a scalable PostgreSQL database which stored all user-generated content and metadata. Its authentication and real-time capabilities enabled dynamic user interactions such as posting, voting, and immediate viewing of updates.
Netlify: The frontend of the site was built using React and hosted on Netlify, ensuring seamless delivery and high availability of the web application. Netlify's continuous deployment from a Git repository enabled automatic updates to the live site whenever changes were committed to the codebase.
Implementation Details:

Posting and Editing: Users can create new posts detailing car specifications and images. The posts can be edited later through intuitive interfaces, which communicate with Supabase to update entries in real-time.
Deleting Posts: Posts can be deleted with a single click. This action immediately removes the data from the database and updates the user interface without page reloads, thanks to Supabase's instant data manipulation capabilities.
Voting System: A voting system allows users to upvote or downvote posts. Supabase functions track these votes and update post rankings accordingly.
Filtering: Users can filter posts based on various criteria such as car make, model, year, and popularity. This is facilitated through Supabase’s query capabilities, which allow for efficient data retrieval based on specified parameters.

Conclusion: This project not only enhanced my skills in full-stack development but also deepened my understanding of leveraging modern cloud services like Supabase and Netlify to build responsive and user-friendly web applications.

Time spent: **15** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A create form that allows the user to create posts**
- [x] **Posts have a title and optionally additional textual content and/or an image added as an external image URL**
- [x] **A home feed displaying previously created posts**
- [x] **By default, the time created, title, and number of upvotes for each post is shown on the feed**
- [x] **Clicking on a post shall direct the user to a new page for the selected post**
- [x] **Users can sort posts by either their created time or upvotes count**
- [x] **Users can search for posts by title**
- [x] **A separate post page for each created post, where any additional information is shown is linked whenever a user clicks a post**
- [x] **Users can leave comments underneath a post on the post's separate page**
- [x] **Each post should have an upvote button on the post's page. Each click increases its upvotes count by one and users can upvote any number of times**
- [x] **A previously created post can be edited or deleted from its post page**

The following **optional** features are implemented:

- [x] Users can only edit and deleted posts or delete comments by entering the secret key, which is set by the user during post creation
- [x] Upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them.
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [ ] Users can customize the interface of the web app
- [ ] Users can share and view web videos
- [ ] Users can set flags while creating a post. Then users can filter posts by flags on the home feed.
- [ ] Users can upload images directly from their local machine as an image file
- [ ] Display a loading animation whenever data is being fetched

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

[Here's a walkthrough of implemented user stories:](https://drive.google.com/file/d/1MF3jkvdF-bAEFGWsMYTgdMRoFgPXpMW9/view?usp=sharing)

resonant-kashata-0b09f0.netlify.app


<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
