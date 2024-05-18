# Draggable Profile Card

This is a minimalistic profile card component with draggable functionality built using React and Next.js. The profile card features animations for smooth transitions when dragged across the page. It includes a profile picture, name, occupation, brief description, and contact information, along with social media links represented by small circular icons.

**Live Site: [thesagor.com](https://thesagor.com)**

**Live Site Vercel: [ryanL.vercel.app](https://ryanl.vercel.app)**
## Features

- Draggable profile card with smooth animations.
- Minimalist design with profile details aligned on the left side.
- Responsive design for adaptability across various screen sizes.
- Integration of social media links as small circular icons.
- Global styles with CSS resets to ensure consistent look and feel.
- Disabled right-click context menu and text selection within the profile card.

## Project Structure
```
project-directory/
├── components/
│   ├── ProfileCard.js
│   └── SocialMediaIcons.js
├── pages/
│   ├── index.js
│   └── _app.js
├── public/
│   ├── favicon.ico
│   └── profile-picture.jpg
├── styles/
│   ├── ProfileCard.module.css
│   ├── SocialMediaIcons.module.css
│   └── globals.css
├── package.json
├── next.config.js
└── README.md
```



## Installation

1. Clone the repository:
```
git clone https://github.com/MdSagorMunshi/draggable-profile-card.git
cd draggable-profile-card
```

2. Install dependencies:
```
npm install
```
3. Run the development server:
 ```
npm run dev 
```

   **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Usage

### Components

- **ProfileCard.js**: The main profile card component.
- **SocialMediaIcons.js**: Component for rendering social media icons.

### Styles

- **ProfileCard.module.css**: Styles specific to the profile card component.
- **SocialMediaIcons.module.css**: Styles specific to the social media icons component.
- **globals.css**: Minimal global styles and CSS resets.

### Pages

- **index.js**: The main page that renders the profile card.
- **_app.js**: Custom App component for initializing pages and importing global styles.

### Public Assets

- **favicon.ico**: Favicon for the application.
- **profile-picture.jpg**: Profile picture.

## Customization

- To change the profile details, edit the `ProfileCard.js` component.
- To add or modify social media links, update the `SocialMediaIcons.js` component.
- Customize styles in the respective CSS modules (`ProfileCard.module.css` and `SocialMediaIcons.module.css`).

## License

This project is licensed under the [MIT](LICENSE) License.
