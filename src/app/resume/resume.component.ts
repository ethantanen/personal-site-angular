import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  schools = [
    {
      name: 'Colorado College',
      date: 'May 2019',
      gpa: '3.6',
      degree: 'Bachelor of the Arts (Computer Science)',
    },
    {
      name: 'Woodrow Wilson Senior High School',
      date: 'May 2015',
      gpa: '3.6',
      degree: 'GED',
    },
  ];

  certifications = [
    { name: 'AWS Certified Cloud Practitioner', date: '2019-2021' },
  ];

  workExperience = [
    {
      title: 'Full Stack Software Developer',
      company: 'Ventera',
      date: '2019-Present',
      location: 'Reston, VA',
      bullets: [
        'Develop and support new features for the Patient Assessment portion of the iQIES project',
        'Diagnose and address issues that arise in the production environment for the iQIES project',
        ' Assist in onboarding new developers to the iQIES project by introducing them to the technologies and business logic necessary to contribute to the project',
        'Gain experience developing software in the Amazon Cloud using Ventera’s sandbox environments',
      ],
    },
    {
      title: 'Intern',
      company: 'Ventera',
      date: 'Summer of 2018',
      location: 'Reston, VA',
      bullets: [
        'Implemented RESTful file sharing API using Node.js',
        'Practiced AGILE and UCD',
        'Implemented personal website using the MEEN stack',
        'Implemented digital concierge that leveraged a series of AWS services including EC2, S3, DynamoDB, Lex, Polly and Lambda',
      ],
    },
    {
      title: 'Groundskeeper',
      company: 'Colorado College',
      date: 'Summer of 2017',
      location: 'Colorado Springs, CO',
      bullets: [
        'Maintained grounds using sustainable landscaping techniques',
        'Converted plots to native and xeric plants to reduce Colorado College’s water consumption',
      ],
    },
    {
      title: 'Baker',
      company: "Loback's Bakery",
      date: 'Summer of 2016',
      location: 'Buena Vista, CO',
      bullets: [
        'Oversaw baking of fresh donuts and bread at 5:00 am daily',
        'Worked with product sales in the afternoon',
      ],
    },
    {
      title: 'Whitewater Kayak Instructor',
      company: 'Camp Kabeyun',
      date: 'Summers of 2013-2015, 2019',
      location: 'Alton Bay, NH',
      bullets: [
        'In Camp Responsibilities: Working with boys 7-15 on interpersonal skills, conflict resolution and maintaining emotional and physical wellbeing',
        'Out of Camp Responsibilities: Guiding boys ages 7-15 down whitewater rivers ranging in difficulty from easy (Class I-II) to difficult (Class III-IV) while teaching essential kayak maneuvers and basic whitewater hydrology',
      ],
    },
    {
      title: 'Floor Manager/Salesmen',
      company: 'Bethesda Pet Shoppe',
      date: 'Sept.-June, 2010-2015',
      bullets: [
        'Live Animal Care: feeding animals, cleaning enclosures, separating sexes, facilitating customer (predominantly children) interactions with the animals',
        'Educated customers on the specificities of animal care',
        'Product sales',
      ],
    },
  ];

  skills = {
    languages: ['JavaScript', 'Python', 'Java', 'C', 'SQL', 'Bash'],
    webDevelopment: [
      'HTML',
      'CSS',
      'Node.js',
      'React.js',
      'Angular 2',
      'Redux.js',
    ],
    softwareEngineering: [
      'Agile',
      'Git',
      'Docker',
      'Consul',
      'Jenkins',
      'AWS',
      'Kong',
      'Vault',
      'Google Cloud',
    ],
    other: [
      'Vim',
      'VS Code',
      'Atom',
      'Express.js',
      'Swagger',
      'EC2',
      'SQS',
      'Lambda',
      'Postgres',
      'Polly',
      'Lex',
      'Bootstrap',
    ],
  };

  allSkills: Array<string>;

  constructor() {
    this.allSkills = Object.keys(this.skills).reduce(
      (acc: Array<string>, ele: string): Array<string> => [
        ...acc,
        ...this.skills[ele],
      ],
      []
    );
  }

  ngOnInit(): void {}
}
