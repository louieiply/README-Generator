//returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return license != "No License";
}

//Returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0 License":
      return {badge:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",des:"The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development."};
    case "BSD 3-Clause License":
      return {badge:"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",des:"The 3-Clause BSD License. This license has also been called the 'New BSD License' or 'Modified BSD License'."};
    case "CC0":
      return {badge:"[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",des:"The common creative authorised CC0 Badge."};
    case "Attribution 4.0 International":
      return {badge:"[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)",des:"The common creative authorised Attribution 4.0 International Badge."};
    case "MIT Lincense":
      return {badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",des:"The MIT License is an extremely popular open source software license used on the likes of Ruby on Rails, jQuery, and Node. js. As an open source license, the MIT License dictates what you must, can, and can't do when you use, modify, and/or redistribute the licensed code."};
    case "Eclipse":
      return {badge:"[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",des:"The Eclipse Public License (EPL) is a weak copyleft open source license maintained by the Eclipse Foundation."};
    case "GNU V3":
      return {badge:"[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",des:"GPL 3 is a strong copyleft license, meaning that any copy or modification of the original code must also be released under the GPL v3."};
    case "Mozilla Public License 2.0":
      return {badge:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",des:"The Mozilla Public License 2.0 allows OSS authors to both protect their contributions to a piece of OSS and have the opportunity for their work to be incorporated into well-known and successful pieces of proprietary software."};
    case "The Perl License":
      return {badge:"[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",des:"The PERL License also called The Artistic License is a software license used for certain free and open-source software packages, most notably the standard implementation of the Perl programming language and most CPAN modules, which are dual-licensed under the Artistic License and the GNU General Public License (GPL)."};
    case "Unlicense":
      return {badge:"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",des:"The Unlicense is a public domain equivalent license with a focus on an anti-copyright message. It was first published on January 1 (Public Domain Day), 2010. The Unlicense offers a public domain waiver text with a fall-back public-domain-like license, inspired by permissive licenses but without an attribution clause."};
    //"just in case" case
    default:
      return {badge:"",des:""};
  }
}

//returns the license section of README
function renderLicenseSection(license) {
  const lincenseContent = renderLicenseLink(license);
  return`
  \n${lincenseContent.badge}

  ## License Description

  ${lincenseContent.des}

  `;

}

//Generate markdown for README
function generateMarkdown({title,description,installInstruct,usageInfo,contriGuide,testIntruct,lisbadge,username,email}) {
  var licenseSession = "";
  if(renderLicenseBadge(lisbadge)){
    const licenseContent = renderLicenseSection(lisbadge);
    licenseSession = licenseContent;
  }
  const format =` 
  # ${title}` +

  licenseSession +
      
  `
  ## Description
  
  ${description}
  
  
  ## Install Instruction
  
  ${installInstruct}
  
      
  ## Usage Information
  
  ${usageInfo}
  
  
  ## Contribution Guide
  
  ${contriGuide}
  
  ## Test Instruction
  
  ${testIntruct}
  
  ## Entitled Questions
  
  * Email: ${email}
  * GitHub Username: ${username}
  `;

  return format;

}

module.exports = generateMarkdown;
