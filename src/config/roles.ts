const AccessControl = require("accesscontrol");

// This list can be fetched from databse
// Using static list now

let grantList = [
    { role: 'admin', resource: 'data', action: 'update:any', attributes: '*' },
    { role: 'admin', resource: 'data', action: 'read:any', attributes: '*' },
 
    { role: 'user', resource: 'data', action: 'update:own', attributes: '*' },
    { role: 'user', resource: 'data', action: 'read:own', attributes: '*' }
];

export const roles = new AccessControl(grantList);