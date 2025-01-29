<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<div align="center">

<h3 align="center">AIME 2.0</h3>

  <p align="center">
    A repository to organize my primary focus for Aspen Systems, Inc. I have initiated the redesign of a proprietary software Aspen Systems has used since 2008 which has since had very few updates to functionality and appearance.
    My goal within this project is to create a useful and visually appealing React application for the production team at Aspen Systems. The purpose of the AIME application (Aspen Integrated Manufacturing Environment) is to ensure that a node or computer is parts complete,
    parts are functioning, the nodes are named properly, and the node can meet or exceed benchmarks for tests such as HPL/CPU, Disk, Network, USB, and IPMI, among others. AIME 2.0 aims to replicate the functionality that exists within its predecessor and expand on 
    it by implementing features suggested by the production team and management. 
    <br />
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </li>
  </ol>
</details>


### Built With

* [![React][React.js]][React-url]
* [![MUI][MaterialUI]][MaterialUI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To run it locally follow the instructions below:

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mamsk3900/AIME2.0.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run it locally
   ```sh
    npm start
   ```
OR
<br/>
4. Create a production build
  ```sh
    npm run build
  ```
5. Serve the production build
   ```sh
    serve -s build
   ```
> [!IMPORTANT]  
> If Windows rejects the ability to run scripts you can either run Powershell as an administrator or to modify the permissions of the current user follow the below instructions

1. View current permissions in WindowsPowershell
   ```sh
    Get-ExecutionPolicy -List
   ```
> [!TIP]  
> If CurrentUser is labeled as Undefined this user cannot run scripts. To change this:

2. Change CurrentUser permissions to run scripts
   ```sh
    Set-ExecutionPolicy Unrestricted -Scope CurrentUser
   ```
> [!WARNING]  
> This does have security implications of course so be careful when running unusual or foreign scripts
> 
<p align="right">(<a href="#readme-top">back to top</a>)</p>


### More Information
  If you would like a more in-depth exploration of the heirarchy of all of the classes and files there is a Documentation folder that contains that information.

<!-- CONTACT -->
## Contact

Sam McKay - [LinkedIn](https://www.linkedin.com/in/sam-mckay13/) [GitHub](https://github.com/Retrope13) - mckaypable@gmail.com

Project Link: [AIME2.0](https://github.com/mamsk3900/AIME2.0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sam-mckay13
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MaterialUI]: https://img.shields.io/badge/MaterialUI-20232A?style=for-the-badge&logo=MUI&logoColor=61DAFB
[MaterialUI-url]: https://mui.com/material-ui/
