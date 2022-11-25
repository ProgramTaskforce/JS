let users = [
  {
    username: "David",
    email: "david@frontendsimplified.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordID: "David Bragg#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@frontendsimplified.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordID: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Zen",
    email: "Zen@frontendsimplified.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordID: "Zen#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      // only console.log the user , if there is an email with that
      console.log(users[i]); // email-name, that we put in "login" on line 44
      if (users[i].password === password) {
        // check if the user, that we CURRENT are on, the passwort
        console.log("log the user in - the details are correct"); // matches the password
      } else {
        console.log("pasword is incorrect - try again");
      }
      return; // if the loop finds correct emal, this ends the loop afterwards
    } // if the email of user belongs to first [0] user in the users storage
  } // it run once, otherwise X-times, depending on place of the users
  console.log("could not find an emal that matches"); // if email not found after all loops
}

login("david@frontendsimplified.com", "test123");

function register(user) {                      // einzelnen objects bei function gelöscht
  users.push(user);                             // users.push 
  }                                             // let user gelöscht

register({                                    // hier kommen {} klammern hinzu
  username: "Sam",                            // die zuweisungen der Objects, sind jetzt direkt
  email:"Sam@frontendsimplified.com",          // im register
  password: "Sam123",
  subscriptionStatus: "VIP",
  discordID: "Sam#0001",
  lessonsCompleted: [0, 1]
});

console.log(users)                             // als Kontrolle, dass jetzt 4 users oben sind
