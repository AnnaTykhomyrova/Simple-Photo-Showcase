# Simple Photo Showcase using [500px API](https://github.com/500px/legacy-api-documentation)

## Description 

Web app showcases Popular photos from 500px. It shows photos in “Popular” feature dynamically obtained from the 500px API. The list supports pagination and allows users to browse through multiple pages of content.

When user clicks on a photo on the grid, a full screen version of the photo displays along with the more detailed information about the photo, such as its title and description.

## Final product

#### Photo Showcase page. Top pagination.
!["Screenshot of top photo showcase page."](https://github.com/AnnaTykhomyrova/Simple-Photo-Showcase/blob/master/docs/photo-showcase-top-page.png)

#### Photo Showcase page. Bottom pagination.
!["Screenshot of bottom photo showcase page."](https://github.com/AnnaTykhomyrova/Simple-Photo-Showcase/blob/master/docs/photo-showcase-bottom-page.png)

#### Photo Showcase. Details page. 
!["Screenshot of photo showcase details page."](https://github.com/AnnaTykhomyrova/Simple-Photo-Showcase/blob/master/docs/photo-showcase-details-page.png)

## Tech Stack
- Express
- Node
- React


1) Flexible lightbox component  [React Image Lightbox](https://www.npmjs.com/package/react-image-lightbox) has been used to display images in this React project.

It has features listed below:
- Keyboard shortcuts (with rate limiting)
- Image Zoom
- Flexible rendering using src values assigned on the fly
- Image preloading for smoother viewing
- Mobile friendly, with pinch to zoom and swipe
- No external CSS

2) Pagination functionality was implemented with custom class component. 
One component was used at the top of the page and the second one was used at the bottom of the page.
They are also synchronized with each other.

3) For runtime type checking was used [prop-types](https://www.npmjs.com/package/prop-types).
PropTypes is a library that helps in minimizing data types problem in React by checking the types passed in the props object against a specification that was set beforehand and to raise a warning if the types passed don't match the types expected.
