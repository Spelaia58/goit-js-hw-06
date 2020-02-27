import './users.js';

const getUserNames = users => {
  return users.map(user => {
    return user.name;
  });
};
console.log(getUserNames(users));

const getUserWithEyeColor = (users, color) => {
  return users.filter(users => users.eyeColor === color);
};
console.log(getUserWithEyeColor(users, 'blue'));

const getUsersWithGender = (users, gender) => {
  return users
               .filter(users => users.gender === gender)
               .map(users => users.name);
};
console.log(getUsersWithGender(users, 'male'));

const getInactiveUsers = users => {
    return !users.isActive;
  };

  console.log(getInactiveUsers(users));

  const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 

  const getUsersWithAge = (users, min, max) => {
    return users.filter(users => users.age >= min && users.age <= max );
  };
  
  console.log(getUsersWithAge(users, 20, 30));
  
  console.log(getUsersWithAge(users, 30, 40));

  const calculateTotalBalance = users => {
   return users.reduce((calculateTotalBalance, users) => calculateTotalBalance + users.balance, 0);
  };
  
  console.log(calculateTotalBalance(users)); 

  const getUsersWithFriend = (users, friendName) => {
    return users
               .filter(user => user.friends.includes(friendName))
               .map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); 
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); 

  const getNamesSortedByFriendsCount = users => {
    return users
               .sort((a, b) => a.friends.legth - b.friends.legth)
               .map(user => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));

  const getSortedUniqueSkills = users => {
    return users
                .reduce((allSkills, user) => {
                    allSkills.push(...user.skills);
                    return allSkills;
                }, [])
               .filter((user, index, arr) => arr.indexOf(user) === index)
               .sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  

  
