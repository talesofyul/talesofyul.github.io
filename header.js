// Get the <header> element
const headerElement = document.querySelector('header');

// Get the title of the current page
const pageTitle = document.title.split(' | ')[0];

// Create the breadcrumb HTML
const breadcrumbHTML = `
<nav class="breadcrumb">
    <ul>
      <li><a href="/">Tales Of Yul</a></li> -
      <li>${pageTitle}</li>
    </ul>
  </nav>
`;

// Set the breadcrumb HTML as the content of the <header> element
headerElement.innerHTML = breadcrumbHTML;
