let users = [                                       
  {                                                 
  username: 'David',                                
  email: 'david@frontendsimplified.com',
  password: 'test123',
  subscriptionStatus: 'VIP',
  discordID: 'David Bragg#0001',
  lessonsCompleted: [0, 1]               
}, 
{
  username: 'Mitri',
  email: 'mitri@frontendsimplified.com',
  password: 'mitri123',
  subscriptionStatus: 'VIP',
  discordID: 'Mitri#0001',
  lessonsCompleted: [0, 1, 2, 3]   
},
];

function login(email, password) {
  for (let i = 0)
  console.log(email, password);
}

login('frontendsimplified', 'test123')