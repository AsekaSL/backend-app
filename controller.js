const User = require('./module.js');

const getUser = () => {
    return new Promise((resolve, reject) => {
        User.find()
            .then(response => 
                resolve(response)
            )
            .catch(error => 
                reject(error)
            );
    });
};

const addUser = (req) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            id: req.id,
            name: req.name
        });
        user.save()
            .then(response => 
                resolve(response)
            )
            .catch(error => 
                reject(error)
            );
    });
};

const updateUser = (req) => {
    return new Promise((resolve, reject) => {
        User.updateOne({id: req.id}, {$set: {name: req.name}})
            .then(response => 
                resolve(response)
            )
            .catch(error => 
                reject(error)
            );
    });
};

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        User.deleteOne({id})
            .then(response => 
                resolve(response)
            )
            .catch(error => 
                reject(error)
            );
    });
};

exports.getUser = getUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;