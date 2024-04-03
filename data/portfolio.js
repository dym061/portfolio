const about = {
  name: 'Dominik von Francois',
  company: 'Ciesto Media',
  description: [
    '',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/ciestome',
    facebook: 'https://www.facebook.com/ciestomedia',
	contra: 'https://contra.com/dominikvf',
	upwork: 'https://www.upwork.com/freelancers/ciestomedia',
  }
}

const projects = [
  {
	thumbnail: 'images/w03.png',
	name: 'Referral Program Dashboard',
	description: [
	'Developed a comprehensive referral program for clients featuring a Glideapps dashboard to visualize referrers and referred customers. Utilized JotForms for referrer sign-up and new customer registration, integrating data flow with Make to Glideapps. Airtable stored the data, with automations set up for specific data points and changes, facilitating streamlined referral tracking and management.',
	],
	stack: [ 'Make', 'Zapier', 'JotForm', 'Airtable', 'Glideapps']
  },
  {
	thumbnail: 'images/w03.png',
	name: 'Order Photo Verification Workflow',
	description: [
	'Implemented a workflow using Make.com and Airtable to verify photo inclusion in Shopify orders. Implemented a JotForm for customer photo uploads when necessary, and developed a Kanban dashboard on Airtable for order tracking. Automated notifications with custom email-buttons were created to enhance order management efficiency and customer engagement.',
	],
	stack: [ 'Make', 'Shopify', 'JotForm', 'Airtable' ]
  },
  {
	thumbnail: 'images/w03.png',
	name: 'Notification Workflow for Error Monitoring',
	description: [
	'Crafted a small yet effective notification workflow through Make.com to monitor errors occurring on Zapier or Make. Notifications were routed to a dedicated Slack channel, keeping the team informed about errors or deactivated scenarios on Zapier, thus fostering a proactive troubleshooting environment.',
	],
	stack: [ 'Make', 'Zapier', 'Slack', ]
  },
  {
	thumbnail: 'images/w03.png',
	name: 'Email Notification Workflow',
	description: [
	'Established a notification system on Make.com that filters important emails from the employer’s Gmail account, directing notifications to a specified Slack channel. This ensures vital emails requiring feedback or status updates are promptly addressed, enhancing communication efficiency within the team.',
	],
	stack: [ 'Make', 'Google Cloud API', 'Gmail',  'Slack' ]
  },
  {
    thumbnail: 'images/w01.png',
    name: 'Modulate',
    description: [
      'Using data from MySQL database to display water consumption, electricity consumption, and temperature on graphs using Highcharts. Possible to zoom in/out with drill-down options from minutes to years.',
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
      'Processing two XML files with financial information of several companies and populating separate Word Documents from a template with the data retrieved.',
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
    'HTML',
	'MSSQL',
	'CSS',
	'JavaScript',
	'React',
	'WordPress']

const contact = {
  email: 'ciestomedia@gmail.com',
}

export { about, projects, skills, contact }
