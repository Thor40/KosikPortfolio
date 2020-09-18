export default
    {
        // Header Component
        name :'Nicholas Kosik.',
        headerTagline: [
            //Line 1 For Header
                'Howdy',
            //Line 2 For Header
                'Full-Stack Web Developer',
            //Line 3 For Header
                'from Austin, Texas'
    ],
        //Contact Email
        contactEmail:'nicholas.kosik@gmail.com',
        // About Me Text
        abouttext: "Full-Stack Programmer, looking for their next project.",
        // aboutImage:'../assets/images/image0.jpeg', pic of me
       projects:[
           {
             id: 0,
             title:'Nutrifinder', 
             info:'JavaScript web app using a third party API to allow user to keyword-search for foods, nutrition facts, and recipes.',
             imageSrc:"food.jpg",
             github:'https://github.com/durcoorigin/nutrifinder',
             deploy: 'https://durcoorigin.github.io/nutrifinder/'
            },
            {
                id: 1,
                title: 'The Informed Artist',
                info: 'JavaScript web app using MySQL2 and Sequelize to allow users to upload images in this art sharing platform',
                imageSrc: "art.jpg",
                github: 'https://github.com/roxyvaught/The-Informed-Artist',
                deploy: 'https://the-informed-artist.herokuapp.com/'
            },
            { 
                id: 2,
                title: 'Help Exchange',
                info: 'Using MERN stack with MongoDB and Mongoose, and GraphQL, this social media volunteer app allows users to request for help or for volunteering to help.',
                imageSrc: "help.jpg",
                github: 'https://github.com/andytheelf/Help-Exchange',
                deploy: 'https://rocky-retreat-38962.herokuapp.com/'
            }

            /*
            }
                id:
                title:
                description:
                imageSrc:
                url:
            }
                */
        ]
    }