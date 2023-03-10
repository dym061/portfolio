const about = {
  name: 'Dominik von Francois',
  company: 'Acme Labs',
  description: [
    '',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/ciestome',
    facebook: 'https://www.facebook.com/ciestomedia',
	contra: 'https://contra.com/dominikvf',
	upwork: 'https://www.upwork.com/freelancers/~01ccd626aacc1d78b6',
  }
}

const projects = [
  {
    thumbnail: 'images/w01.png',
    name: 'Modulate',
    description: [
      'Using data from MySQL database to display water consumption, electricty consumption, and temperature on graphs using Highcharts. Possible to zoom in/out with drill-down options from minutes to years.',
    ],
    stack: ['PHP', 'HTML', 'CSS', 'MySQL']
  },
  {
    thumbnail: 'images/w02.png',
    name: 'RAdius',
    description: [
      'Controlling actuators and monitoring sensors on an Arduino device to track the position of the sun.',
    ],
    stack: ['PHP', 'HTML', 'CSS', 'C++' ]
  },
  {
    thumbnail: 'images/p00.png',
    name: 'XML Converter',
    description: [
      'Processing two XML files with financial information of several companies and populating seperate Word Documents from a template with the data retrieved.',
    ],
    stack: ['Python', 'DOCX', 'XML']
  },
  {
    thumbnail: 'images/p00.png',
    name: 'XML SFTP Upload',
    description: [
      'Retrieving data from database, generating XML bank files, encrypting and uploading files to SFTP, and downloading and decrypting result files.',
    ],
    stack: ['Python', 'MSSQL', 'XML', 'SFTP']
  },
  {
    thumbnail: 'images/p00.png',
    name: 'System i Automation',
    description: [
      'Interface with legacy finance program in order to automate submitting bulk information retrieved from databases or flatfiles. Created several automations for different tasks within the insurance sector.',
    ],
    stack: ['Python', 'MSSQL', 'MySQL', 'VBA']
  },
  {
    thumbnail: 'images/p00.png',
    name: 'VTT to CSV',
    description: [
      'Create a little standalone program, that grabs and processes VTT files from a folder and then outputs the data as a CSV file into another folder. It displays the data in columns and rows in the CSV file, having 7 columns such as timestamps, filename, caption text, etc.',
    ],
    stack: ['Python']
  }
]

const skills = [
	'Python',
	'PHP',
	'MySQL',
	'MSSQL',
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'WordPress']

const contact = {
  email: 'cyberion1985@gmail.com',
}

export { about, projects, skills, contact }
