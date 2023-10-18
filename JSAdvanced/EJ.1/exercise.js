// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let salary = 0;
  switch (role) {
    case 'ceo':
      salary = '2200€';
      break;

    case 'manager':
      salary = '1800€';
    break;

    case 'cto':
      salary = '1800€';
    break;

    case 'developer':
      salary = '1500€';
    break;
    
    default:
      salary = 'That is not a given role, but it probably earns 1000€'
      break;
  };
  return salary
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);