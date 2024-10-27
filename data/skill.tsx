import {
    
    DockerIcon,
    ExpressIcon,
    GitIcon,
    JavascriptIcon,
    
    MongoIcon,
    JavaIcon,
    
   
   
    PostgresIcon,
    ReactIcon,
    NextIcon,
   
    TailwindIcon,
    TypescriptIcon,
    PythonIcon,
  } from '@/components/icons';

  import {JSX} from "react";

  export type SkillPillProps = {
    name:string,
    icon:JSX.Element;
  };

  export const LANGUAGES: SkillPillProps[] = [
    {

      name: 'Javascript',
      icon: <JavascriptIcon/>
    },

    {
      name: 'Typescript',
      icon: <TypescriptIcon />,
    },
    

    {
      name: 'Java',
      icon: <JavaIcon />,
    },
    {
      name: 'Python',
      icon: <PythonIcon/>
    }



  ];

  export const FRAMEWORKS: SkillPillProps[] = [
    {
      name: 'express',
      icon: <ExpressIcon />,
    },{

      name: 'next',
      icon:<NextIcon/>

    },
  
    {
      name: 'react',
      icon: <ReactIcon />,
    },
    
    {
      name: 'tailwindcss',
      icon: <TailwindIcon />,
    },
  ];

  export const DATABASES: SkillPillProps[] = [
    {
      name: 'Postgres',
      icon: <PostgresIcon />,
    },
    {
      name: 'Mongodb',
      icon: <MongoIcon />,
    },
  ];

  export const TOOLS: SkillPillProps[] = [
    
    {
      name: 'git',
      icon: <GitIcon />,
    },
    {
      name: 'docker',
      icon: <DockerIcon />,
    }
  ];
